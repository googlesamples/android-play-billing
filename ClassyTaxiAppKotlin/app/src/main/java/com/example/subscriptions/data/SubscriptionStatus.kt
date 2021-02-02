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

package com.example.subscriptions.data

import android.arch.persistence.room.Entity
import android.arch.persistence.room.PrimaryKey
import com.google.gson.Gson
import com.google.gson.JsonSyntaxException

/**
 * Local subscription data. This is stored on disk in a database.
 */
@Entity(tableName = "subscriptions")
data class SubscriptionStatus (
        // Local fields.
        @PrimaryKey(autoGenerate = true)
        var primaryKey: Int = 0,
        var subscriptionStatusJson: String? = null,
        var subAlreadyOwned: Boolean = false,
        var isLocalPurchase: Boolean = false,

        // Remote fields.
        var sku: String? = null,
        var purchaseToken: String? = null,
        var isEntitlementActive: Boolean = false,
        var willRenew: Boolean = false,
        var activeUntilMillisec: Long = 0,
        var isFreeTrial: Boolean = false,
        var isGracePeriod: Boolean = false,
        var isAccountHold: Boolean = false,
        var isPaused: Boolean = false,
        var autoResumeTimeMillis: Long = 0
) {

    data class SubscriptionStatusList (
            var subscriptions: List<SubscriptionStatus>?
    )

    companion object {

        const val SUBSCRIPTIONS_KEY = "subscriptions"
        const val SKU_KEY = "sku"
        const val PURCHASE_TOKEN_KEY = "purchaseToken"
        const val IS_ENTITLEMENT_ACTIVE_KEY = "isEntitlementActive"
        const val WILL_RENEW_KEY = "willRenew"
        const val ACTIVE_UNTIL_MILLISEC_KEY = "activeUntilMillisec"
        const val IS_FREE_TRIAL_KEY = "isFreeTrial"
        const val IS_GRACE_PERIOD_KEY = "isGracePeriod"
        const val IS_ACCOUNT_HOLD_KEY = "isAccountHold"
        const val IS_PAUSED_KEY = "isPaused"
        const val AUTO_RESUME_TIME_MILLISEC_KEY = "autoResumeTimeMillis"

        /**
         * Parse subscription data from Map and return null if data is not valid.
         */
        fun listFromMap(map: Map<String, Any>): List<SubscriptionStatus>? {
            val subscriptions = ArrayList<SubscriptionStatus>()
            val subList =
                    map[SUBSCRIPTIONS_KEY] as? ArrayList<Map<String, Any>> ?: return null

            for (subStatus in subList) {
                subscriptions.add(SubscriptionStatus().apply {
                    (subStatus[SKU_KEY] as? String?)?.let {
                        sku = it
                    }
                    (subStatus[PURCHASE_TOKEN_KEY] as? String?)?.let {
                        purchaseToken = it
                    }
                    (subStatus[IS_ENTITLEMENT_ACTIVE_KEY] as? Boolean)?.let {
                        isEntitlementActive = it
                    }
                    (subStatus[WILL_RENEW_KEY] as? Boolean)?.let {
                        willRenew = it
                    }
                    (subStatus[ACTIVE_UNTIL_MILLISEC_KEY] as? Long)?.let {
                        activeUntilMillisec = it
                    }
                    (subStatus[IS_FREE_TRIAL_KEY] as? Boolean)?.let {
                        isFreeTrial = it
                    }
                    (subStatus[IS_GRACE_PERIOD_KEY] as? Boolean)?.let {
                        isGracePeriod = it
                    }
                    (subStatus[IS_ACCOUNT_HOLD_KEY] as? Boolean)?.let {
                        isAccountHold = it
                    }
                    (subStatus[IS_PAUSED_KEY] as? Boolean)?.let {
                        isPaused = it
                    }
                    (subStatus[AUTO_RESUME_TIME_MILLISEC_KEY] as? Long)?.let {
                        autoResumeTimeMillis = it
                    }
                })
            }
            return subscriptions
        }

        /**
         * Parse subscription data from String and return null if data is not valid.
         */
        fun listFromJsonString(dataString: String): List<SubscriptionStatus>? {
            val gson = Gson()
            return try {
                gson.fromJson(dataString, SubscriptionStatusList::class.java)?.subscriptions
            } catch (e: JsonSyntaxException) {
                null
            }
        }

        /**
         * Create a record for a subscription that is already owned by a different user.
         *
         * The server does not return JSON for a subscription that is already owned by
         * a different user, so we need to construct a local record with the basic fields.
         */
        fun alreadyOwnedSubscription(
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

    }

}

