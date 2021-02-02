/*
 * Copyright 2020 Google LLC. All rights reserved.
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

package com.sample.android.classytaxijava.data;

import androidx.annotation.Nullable;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Local subscription data. This is stored on disk in a database.
 */
@Entity(tableName = "subscriptions")
public class SubscriptionStatus {
    public class SubscriptionStatusList {
        @Nullable
        @SerializedName("subscriptions")
        List<SubscriptionStatus> subscriptionStatuses;

        SubscriptionStatusList(@Nullable List<SubscriptionStatus> subscriptionStatuses) {
            this.subscriptionStatuses = subscriptionStatuses;
        }
    }

    public static final String SUBSCRIPTIONS_KEY = "subscriptions";
    public static final String SKU_KEY = "sku";
    public static final String PURCHASE_TOKEN_KEY = "purchaseToken";
    public static final String IS_ENTITLEMENT_ACTIVE_KEY = "isEntitlementActive";
    public static final String WILL_RENEW_KEY = "willRenew";
    public static final String ACTIVE_UNTIL_MILLISEC_KEY = "activeUntilMillisec";
    public static final String IS_FREE_TRIAL_KEY = "isFreeTrial";
    public static final String IS_GRACE_PERIOD_KEY = "isGracePeriod";
    public static final String IS_ACCOUNT_HOLD_KEY = "isAccountHold";
    public static final String IS_PAUSED_KEY = "isPaused";
    public static final String AUTO_RESUME_TIME_MILLISEC_KEY = "autoResumeTimeMillis";


    // Local fields
    @PrimaryKey(autoGenerate = true)
    public int primaryKey = 0;
    @Nullable
    public String subscriptionStatusJson;
    public boolean subAlreadyOwned;
    public boolean isLocalPurchase;

    // Remote fields
    @Nullable
    public String sku;
    @Nullable
    public String purchaseToken;
    public boolean isEntitlementActive;
    public boolean willRenew;
    public Long activeUntilMillisec = 0L;
    public boolean isFreeTrial;
    public boolean isGracePeriod;
    public boolean isAccountHold;
    public boolean isPaused;
    public Long autoResumeTimeMillis = 0L;

    /**
     * Parse subscription data from Map and return null if data is not valid.
     */
    @Nullable
    public static List<SubscriptionStatus> listFromMap(Map<String, Object> map) {
        List<SubscriptionStatus> subscriptions = new ArrayList<>();

        List<Map<String, Object>> subList = null;

        if (map.get(SUBSCRIPTIONS_KEY) instanceof ArrayList) {
            subList = (ArrayList) map.get(SUBSCRIPTIONS_KEY);
        }

        if (subList == null) {
            return null;
        }

        for (Map<String, Object> subStatus : subList) {
            SubscriptionStatus subscriptionStatus = new SubscriptionStatus();

            subscriptionStatus.sku = (String) subStatus.get(SKU_KEY);
            subscriptionStatus.purchaseToken = (String) subStatus.get(PURCHASE_TOKEN_KEY);
            subscriptionStatus.isEntitlementActive = (boolean) subStatus.get(IS_ENTITLEMENT_ACTIVE_KEY);
            subscriptionStatus.willRenew = (boolean) subStatus.get(WILL_RENEW_KEY);
            subscriptionStatus.activeUntilMillisec =
                    (Long) subStatus.get(ACTIVE_UNTIL_MILLISEC_KEY);
            subscriptionStatus.isFreeTrial = (boolean) subStatus.get(IS_FREE_TRIAL_KEY);
            subscriptionStatus.isGracePeriod = (boolean) subStatus.get(IS_GRACE_PERIOD_KEY);
            subscriptionStatus.isAccountHold = (boolean) subStatus.get(IS_ACCOUNT_HOLD_KEY);
            subscriptionStatus.isPaused = (boolean) subStatus.get(IS_PAUSED_KEY);
            subscriptionStatus.autoResumeTimeMillis =
                    (Long) subStatus.get(AUTO_RESUME_TIME_MILLISEC_KEY);
            subscriptions.add(subscriptionStatus);
        }

        return subscriptions;
    }

    /**
     * Parse subscription data from String and return null if data is not valid.
     */
    @Nullable
    public static List<SubscriptionStatus> listFromJsonString(String dataString) {
        Gson gson = new Gson();
        try {
            SubscriptionStatusList subscriptionStatusList =
                    gson.fromJson(dataString, SubscriptionStatusList.class);
            if (subscriptionStatusList != null) {
                return subscriptionStatusList.subscriptionStatuses;
            } else {
                return null;
            }
        } catch (JsonSyntaxException e) {
            return null;
        }
    }

    /**
     * Create a record for a subscription that is already owned by a different user.
     *
     * The server does not return JSON for a subscription that is already owned by
     * a different user, so we need to construct a local record with the basic fields.
     */
    public static SubscriptionStatus alreadyOwnedSubscription(String sku, String purchaseToken) {
        SubscriptionStatus subscriptionStatus = new SubscriptionStatus();
        subscriptionStatus.sku = sku;
        subscriptionStatus.purchaseToken = purchaseToken;
        subscriptionStatus.isEntitlementActive = false;
        subscriptionStatus.subAlreadyOwned = true;
        return subscriptionStatus;
    }

    @Override
    public String toString() {
        return "SubscriptionStatus{" +
                "primaryKey=" + primaryKey +
                ", subscriptionStatusJson='" + subscriptionStatusJson + '\'' +
                ", subAlreadyOwned=" + subAlreadyOwned +
                ", isLocalPurchase=" + isLocalPurchase +
                ", sku='" + sku + '\'' +
                ", purchaseToken='" + purchaseToken + '\'' +
                ", isEntitlementActive=" + isEntitlementActive +
                ", willRenew=" + willRenew +
                ", activeUntilMillisec=" + activeUntilMillisec +
                ", isFreeTrial=" + isFreeTrial +
                ", isGracePeriod=" + isGracePeriod +
                ", isAccountHold=" + isAccountHold +
                '}';
    }
}
