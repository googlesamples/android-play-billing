/**
 * Copyright (C) 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.kotlin.trivialdrive.billingrepo


import android.app.Activity
import android.app.Application
import android.content.Context
import android.util.Log
import androidx.annotation.WorkerThread
import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import com.android.billingclient.api.*
import com.kotlin.trivialdrive.billingrepo.BillingRepository.GameSku.CONSUMABLE_SKUS
import com.kotlin.trivialdrive.billingrepo.BillingRepository.GameSku.GOLD_STATUS_SKUS
import com.kotlin.trivialdrive.billingrepo.BillingRepository.GameSku.INAPP_SKUS
import com.kotlin.trivialdrive.billingrepo.BillingRepository.GameSku.SUBS_SKUS
import com.kotlin.trivialdrive.billingrepo.BillingRepository.RetryPolicies.connectionRetryPolicy
import com.kotlin.trivialdrive.billingrepo.BillingRepository.RetryPolicies.resetConnectionRetryPolicyCounter
import com.kotlin.trivialdrive.billingrepo.BillingRepository.RetryPolicies.taskExecutionRetryPolicy
import com.kotlin.trivialdrive.billingrepo.BillingRepository.Throttle.isLastInvocationTimeStale
import com.kotlin.trivialdrive.billingrepo.BillingRepository.Throttle.refreshLastInvocationTime
import com.kotlin.trivialdrive.billingrepo.localdb.*
import kotlinx.coroutines.*
import java.util.*
import java.util.concurrent.atomic.AtomicInteger
import kotlin.math.pow

/**
 * FOREWORD:
 *
 * To avoid ambiguity and for simplified readability:
 *
 *  - the term "user" (except where obvious?) shall refer to people who download the app and buy
 *    products or subscriptions.
 *
 *  - the term "client" shall refer to those developers/engineers on the team who depend on the
 *    billing repository as an API.
 *
 * OVERVIEW:
 *
 * A solid In-App Billing implementation depends on purchase confirmation data from three different
 * data sources: the Google Play Billing service, a secure server, and the app's own local cache.
 * Naturally a repository module is needed to manage all these different data sources and
 * associated operations so that the rest of the app can access this data effortlessly. Let this
 * module be called [BillingRepository]. And -- on behalf of the rest of the app -- it shall handle
 * all interactions with the _Play Billing Library_, the billing portions of a secure server,
 * and the billing portions of the app’s local cache.
 *
 * What the rest of the app gets, then, is a simple API in the form of a ViewModel that comprises:
 * a list of inventory (i.e. what’s for sale); a purchase function (i.e. how to buy); and a set
 * of entitlements (i.e. what the user owns). Hence, for the rest of the app the complexities and
 * nuances of _Play Billing_ become nonexistent. All distinctions such as managed vs consumable
 * products vs subscriptions etc. fall out of sight and therefore out of mind.
 *
 * What this means, on the other hand, is that all the work is now concentrated in one module,
 * namely the [BillingRepository]. And this repository shall know exactly everything the app
 * is selling and how. And the app should not be selling anything that's not listed in this
 * repository. Therefore, the engineers responsible for implementing the [BillingRepository]
 * need to fully understand the app's business model.
 *
 * Figure 1 shows the app from the perspective of the billing module.
 *
 * ```
 *    _____________
 *  _|___________  |     _____________       _____________     __________________________
 * |             | |    |             |     |             |  /|Secure Server Billing Data|
 * |  Activity   | |    | ViewModel   |     | Billing     | /  --------------------------
 * |     &       | |    |    Set      |     | Repository  |/   ________________________
 * |  Fragment   | |--->|             |---->|             |---|Local Cache Billing Data|
 * |    Set      | |    |             |     |             |    ------------------------
 * |             | |    |             |     |             |    _________________
 * |             | |    |             |     |             |---|Play Billing Data|
 * |             |_|    |             |     |             |    -----------------
 * |_____________|      |_____________|     |_____________|
 *
 *  Figure 1
 * ```
 *
 * DATA DYNAMICS
 *
 * It’s important to consider data mechanics when designing a feature as crucial as the
 * app’s billing repository. Where the billing data rests and how it flows through the repository
 * are central aspects of the design that should not be left to chance or the mysterious voodoos
 * of evolution. Figure 2 depicts an approach that streamlines the flow of data through the repo.
 *
 * 1. [launchBillingFlow] and [queryPurchasesAsync] can be called directly from the client:
 *   [launchBillingFlow] may be triggered by a button click when the user wants to buy something;
 *   [queryPurchasesAsync] may be triggered by a pull-to-refresh or an [Activity] lifecycle event.
 *   Hence, they are the starting points in the process.
 *
 * 2. [onPurchasesUpdated] is the callback that the Play [BillingClient] calls in response to its
 *    [launcBillingFlow][BillingClient.launchBillingFlow] being called. Typically, developers are
 *    recommended to do work inside this method. In this scalable architecture, however, the
 *    following recommendation is made: If the response code is [BillingResponse.OK], then
 *    developers may go straight to [processPurchases]. If however the response code is
 *    [BillingResponse.ITEM_ALREADY_OWNED], then developers should call [queryPurchasesAsync] to
 *    verify if other such already-owned items exist that should be processed.
 *
 * 3. The [queryPurchasesAsync] method grabs data from Play's [BillingClient] and from the secure
 *    server's billing client and merges that data into the local cache billing client after
 *    performing three-way verification on the data for security. It always does this so that
 *    even if a purchase was not made through this app, and was not made through Google Play,
 *    as long as the secure server knows about said purchase, this method will grab it for the
 *    app instance. Calling Play's [BillingClient] is cheap; it involves no network calls since
 *    Play stores the data in its own local cache. But calling the secure server billing client
 *    does involve network calls. Therefore, measures must be taken to [throttle][Throttle] that
 *    portion of the flow (i.e. [queryPurchasesFromSecureServer]).
 *
 * 4. Finally, all data that end up as part of the public interface of the [BillingRepository],
 *    i.e. in the [BillingViewModel] and therefore in other portions of the app, come immediately
 *    from the local cache billing client. The local cache is backed by a Room database and all
 *    the data visible to the clients is wrapped in [LiveData] so that changes are reflected in
 *    the clients as soon as they happen.
 *
 *
 * ```
 *  _____                        _________________
 * |Start|----------------------|launchBillingFlow|
 *  -----                        -----------------
 *                                        |
 *                                  ______v____________
 *                                 |onPurchasesUpdated |
 *                                  -------------------
 *                                 /      |
 *                   ITEM_ALREADY_OWNED   |
 *                               /        |
 *  _____       ________________v__       |
 * |Start|-----|queryPurchasesAsync|      OK
 *  -----       -------------------       |
 *                               \        |
 *                               v________v_______
 *                              |processPurchases |
 *                               -----------------
 *                                       /|\
 *                                      / | \
 *                                     /  |  \
 *                ____________________v   |   v_________
 *               |[processConsumables]|   |  | toServer |
 *                --------------------    |   ----------
 *                             |          |   ______|____
 *                             |          |  | fromServer|
 *                             |          |   -----------
 *                             |          |         |
 *                             v__________v_________v_
 *                            |localCacheBillingClient|
 *                             -----------------------
 *                                        |
 *                                  ______v____
 *                                 |API/clients|
 *                                  -----------
 *
 * Figure 2
 * ```
 *
 * FINAL THOUGHT
 *
 * While the architecture presented here and 95% of the code is highly reusable, this repository
 * nonetheless will always be app-specific. For Trivial Drive, for example, it will be tailored to
 * sell three items: a premium car, gas for driving, and "gold status." Consequently, this repo
 * must handle logic that deals with what it means for a user to own a premium car or buy gas. To
 * say it differently: For your own app, this repo shall know exactly everything the app is selling
 * and how. And the app should not be selling anything that's not listed in this repo. Therefore,
 * the engineers responsible for implementing the [BillingRepository] need to fully understand the
 * app's business model.
 *
 * P.S.
 *
 * While subscription [BillingClient.SkuType.SUBS] is mentioned in this app, Google Play offers a
 * wealth of subscription-specific features that aren't addressed here. But you can learn about them
 * in the Classy Taxi sample app.
 *
 *  @param application the [Application] context
 */
class BillingRepository private constructor(private val application: Application) :
        PurchasesUpdatedListener, BillingClientStateListener,
        ConsumeResponseListener, SkuDetailsResponseListener {


    /**
     * The Play [BillingClient] is the most reliable and primary source of truth for all purchases
     * made through the Play Store. The Play Store takes security precautions in guarding the data.
     * Also the data is available offline in most cases, which means the app incurs no network
     * charges for checking for purchases using the Play [BillingClient]. The offline bit is
     * because the Play Store caches every purchase the user owns, in an
     * [eventually consistent manner](https://developer.android.com/google/play/billing/billing_library_overview#Keep-up-to-date).
     * This is the only billing client an app is actually required to have on Android. The other
     * two are optional.
     *
     * ASIDE. Notice that the connection to [playStoreBillingClient] is created using the
     * applicationContext. This means the instance is not [Activity]-specific. And since it's also
     * not expensive, it can remain open for the life of the entire [Application]. So whether it is
     * (re)created for each [Activity] or [Fragment] or is kept open for the life of the application
     * is a matter of choice.
     */
    lateinit private var playStoreBillingClient: BillingClient

    /**
     * In addition to the Play billing client, there may need to have a secure server billing client
     * if the platform in question provides the user multiple avenues for purchasing premium
     * content. Examples of such avenues include the web or another mobile OS besides Android.
     * So if, for instance, the user makes some purchases through iOS and some purchases through
     * Android, then the Play Store may not know everything the user owns. Therefore, in order to
     * give the user access to all their entitlements on Android, the secure server would be
     * consulted.
     *
     * Security is, of course, an important consideration of the billing repo’s architecture.
     * So in addition to the aforementioned cases, there may still want to have a secure server
     * billing client for an additional level of security, such as signature verification.
     * Understanding this, Play Billing provides a server-to-server interface through which all
     * purchases made on Android can be verified.
     *
     * Therefore, an app’s own secure server is always ideally the best place to check for billing
     * data. Nevertheless, there may be times when the secure server is unavailable either for
     * maintenance or because the user has no internet access. For this reason, verifying purchases
     * with Play’s [BillingClient] is a great option.
     */
    lateinit private var secureServerBillingClient: BillingWebservice


    /**
     * A local cache billing client is important in that both the Play Store and the secure server
     * may be temporarily unavailable: the Play Store may be unavailable during updates and
     * the secure server during maintenance. In such cases, it may be important that the users
     * continue to get access to premium data that they own. This of course is at your discretion:
     * you may choose to not provide offline access to your premium content.
     *
     * Even beyond offline access to premium content, however, a local cache billing client makes
     * certain transactions easier. Without an offline cache billing client, for instance, the app
     * would need both the secure server and the Play billing client to be available in order to
     * process consumable products.
     *
     * The data that lives here should be refreshed at regular intervals so that it reflects what's
     * on the secure server and the Google Play Store.
     */
    lateinit private var localCacheBillingClient: CachedPurchaseDatabase

    /**
     * This list tells clients what subscriptions are available for sale
     */
    val subsSkuDetailsListLiveData: LiveData<List<AugmentedSkuDetails>> by lazy {
        if (::localCacheBillingClient.isInitialized == false) {
            localCacheBillingClient = CachedPurchaseDatabase.getInstance(application)
        }
        localCacheBillingClient.skuDetailsDao().getSubscriptionSkuDetails()
    }

    /**
     * This list tells clients what in-app products are available for sale
     */
    val inappSkuDetailsListLiveData: LiveData<List<AugmentedSkuDetails>> by lazy {
        if (::localCacheBillingClient.isInitialized == false) {
            localCacheBillingClient = CachedPurchaseDatabase.getInstance(application)
        }
        localCacheBillingClient.skuDetailsDao().getInappSkuDetails()
    }

    //START list of each distinct item user may own (i.e. entitlements)

    /*
     * The clients are interested in two types of information: what's for sale, and what the user
     * owns access to. subsSkuDetailsListLiveData and inappSkuDetailsListLiveData tell the clients
     * what's for sale. gasTankLiveData, premiumCarLiveData, and goldStatusLiveData will tell the
     * client what the user is entitled to. Notice there is nothing billing specific about these
     * items; they are just properties of the app. So exposing these items to the rest of the app
     * will not necessitate the clients to understand how billing works.
     *
     * A bad approach would be to provide the clients a list of purchases and let them figure it
     * out from there:
     *
     *
     * ```
     *    val purchasesLiveData: LiveData<Set<CachedPurchase>>
     *        by lazy {
     *            queryPurchasesAsync()
     *             return localCacheBillingClient.purchaseDao().getPurchases()//assuming liveData
     *       }
     * ```
     *
     * In doing this, however, the [BillingRepository] API would not be client-friendly and the
     * rest of the engineering team would suffer for it. So instead of tracking all purchases in
     * some general way and then let the clients of this API figure it out, it is more effective
     * to specify each item for the clients.
     *
     * For instance, this sample app sells 3 different items: gas, a car, and gold status. Hence,
     * the rest of the app wants to know -- at all time and as it happens -- the following: how much
     * gas the user has; what car the user owns; and does the user have gold status. Don't tell
     * the clients of the API anything else. How billing works is the responsibility of the
     * [BillingRepository] alone. It alone should take care of the nuances. Also you should provide
     * each one of those items as a [LiveData] so that the appropriate UIs get updated effortlessly.
     */

    /**
     * Tracks how much gas the user owns. Because this is a [LiveData] item, clients will know
     * immediately when purchases are awarded to this user.
     *
     * __An Important Note:__
     * Technically, you could simply return `val gasLevel: LiveData<Int>` to clients and let them
     * figure out how to use it. But in the spirit of being kind, you may choose to return a custom
     * data type called [GasTank], which will encapsulate the facts that, in this app, gas level
     * has a lower bound of 0 and an upper bound of 4. This way, clients will know exactly when
     * the user is not allowed to make a purchase and when the user needs to make a purchase.
     * Always err on the side of doing the right thing for the clients of your API.
     *
     * @See [GasTank]
     */
    val gasTankLiveData: LiveData<GasTank> by lazy {
        if (::localCacheBillingClient.isInitialized == false) {
            localCacheBillingClient = CachedPurchaseDatabase.getInstance(application)
        }
        localCacheBillingClient.entitlementsDao().getGasTank()
    }

    /**
     * Tracks whether this user is entitled to a premium car. This call returns data from the app's
     * own local DB; this way if Play and the secure server are unavailable, users still have
     * access to features they purchased.  Normally this would be a good place to update the local
     * cache to make sure it's always up-to-date. However, onBillingSetupFinished already called
     * queryPurchasesAsync for you; so no need.
     */
    val premiumCarLiveData: LiveData<PremiumCar> by lazy {
        if (::localCacheBillingClient.isInitialized == false) {
            localCacheBillingClient = CachedPurchaseDatabase.getInstance(application)
        }
        localCacheBillingClient.entitlementsDao().getPremiumCar()
    }

    /**
     * Tracks whether this user is entitled to gold status. This call returns data from the app's
     * own local DB; this way if Play and the secure server are unavailable, users still have
     * access to features they purchased.  Normally this would be a good place to update the local
     * cache to make sure it's always up-to-date. However, onBillingSetupFinished already called
     * queryPurchasesAsync for you; so no need.
     */
    val goldStatusLiveData: LiveData<GoldStatus> by lazy {
        if (::localCacheBillingClient.isInitialized == false) {
            localCacheBillingClient = CachedPurchaseDatabase.getInstance(application)
        }
        localCacheBillingClient.entitlementsDao().getGoldStatus()
    }

    //END list of each distinct item user may own (i.e. entitlements)

    /**
     * Correlated data sources necessarily belong inside a repository module so that --
     * as mentioned above -- the rest of the app can have effortless access to the data it needs.
     * Still, it may be effective to track the opening (and sometimes closing) of data source
     * connections based on lifecycle events. One convenient way of doing that is by calling this
     * [startDataSourceConnections] when the [BillingViewModel] is instantiated and
     * [endDataSourceConnections] inside [ViewModel.onCleared]
     */
    fun startDataSourceConnections() {
        Log.d(LOG_TAG, "startDataSourceConnections")
        instantiateAndConnectToPlayBillingService()
        secureServerBillingClient = BillingWebservice.create()
        localCacheBillingClient = CachedPurchaseDatabase.getInstance(application)
    }

    fun endDataSourceConnections() {
        playStoreBillingClient.endConnection()
        //normally you don't worry about closing a DB connection unless you have more than
        //one DB open. so no need to call 'localCacheBillingClient.close()'
        Log.d(LOG_TAG, "startDataSourceConnections")
    }

    private fun instantiateAndConnectToPlayBillingService() {
        playStoreBillingClient = BillingClient.newBuilder(application.applicationContext)
                .setListener(this).build()
        connectToPlayBillingService()
    }

    private fun connectToPlayBillingService(): Boolean {
        Log.d(LOG_TAG, "connectToPlayBillingService")
        if (!playStoreBillingClient.isReady) {
            playStoreBillingClient.startConnection(this)
            return true
        }
        return false
    }

    /**
     * This is the callback for when connection to the Play [BillingClient] has been successfully
     * established. It might make sense to get [SkuDetails] and [Purchases][Purchase] at this point.
     */
    override fun onBillingSetupFinished(responseCode: Int) {
        when (responseCode) {
            BillingClient.BillingResponse.OK -> {
                Log.d(LOG_TAG, "onBillingSetupFinished successfully")
                resetConnectionRetryPolicyCounter()//for retry policy
                querySkuDetailsAsync(BillingClient.SkuType.INAPP, GameSku.INAPP_SKUS)
                querySkuDetailsAsync(BillingClient.SkuType.SUBS, GameSku.SUBS_SKUS)
                queryPurchasesAsync()
            }
            BillingClient.BillingResponse.BILLING_UNAVAILABLE -> {
                //Some apps may choose to make decisions based on this knowledge.
                Log.d(LOG_TAG, "onBillingSetupFinished but billing is not available on this device")
            }
            else -> {
                //do nothing. Someone else will connect it through retry policy.
                //May choose to send to server though
                Log.d(LOG_TAG, "onBillingSetupFinished with failure response code: $responseCode")
            }
        }

    }

    /**
     * This method is called when the app has inadvertently disconnected from the Play
     * BillingClient. An attempt should be made to reconnect using an exponential backoff policy.
     * Note the distinction between [endConnection][BillingClient.endConnection] and disconnected:
     * - disconnected means it's okay to try reconnecting.
     * - endConnection means the [playStoreBillingClient] must be re-instantiated and then start
     *   a new connection because: a BillingClient instance is invalid after endConnection has
     *   been called.
     **/
    override fun onBillingServiceDisconnected() {
        Log.d(LOG_TAG, "onBillingServiceDisconnected")
        connectionRetryPolicy { connectToPlayBillingService() }
    }

    /**
     * BACKGROUND
     *
     * Play Billing refers to receipts as [Purchases][Purchase]. So when a user buys something,
     * Play Billing returns a [Purchase] object that the app then uses to release the actual
     * [Entitlement] to the user. Receipts are pivotal within the [BillingRepositor]; but they are
     * not part of the repo’s public API because clients don’t need to know about them
     * (clients don’t need to know anything about billing).  At what moment the release of
     * entitlements actually takes place depends on the type of purchase. For consumable products,
     * the release may be deferred until after consumption by Play; for non-consumable products and
     * subscriptions, the release may be immediate. It is convenient to keep receipts in the local
     * cache for augmented security and for making some transactions easier.
     *
     * THIS METHOD
     *
     * [This method][queryPurchasesAsync] grabs all the active purchases of this user and makes them
     * available to this app instance. Whereas this method plays a central role in the billing
     * system, it should be called liberally both within this repo and by clients. With that in
     * mind, the implementation must be assiduous in managing communication with data sources and in
     * processing the correlations amongst data types.
     *
     * Because purchase data is vital to the rest of the app, this method gets a call each time
     * the [BillingViewModel] successfully establishes connection with the Play [BillingClient]:
     * the call comes through [onBillingSetupFinished]. Recall also from Figure 2 that this method
     * gets called from inside [onPurchasesUpdated] in order not only to streamline the flow of
     * purchase data but also to seize on the opportunity to grab purchases from all possible
     * sources (i.e. Play and secure server).
     *
     * This method works by first grabbing both INAPP and SUBS purchases from the Play Store.
     * Then it checks if there is any new purchase (i.e. not yet recorded in the local cache).
     * If there are new purchases: it sends them to server for verification and safekeeping,
     * and it saves them in the local cache. But if there are no new purchases, it calls the
     * secure server to check for purchases there.
     *
     * Calls should not be made to the secure server too often since that can incur extra costs.
     * Instead calls should be made at intervals, such as only allow calls at least 2 hours apart.
     * On the one hand, it is not good that users should not have access on Android to purchases
     * they made through another OS; on the other hand, it is not good to be paying too much to
     * hosting companies because the secure servers is being hit too often just to check for new
     * purchases -- unless users are actually buying items very often across multiple devices.
     *
     * In this sample, the variables lastInvocationTime and DEAD_BAND are used to
     * [throttle][Throttle] calls to the secure server. lastInvocationTime could be persisted in
     * [Room]; here, [SharedPreferences] is used.
     */
    fun queryPurchasesAsync() {
        fun task() {
            Log.d(LOG_TAG, "queryPurchasesAsync called")
            val purchasesResult = HashSet<Purchase>()
            var result = playStoreBillingClient.queryPurchases(BillingClient.SkuType.INAPP)
            Log.d(LOG_TAG, "queryPurchasesAsync INAPP results: ${result?.purchasesList}")
            result?.purchasesList?.apply { purchasesResult.addAll(this) }
            if (isSubscriptionSupported()) {
                result = playStoreBillingClient.queryPurchases(BillingClient.SkuType.SUBS)
                result?.purchasesList?.apply { purchasesResult.addAll(this) }
                Log.d(LOG_TAG, "queryPurchasesAsync SUBS results: ${result?.purchasesList}")
            }

            processPurchases(purchasesResult)
        }
        taskExecutionRetryPolicy(playStoreBillingClient, this) { task() }
    }

    private fun processPurchases(purchasesResult: Set<Purchase>) = CoroutineScope(Job() + Dispatchers.IO).launch {
        val cachedPurchases = localCacheBillingClient.purchaseDao().getPurchases()
        val newBatch = HashSet<Purchase>(purchasesResult.size)
        purchasesResult.forEach { purchase ->
            if (isSignatureValid(purchase) && !cachedPurchases.any { it.data == purchase }) {//todo !cachedPurchases.contains(purchase)
                newBatch.add(purchase)
            }
        }

        if (newBatch.isNotEmpty()) {
            sendPurchasesToServer(newBatch)
            // We still care about purchasesResult in case a old purchase has not yet been consumed.
            saveToLocalDatabase(newBatch, purchasesResult)
            //consumeAsync(purchasesResult): do this inside saveToLocalDatabase to avoid race condition
        } else if (isLastInvocationTimeStale(application)) {
            handleConsumablePurchasesAsync(purchasesResult)
            queryPurchasesFromSecureServer()
        }
    }

    /**
     * Ideally this check should be done on the secure server. @see [Security]
     */
    private fun isSignatureValid(purchase: Purchase): Boolean {
        return Security.verifyPurchase(Security.BASE_64_ENCODED_PUBLIC_KEY, purchase.originalJson, purchase.signature)
    }

    /**
     * In this architecture, this method is reachable through two different pathways, each requiring
     * different treatment.
     *
     * Pathway 1:
     *
     * [onPurchasesUpdated] -> [queryPurchasesAsync] -> [sendPurchasesToServer] -> [queryPurchasesFromSecureServer]:
     *
     * In this scenario, the Play Store has just claimed to have new purchases. Trust but verify.
     * The secure server has primacy over all other data sources. Therefore the purchase data
     * from the Play Store should be sent to the secure server. In turn, the secure server will
     * query Play directly through the server-to-server API to confirm that the purchases are
     * indeed valid. After the validation is confirmed, it is convenient and sensible to also
     * cleanup the local cache with data from the server.
     *
     * Pathway 2:
     *
     * {clients} -> [queryPurchasesAsync] -> [queryPurchasesFromSecureServer]:
     *
     * In this scenario, someone other than Play has triggered the flow; perhaps a pull-to-refresh?
     * So even if there were no new purchases from Play to process, it's still important to check
     * on the secure server for purchases that Play is possibly not aware of. However, for calls
     * coming through this pathway, it is advisable to apply a [throttle][Throttle] so to not hit
     * the secure server too often.
     *
     * All of this is already handled by the [queryPurchasesAsync] method in the code block
     * ```
     *  else if (isLastInvocationTimeStale(application)) {
     *      handleConsumablePurchasesAsync(purchasesResult)
     *      queryPurchasesFromSecureServer()
     *  }
     * ```
     */
    private fun queryPurchasesFromSecureServer() {
        /* TODO FIXME:  This is not a real implementation. If you actually have a server, you must

            If you are using a secure server to verify purchases or facilitate purchases made
            outside of Google Play then this is where you would make a request to that server to
            get all of the active purchases it has for this user.  Here are the steps:

            1 - use retrofit with coroutine or RxJava to get all active purchases from the server
            2 - compare the purchases in the local cache with those returned by server
            3 - if local cache has purchases that aren't in the list from server, send those
                purchases to server for investigation: you may be dealing with fraud.
            4 - Otherwise, update the local cache with the data from server with something like

            ```
            localCacheBillingClient.purchaseDao().deleteAll()
            saveToLocalDatabase(secureServerResult)
            ```
            It's important to use saveToLocalDatabase so as to update the Entitlements in passing.

            5 - refresh lastInvocationTime.
         */
        fun getPurchasesFromSecureServerToLocalDB() {
            //steps 1 to 4 go in here
        }
        getPurchasesFromSecureServerToLocalDB()

        //this is step 5: refresh lastInvocationTime.
        //This is an important part of the throttling mechanism.
        refreshLastInvocationTime(application)

        //TODO: FIXME: Again, this is not a real implementation. You must implement this yourself
    }


    private fun sendPurchasesToServer(purchases: Set<Purchase>) {
        /*
        TODO if you have a server:
        send purchases to server using maybe

         `secureServerBillingClient.updateServer(purchases)`

         and then after server has processed the information, get purchases from server using
         [queryPurchasesFromSecureServer], which will help clean up the local cache
         */
    }

    /**
     * Recall that Play Billing only supports two SKU types:
     * [in-app products][BillingClient.SkuType.INAPP] and
     * [subscriptions][BillingClient.SkuType.SUBS]. In-app products, as the name suggests, refer
     * to actual items that a user can buy, such as a house or food; while subscriptions refer to
     * services that a user must pay for regularly, such as auto-insurance. Naturally subscriptions
     * are not consumable -- it's not like you can eat your auto-insurance policy.
     *
     * Play Billing provides methods for consuming in-app products because they understand that
     * apps may sell items that users will keep forever (i.e. never consume) such as a house,
     * and items that users will need to keep buying such as food. Nevertheless, Play leaves the
     * distinction for which in-app products are consumable vs non-consumable entirely up to you.
     * In other words, inside your app you have the godlike power to decide whether it's logical for
     * people to eat their houses and live in their hotdogs or vice versa. BUT: once you tell
     * the Play Store to consume an in-app product, Play no longer tracks that purchase. Hence,
     * the app must implement logic here and on the secure server to track consumable items.
     *
     * So why would an app tell the Play Store to consume an item? That's because Play won't let
     * users buy items they already bought but haven't consumed. So if an app wants its users to
     * be able to keep buying an item, it must call [BillingClient.consumeAsync] each time they
     * buy it. In Trivial Drive for example consumeAsync is called each time the user buys gas;
     * otherwise they would never be able to buy gas or drive again once the tank becomes empty.
     */
    private fun handleConsumablePurchasesAsync(purchases: Set<Purchase>) {
        purchases.forEach {
            if (GameSku.CONSUMABLE_SKUS.contains(it.sku)) {
                playStoreBillingClient.consumeAsync(it.purchaseToken, this@BillingRepository)
                //tell your server:
                Log.i(LOG_TAG, "handleConsumablePurchasesAsync: asked Play Billing to consume sku = ${it.sku}")
            }
        }
    }

    /**
     * Checks if the user's device supports subscriptions
     */
    private fun isSubscriptionSupported(): Boolean {
        val responseCode = playStoreBillingClient.isFeatureSupported(BillingClient.FeatureType.SUBSCRIPTIONS)
        if (responseCode != BillingClient.BillingResponse.OK) {
            Log.w(LOG_TAG, "isSubscriptionSupported() got an error response: $responseCode")
        }
        return responseCode == BillingClient.BillingResponse.OK
    }

    /**
     * Presumably a set of SKUs has been defined on the Play Developer Console. This method is for
     * requesting a (improper) subset of those SKUs. Hence, the method accepts a list of product IDs
     * and returns the matching list of SkuDetails.
     *
     * The result is passed to [onSkuDetailsResponse]
     */
    private fun querySkuDetailsAsync(@BillingClient.SkuType skuType: String, skuList: List<String>) {
        val params = SkuDetailsParams.newBuilder()
        params.setSkusList(skuList).setType(skuType)
        taskExecutionRetryPolicy(playStoreBillingClient, this) {
            Log.d(LOG_TAG, "querySkuDetailsAsync for $skuType")
            playStoreBillingClient.querySkuDetailsAsync(params.build(), this)

        }
    }

    /**
     * This is the callback from querySkuDetailsAsync. The local cache uses this response to create
     * an AugmentedSkuDetails list for the clients.
     */
    override fun onSkuDetailsResponse(responseCode: Int, skuDetailsList: MutableList<SkuDetails>?) {
        if (responseCode != BillingClient.BillingResponse.OK) {
            Log.w(LOG_TAG, "SkuDetails query failed with response: $responseCode")
        } else {
            Log.d(LOG_TAG, "SkuDetails query responded with success. List: $skuDetailsList")
        }

        if (skuDetailsList.orEmpty().isNotEmpty()) {
            val scope = CoroutineScope(Job() + Dispatchers.IO)
            scope.launch {
                skuDetailsList?.forEach { localCacheBillingClient.skuDetailsDao().insertOrUpdate(it) }
            }
        }
    }

    /**
     * This is the function to call when user wishes to make a purchase. This function will
     * launch the Play Billing flow. The response to this call is returned in
     * [onPurchasesUpdated]
     */
    fun launchBillingFlow(activity: Activity, augmentedSkuDetails: AugmentedSkuDetails) =
            launchBillingFlow(activity, SkuDetails(augmentedSkuDetails.originalJson))

    fun launchBillingFlow(activity: Activity, skuDetails: SkuDetails) {
        val oldSku: String? = getOldSku(skuDetails.sku)
        val purchaseParams = BillingFlowParams.newBuilder().setSkuDetails(skuDetails)
                .setOldSku(oldSku).build()

        taskExecutionRetryPolicy(playStoreBillingClient, this) {
            playStoreBillingClient.launchBillingFlow(activity, purchaseParams)
        }
    }

    /**
     * This sample app only offers one item for subscription: GoldStatus. And there are two
     * ways a user can subscribe to GoldStatus: monthly or yearly. Hence it's easy for
     * the [BillingRepository] to get the old sku if one exists. You too should have no problem
     * knowing this fact about your app.
     *
     * We must here again reiterate. This sample focuses more on overall architecture, so although
     * we mention subscriptions, it is not about subscription per se. Classy Taxi is the sample app
     * that focuses on subscriptions.
     *
     */
    private fun getOldSku(sku: String?): String? {
        var result: String? = null
        if (GameSku.SUBS_SKUS.contains(sku)) {
            goldStatusLiveData.value?.apply {
                result = when (sku) {
                    GameSku.GOLD_MONTHLY -> GameSku.GOLD_YEARLY
                    else -> GameSku.GOLD_YEARLY
                }
            }
        }
        return result
    }

    /**
     * This method is called by the [playStoreBillingClient] when new purchases are detected.
     * The purchase list in this method is not the same as the one in
     * [queryPurchases][BillingClient.queryPurchases]. Whereas queryPurchases returns everything
     * this user owns, [onPurchasesUpdated] only returns the items that were just now purchased or
     * billed.
     *
     * The purchases provided here should be passed along to the secure server for
     * [verification](https://developer.android.com/google/play/billing/billing_library_overview#Verify)
     * and safekeeping. And if this purchase is consumable, it should be consumed and the secure
     * server should be told of the consumption. All that is accomplished by calling
     * [queryPurchasesAsync].
     */
    override fun onPurchasesUpdated(responseCode: Int, purchases: MutableList<Purchase>?) {
        when (responseCode) {
            BillingClient.BillingResponse.OK -> {
                // will handle server verification, consumables, and updating the local cache
                purchases?.apply { processPurchases(this.toSet()) }
            }
            BillingClient.BillingResponse.ITEM_ALREADY_OWNED -> {
                //item already owned? call queryPurchasesAsync to verify and process all such items
                Log.d(LOG_TAG, "already owned items")
                queryPurchasesAsync()
            }
            BillingClient.BillingResponse.DEVELOPER_ERROR -> {
                Log.e(LOG_TAG, "Your app's configuration is incorrect. Review in the Google Play" +
                        "Console. Possible causes of this error include: APK is not signed with " +
                        "release key; SKU productId mismatch.")
            }
            else -> {
                Log.i(LOG_TAG, "BillingClient.BillingResponse error code: $responseCode")
            }
        }
    }

    /**
     * Called by [playStoreBillingClient] to notify that a consume operation has finished.
     * Appropriate action should be taken in the app, such as add fuel to user's car.
     * This information should also be saved on the secure server in case user accesses the app
     * through another device.
     */
    override fun onConsumeResponse(responseCode: Int, purchaseToken: String?) {
        Log.d(LOG_TAG, "onConsumeResponse")
        when (responseCode) {
            BillingClient.BillingResponse.OK -> {
                //give user the items s/he just bought by updating the appropriate tables/databases
                purchaseToken?.apply { saveToLocalDatabase(this) }
                secureServerBillingClient.onComsumeResponse(purchaseToken, responseCode)
            }
            else -> {
                Log.w(LOG_TAG, "Error consuming purchase with token ($purchaseToken). " +
                        "Response code: $responseCode")
            }
        }
    }

    /**
     * [Purchase] is a central data type. Hence it is used to update all the other data types
     * presented to clients. It is used to update [entitlements][Entitlement], but it is also used
     * to update the [AugmentedSkuDetails] entities (see the documentation of [AugmentedSkuDetails]
     * for more context.)
     *
     * This is Kotlin and so it makes sense to use coroutines to persist the data in the background.
     * But if an app prefers to use RxJava, they should feel free to do so.
     *
     * There are three things happening here:
     * 1. If user just purchase non-consumable items or subscriptions, update their entitlement
     *      to those items. (i.e. gold status and premium car)
     * 2. Save all the [Purchase] objects to the local cache.
     * 3. Tell Play to consume the consumable products (i.e. gas) if any
     *
     * Note that an Entitlement and a Purchase aren't the same thing although they are related.
     * Think of the Purchase as a receipt and as Entitlement as the actual product.
     */
    private fun saveToLocalDatabase(newBatch: Set<Purchase>, allPurchases: Set<Purchase>) {
        val scope = CoroutineScope(Job() + Dispatchers.IO)
        scope.launch {
            newBatch.forEach { purchase ->
                when (purchase.sku) {
                    GameSku.PREMIUM_CAR -> {
                        val premiumCar = PremiumCar(true)
                        insert(premiumCar)
                        localCacheBillingClient.skuDetailsDao().insertOrUpdate(purchase.sku, premiumCar.mayPurchase())
                    }
                    GameSku.GOLD_MONTHLY, GameSku.GOLD_YEARLY -> {
                        val goldStatus = GoldStatus(true)
                        insert(goldStatus)
                        localCacheBillingClient.skuDetailsDao().insertOrUpdate(purchase.sku, goldStatus.mayPurchase())
                        /*there are more than one way to buy gold status. After disabling the one the user
                        * just purchased, re-enble the others*/
                        GOLD_STATUS_SKUS.forEach { otherSku ->
                            if (otherSku != purchase.sku) {
                                localCacheBillingClient.skuDetailsDao().insertOrUpdate(otherSku, !goldStatus.mayPurchase())
                            }
                        }
                    }
                }

            }
            localCacheBillingClient.purchaseDao().insert(*newBatch.toTypedArray())
            /*
            Consumption should happen here so as not to be concerned about race conditions.
            If [consumeAsync] were to be called inside [queryPurchasesAsync], [onConsumeResponse]
            might possibly return before [saveToLocalDatabase] had had a chance to actually persist
            the item in question.

            allPurchases instead of newBatch is used in case a previous purchase was not yet
            consumed. In such case newBatch will be empty but not allPurchases.
             */
            handleConsumablePurchasesAsync(allPurchases)
        }
    }

    /**
     * This is one of the reasons saving [Purchase] items offline is good. Here the user can
     * have offline access to entitlements even though all that the repo is getting from Play is a
     * purchaseToken.
     */
    private fun saveToLocalDatabase(purchaseToken: String) {
        val scope = CoroutineScope(Job() + Dispatchers.IO)
        scope.launch {
            val cachedPurchases = localCacheBillingClient.purchaseDao().getPurchases()
            val match = cachedPurchases.find { it.purchaseToken == purchaseToken }
            if (match?.sku == GameSku.GAS) {
                updateGasTank(GasTank(GAS_PURCHASE))
                /**
                 * This saveToLocalDatabase method was called because Play called onConsumeResponse.
                 * So if you think of a Purchase as a receipt, you no longer need to keep a copy of
                 * the receipt in the local cache since the user has just consumed the product.
                 */
                localCacheBillingClient.purchaseDao().delete(match)
            }
        }
    }

    /**
     * The gas level can be updated from the client when the user drives or from a data source
     * (e.g. Play BillingClient) when the user buys more gas. Hence this repo must watch against
     * race conditions and interleaves.
     */
    @WorkerThread
    suspend fun updateGasTank(gas: GasTank) = withContext(Dispatchers.IO) {
        Log.d(LOG_TAG, "updateGasTank")
        var update: GasTank = gas
        gasTankLiveData.value?.apply {
            synchronized(this) {
                if (this != gas) {//new purchase
                    update = GasTank(getLevel() + gas.getLevel())
                }
                Log.d(LOG_TAG, "New purchase level is ${gas.getLevel()}; existing level is ${getLevel()}; so the final result is ${update.getLevel()}")
                localCacheBillingClient.entitlementsDao().update(update)
            }
        }
        if (gasTankLiveData.value == null) {
            localCacheBillingClient.entitlementsDao().insert(update)
            Log.d(LOG_TAG, "No we just added from null gas with level: ${gas.getLevel()}")
        }
        localCacheBillingClient.skuDetailsDao().insertOrUpdate(GameSku.GAS, update.mayPurchase())
        Log.d(LOG_TAG, "updated AugmentedSkuDetails as well")
    }

    @WorkerThread
    suspend private fun insert(entitlement: Entitlement) = withContext(Dispatchers.IO) {
        localCacheBillingClient.entitlementsDao().insert(entitlement)
    }

    companion object {
        private const val LOG_TAG = "BillingRepository"

        @Volatile
        private var INSTANCE: BillingRepository? = null

        fun getInstance(application: Application): BillingRepository =
                INSTANCE ?: synchronized(this) {
                    INSTANCE
                            ?: BillingRepository(application)
                                    .also { INSTANCE = it }
                }

    }

    /**
     * This is the throttling valve. It is used to modulate how often calls are made to the
     * secure server in order to save money.
     */
    private object Throttle {
        private val DEAD_BAND = 7200000//2*60*60*1000: two hours wait
        private val PREFS_NAME = "BillingRepository.Throttle"
        private val KEY = "lastInvocationTime"

        fun isLastInvocationTimeStale(context: Context): Boolean {
            val sharedPrefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            val lastInvocationTime = sharedPrefs.getLong(KEY, 0)
            return lastInvocationTime + DEAD_BAND < Date().time
        }

        fun refreshLastInvocationTime(context: Context) {
            val sharedPrefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            with(sharedPrefs.edit()) {
                putLong(KEY, Date().time)
                apply()
            }
        }
    }

    /**
     * This private object class shows example retry policies. You may choose to replace it with
     * your own policies.
     */
    private object RetryPolicies {
        private val maxRetry = 5
        private var retryCounter = AtomicInteger(1)
        private val baseDelayMillis = 500
        private val taskDelay = 2000L

        fun resetConnectionRetryPolicyCounter() {
            retryCounter.set(1)
        }

        /**
         * This works because it actually makes one call. Then it waits for success or failure.
         * onSuccess it makes no more calls and resets the retryCounter to 1. onFailure another
         * call is made, until too many failures cause retryCounter to reach maxRetry and the
         * policy stops trying. This is a safe algorithm: the initial calls to
         * connectToPlayBillingService from instantiateAndConnectToPlayBillingService is always
         * independent of the RetryPolicies. And so the Retry Policy exists only to help and never
         * to hurt.
         */
        fun connectionRetryPolicy(block: () -> Unit) {
            Log.d(LOG_TAG, "connectionRetryPolicy")
            val scope = CoroutineScope(Job() + Dispatchers.Main)
            scope.launch {
                val counter = retryCounter.getAndIncrement()
                if (counter < maxRetry) {
                    val waitTime: Long = (2f.pow(counter) * baseDelayMillis).toLong()
                    delay(waitTime)
                    block()
                }
            }

        }

        /**
         * All this is doing is check that billingClient is connected and if it's not, request
         * connection, wait x number of seconds and then proceed with the actual task.
         */
        fun taskExecutionRetryPolicy(billingClient: BillingClient, listener: BillingRepository, task: () -> Unit) {
            val scope = CoroutineScope(Job() + Dispatchers.Main)
            scope.launch {
                if (!billingClient.isReady) {
                    Log.d(LOG_TAG, "taskExecutionRetryPolicy billing not ready")
                    billingClient.startConnection(listener)
                    delay(taskDelay)
                }
                task()
            }
        }
    }

    /**
     * [INAPP_SKUS], [SUBS_SKUS], [CONSUMABLE_SKUS]:
     *
     * Where you define these lists is quite truly up to you. If you don't need customization, then
     * it makes since to define and hardcode them here, as I am doing.
     * But there are use cases where you may need customization:
     *
     * - If you don't want to update your APK (or Bundle) each time you change your SKUs, then you
     *   may want to load these lists from your secure server.
     *
     * - If your design is such that users can buy different items from different Activities or
     * Fragments, then you may want to define a list for each of those subsets. I only have two
     * subsets: INAPP_SKUS and SUBS_SKUS
     */

    private object GameSku {
        val GAS = "gas"
        val PREMIUM_CAR = "premium_car"
        val GOLD_MONTHLY = "gold_monthly"
        val GOLD_YEARLY = "gold_yearly"

        val INAPP_SKUS = listOf(GAS, PREMIUM_CAR)
        val SUBS_SKUS = listOf(GOLD_MONTHLY, GOLD_YEARLY)
        val CONSUMABLE_SKUS = listOf(GAS)
        val GOLD_STATUS_SKUS = SUBS_SKUS//coincidence that there only gold_status is a sub
    }
}

