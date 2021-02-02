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

package com.example.subscriptions.data.network.firebase

import android.arch.lifecycle.LiveData
import android.arch.lifecycle.MutableLiveData
import com.example.subscriptions.Constants
import com.example.subscriptions.billing.isBasicContent
import com.example.subscriptions.billing.isPremiumContent
import com.example.subscriptions.data.ContentResource
import com.example.subscriptions.data.SubscriptionStatus

/**
 * Fake implementation of [ServerFunctions].
 */
class FakeServerFunctions : ServerFunctions {

    /**
     * Live data is true when there are pending network requests.
     */
    override val loading = MutableLiveData<Boolean>()

    /**
     * The latest subscription data.
     *
     * Use this class by observing the subscriptions [LiveData].
     * Fake data will be communicated through this LiveData.
     */
    override val subscriptions = MutableLiveData<List<SubscriptionStatus>>()

    /**
     * The basic content URL.
     */
    override val basicContent = MutableLiveData<ContentResource>()

    /**
     * The premium content URL.
     */
    override val premiumContent = MutableLiveData<ContentResource>()

    /**
     * Fetch fake basic content and post results to [basicContent].
     * This will fail if the user does not have a basic subscription.
     */
    override fun updateBasicContent() {
        val subs = subscriptions.value
        if (subs == null || subs.isEmpty()) {
            basicContent.postValue(null)
            return
        }
        // Premium subscriptions also give access to basic content.
        if (isBasicContent(subs[0]) || isPremiumContent(subs[0])) {
            basicContent.postValue(ContentResource("https://example.com/basic.jpg"))
        } else {
            basicContent.postValue(null)
        }
    }

    /**
     * Fetch fake premium content and post results to [premiumContent].
     * This will fail if the user does not have a premium subscription.
     */
    override fun updatePremiumContent() {
        val subs = subscriptions.value
        if (subs == null || subs.isEmpty()) {
            premiumContent.postValue(null)
            return
        }
        if (isPremiumContent(subs[0])) {
            premiumContent.postValue(ContentResource("https://example.com/premium.jpg"))
        } else {
            premiumContent.postValue(null)
        }
    }

    /**
     * Fetches fake subscription data and posts successful results to [subscriptions].
     */
    override fun updateSubscriptionStatus() {
        subscriptions.postValue(ArrayList<SubscriptionStatus>().apply {
            nextFakeSubscription()?.let {
                add(it)
            }
        })
    }

    /**
     * Register a subscription with the server and posts successful results to [subscriptions].
     */
    override fun registerSubscription(sku: String, purchaseToken: String) {
        // When successful, return subscription results.
        // When response code is HTTP 409 CONFLICT create an already owned subscription.
        subscriptions.postValue(when (sku) {
            Constants.BASIC_SKU -> listOf(createFakeBasicSubscription())
            Constants.PREMIUM_SKU -> listOf(createFakePremiumSubscription())
            else -> listOf(createAlreadyOwnedSubscription(
                    sku = sku, purchaseToken = purchaseToken))
        })
    }

    /**
     * Transfer subscription to this account posts successful results to [subscriptions].
     */
    override fun transferSubscription(sku: String, purchaseToken: String) {
        val subscription = createFakeBasicSubscription().apply {
            this.sku = sku
            this.purchaseToken = purchaseToken
            subAlreadyOwned = false
            isEntitlementActive = true
        }
        subscriptions.postValue(java.util.ArrayList<SubscriptionStatus>().apply {
            add(subscription)
        })
    }

    /**
     * Register Instance ID when the user signs in or the token is refreshed.
     */
    override fun registerInstanceId(instanceId: String) = Unit

    /**
     * Unregister when the user signs out.
     */
    override fun unregisterInstanceId(instanceId: String) = Unit

    /**
     * Create a local record of a subscription that is already owned by someone else.
     * Created when the server returns HTTP 409 CONFLICT after a subscription registration request.
     */
    private fun createAlreadyOwnedSubscription(
            sku: String,
            purchaseToken: String
    ): SubscriptionStatus {
        return SubscriptionStatus().apply {
            this.sku = sku
            this.purchaseToken = purchaseToken
            isEntitlementActive = false
            subAlreadyOwned = true
        }
    }

    private var fakeDataIndex = 0

    private fun nextFakeSubscription(): SubscriptionStatus? {
        val subscription = when (fakeDataIndex) {
            0 -> null
            1 -> createFakeBasicSubscription()
            2 -> createFakePremiumSubscription()
            3 -> createFakeAccountPausedSubscription()
            4 -> createFakeAccountHoldSubscription()
            5 -> createFakeGracePeriodSubscription()
            6 -> createFakeAlreadyOwnedSubscription()
            7 -> createFakeCanceledBasicSubscription()
            8 -> createFakeCanceledPremiumSubscription()
            else -> null // Unknown fake index, just pick one.
        }
        // Iterate through fake data for testing purposes.
        fakeDataIndex = (fakeDataIndex + 1) % 9
        return subscription
    }

    private fun createFakeBasicSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = true
            willRenew = true
            sku = Constants.BASIC_SKU
            isAccountHold = false
            isGracePeriod = false
            purchaseToken = null
            subAlreadyOwned = false
        }
    }

    private fun createFakePremiumSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = true
            willRenew = true
            sku = Constants.PREMIUM_SKU
            isAccountHold = false
            isGracePeriod = false
            purchaseToken = null
            subAlreadyOwned = false
        }
    }

    private fun createFakeAccountHoldSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = false
            willRenew = true
            sku = Constants.PREMIUM_SKU
            isAccountHold = true
            isGracePeriod = false
            purchaseToken = null
            subAlreadyOwned = false
        }
    }

    private fun createFakeAccountPausedSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = false
            willRenew = true
            sku = Constants.PREMIUM_SKU
            isPaused = true
            isGracePeriod = false
            purchaseToken = null
            subAlreadyOwned = false
        }
    }

    private fun createFakeGracePeriodSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = true
            willRenew = true
            sku = Constants.BASIC_SKU
            isAccountHold = false
            isGracePeriod = true
            purchaseToken = null
            subAlreadyOwned = false
        }
    }

    private fun createFakeAlreadyOwnedSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = false
            willRenew = true
            sku = Constants.BASIC_SKU
            isAccountHold = false
            isGracePeriod = false
            purchaseToken = Constants.BASIC_SKU // Very fake data.
            subAlreadyOwned = true
        }
    }

    private fun createFakeCanceledBasicSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = true
            willRenew = false
            sku = Constants.BASIC_SKU
            isAccountHold = false
            isGracePeriod = false
            purchaseToken = null
            subAlreadyOwned = false
        }
    }

    private fun createFakeCanceledPremiumSubscription(): SubscriptionStatus {
        return SubscriptionStatus().apply {
            isEntitlementActive = true
            willRenew = false
            sku = Constants.PREMIUM_SKU
            isAccountHold = false
            isGracePeriod = false
            purchaseToken = null
            subAlreadyOwned = false
        }
    }

    companion object {

        @Volatile
        private var INSTANCE: FakeServerFunctions? = null

        fun getInstance(): ServerFunctions =
                INSTANCE ?: synchronized(this) {
                    INSTANCE ?: FakeServerFunctions().also { INSTANCE = it }
                }
    }

}