/*
 * Copyright 2018 Google LLC. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example.subscriptions.ui

import android.app.Application
import android.arch.lifecycle.AndroidViewModel
import android.util.Log
import com.android.billingclient.api.BillingFlowParams
import com.android.billingclient.api.Purchase
import com.example.subscriptions.Constants
import com.example.subscriptions.SubApp
import com.example.subscriptions.billing.deviceHasGooglePlaySubscription
import com.example.subscriptions.billing.purchaseForSku
import com.example.subscriptions.billing.serverHasSubscription
import com.example.subscriptions.billing.subscriptionForSku
import com.example.subscriptions.data.SubscriptionStatus

class BillingViewModel(application: Application) : AndroidViewModel(application) {

    /**
     * Local billing purchase data.
     */
    private val purchases = (application as SubApp).billingClientLifecycle.purchases

    /**
     * SkuDetails for all known SKUs.
     */
    private val skusWithSkuDetails =
            (application as SubApp).billingClientLifecycle.skusWithSkuDetails

    /**
     * Subscriptions record according to the server.
     */
    private val subscriptions = (application as SubApp).repository.subscriptions

    /**
     * Send an event when the Activity needs to buy something.
     */
    val buyEvent = SingleLiveEvent<BillingFlowParams>()

    /**
     * Send an event when the UI should open the Google Play
     * Store for the user to manage their subscriptions.
     */
    val openPlayStoreSubscriptionsEvent = SingleLiveEvent<String>()

    /**
     * Open the Play Store subscription center. If the user has exactly one SKU,
     * then open the deeplink to the specific SKU.
     */
    fun openPlayStoreSubscriptions() {
        val hasBasic = deviceHasGooglePlaySubscription(purchases.value, Constants.BASIC_SKU)
        val hasPremium = deviceHasGooglePlaySubscription(purchases.value, Constants.PREMIUM_SKU)
        Log.d("Billing", "hasBasic: $hasBasic, hasPremium: $hasPremium")
        when {
            hasBasic && !hasPremium -> {
                // If we just have a basic subscription, open the basic SKU.
                openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU)
            }
            !hasBasic && hasPremium -> {
                // If we just have a premium subscription, open the premium SKU.
                openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU)
            }
            else -> {
                // If we do not have an active subscription,
                // or if we have multiple subscriptions, open the default subscription center.
                openPlayStoreSubscriptionsEvent.call()
            }
        }
    }

    /**
     * Open the subscription page on Google Play.
     *
     * Since the purchase tokens will not be returned during account hold or pause,
     * we use the server data to determine the deeplink to Google Play.
     */
    fun openSubscriptionPageOnGooglePlay() {
        val isPremiumOnServer = serverHasSubscription(subscriptions.value, Constants.PREMIUM_SKU)
        val isBasicOnServer = serverHasSubscription(subscriptions.value, Constants.BASIC_SKU)
        when {
            isPremiumOnServer -> openPremiumPlayStoreSubscriptions()
            isBasicOnServer -> openBasicPlayStoreSubscriptions()
        }
    }

    /**
     * Open the Play Store basic subscription.
     */
    fun openBasicPlayStoreSubscriptions() {
        openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU)
    }

    /**
     * Open the Play Store premium subscription.
     */
    fun openPremiumPlayStoreSubscriptions() {
        openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU)
    }

    /**
     * Buy a basic subscription.
     */
    fun buyBasic() {
        val hasBasic = deviceHasGooglePlaySubscription(purchases.value, Constants.BASIC_SKU)
        val hasPremium = deviceHasGooglePlaySubscription(purchases.value, Constants.PREMIUM_SKU)
        Log.d("Billing", "hasBasic: $hasBasic, hasPremium: $hasPremium")
        when {
            hasBasic && hasPremium -> {
                // If the user has both subscriptions, open the basic SKU on Google Play.
                openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU)
            }
            hasBasic && !hasPremium -> {
                // If the user just has a basic subscription, open the basic SKU on Google Play.
                openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU)
            }
            !hasBasic && hasPremium -> {
                // If the user just has a premium subscription, downgrade.
                buy(sku = Constants.BASIC_SKU, oldSku = Constants.PREMIUM_SKU)
            }
            else -> {
                // If the user dooes not have a subscription, buy the basic SKU.
                buy(sku = Constants.BASIC_SKU, oldSku = null)
            }
        }
    }

    /**
     * Buy a premium subscription.
     */
    fun buyPremium() {
        val hasBasic = deviceHasGooglePlaySubscription(purchases.value, Constants.BASIC_SKU)
        val hasPremium = deviceHasGooglePlaySubscription(purchases.value, Constants.PREMIUM_SKU)
        Log.d("Billing", "hasBasic: $hasBasic, hasPremium: $hasPremium")
        when {
            hasBasic && hasPremium -> {
                // If the user has both subscriptions, open the premium SKU on Google Play.
                openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU)
            }
            !hasBasic && hasPremium -> {
                // If the user just has a premium subscription, open the premium SKU on Google Play.
                openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU)
            }
            hasBasic && !hasPremium -> {
                // If the user just has a basic subscription, upgrade.
                buy(sku = Constants.PREMIUM_SKU, oldSku = Constants.BASIC_SKU)
            }
            else -> {
                // If the user does not have a subscription, buy the premium SKU.
                buy(sku = Constants.PREMIUM_SKU, oldSku = null)
            }
        }
    }

    /**
     * Upgrade to a premium subscription.
     */
    fun buyUpgrade() = buy(Constants.PREMIUM_SKU, Constants.BASIC_SKU)

    /**
     * Use the Google Play Billing Library to make a purchase.
     */
    private fun buy(sku: String, oldSku: String?) {
        // First, determine whether the new SKU can be purchased.
        val isSkuOnServer = serverHasSubscription(subscriptions.value, sku)
        val isSkuOnDevice = deviceHasGooglePlaySubscription(purchases.value, sku)
        Log.d("Billing", "$sku - isSkuOnServer: $isSkuOnServer, isSkuOnDevice: $isSkuOnDevice")
        when {
            isSkuOnDevice && isSkuOnServer -> {
                Log.e("Billing", "You cannot buy a SKU that is already owned: $sku. " +
                        "This is an error in the application trying to use Google Play Billing.")
                return
            }
            isSkuOnDevice && !isSkuOnServer -> {
                Log.e("Billing", "The Google Play Billing Library APIs indicate that" +
                        "this SKU is already owned, but the purchase token is not registered " +
                        "with the server. There might be an issue registering the purchase token.")
                return
            }
            !isSkuOnDevice && isSkuOnServer -> {
                Log.w("Billing", "WHOA! The server says that the user already owns " +
                        "this item: $sku. This could be from another Google account. " +
                        "You should warn the user that they are trying to buy something " +
                        "from Google Play that they might already have access to from " +
                        "another purchase, possibly from a different Google account " +
                        "on another device.\n" +
                        "You can choose to block this purchase.\n" +
                        "If you are able to cancel the existing subscription on the server, " +
                        "you should allow the user to subscribe with Google Play, and then " +
                        "cancel the subscription after this new subscription is complete. " +
                        "This will allow the user to seamlessly transition their payment " +
                        "method from an existing payment method to this Google Play account.")
                return
            }
        }

        // Second, determine whether the old SKU can be replaced.
        // If the old SKU cannot be used, set this value to null and ignore it.
        val oldSkuToBeReplaced = if (isOldSkuReplaceable(subscriptions.value, purchases.value, oldSku)) {
            oldSku
        } else {
            null
        }

        // Third, create the billing parameters for the purchase.
        if (sku == oldSkuToBeReplaced) {
            Log.i("Billing", "Re-subscribe.")
        } else if (Constants.PREMIUM_SKU == sku && Constants.BASIC_SKU == oldSkuToBeReplaced) {
            Log.i("Billing", "Upgrade!")
        } else if (Constants.BASIC_SKU == sku && Constants.PREMIUM_SKU == oldSkuToBeReplaced) {
            Log.i("Billing", "Downgrade...")
        } else {
            Log.i("Billing", "Regular purchase.")
        }
        // Create the parameters for the purchase.
        val skuDetails = skusWithSkuDetails.value?.get(sku) ?: run {
            Log.e("Billing", "Could not find SkuDetails to make purchase.")
            return
        }
        val billingBuilder = BillingFlowParams.newBuilder().setSkuDetails(skuDetails)
        // Only set the old SKU parameter if the old SKU is already owned.
        if (oldSkuToBeReplaced != null && oldSkuToBeReplaced != sku) {
            purchaseForSku(purchases.value, oldSkuToBeReplaced)?.apply {
                billingBuilder.setOldSku(oldSkuToBeReplaced, purchaseToken)
            }
        }
        val billingParams = billingBuilder.build()

        // Send the parameters to the Activity in order to launch the billing flow.
        buyEvent.postValue(billingParams)
    }

    /**
     * Determine if the old SKU can be replaced.
     */
    private fun isOldSkuReplaceable(
            subscriptions: List<SubscriptionStatus>?,
            purchases: List<Purchase>?,
            oldSku: String?
    ): Boolean {
        if (oldSku == null) return false
        val isOldSkuOnServer = serverHasSubscription(subscriptions, oldSku)
        val isOldSkuOnDevice = deviceHasGooglePlaySubscription(purchases, oldSku)
        return when {
            !isOldSkuOnDevice -> {
                Log.e("Billing", "You cannot replace a SKU that is NOT already owned: $oldSku. " +
                        "This is an error in the application trying to use Google Play Billing.")
                false
            }
            !isOldSkuOnServer -> {
                Log.i("Billing", "Refusing to replace the old SKU because it is " +
                        "not registered with the server. Instead just buy the new SKU as an " +
                        "original purchase. The old SKU might already " +
                        "be owned by a different app account, and we should not transfer the " +
                        "subscription without user permission.")
                false
            }
            else -> {
                val subscription = subscriptionForSku(subscriptions, oldSku) ?: return false
                if (subscription.subAlreadyOwned) {
                    Log.i("Billing", "The old subscription is used by a " +
                            "different app account. However, it was paid for by the same " +
                            "Google account that is on this device.")
                    false
                } else {
                    true
                }
            }
        }
    }

}
