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

package com.sample.android.classytaxijava.billing;

import androidx.annotation.Nullable;

import com.android.billingclient.api.Purchase;
import com.sample.android.classytaxijava.Constants;
import com.sample.android.classytaxijava.data.SubscriptionStatus;

import java.util.List;

public class BillingUtilities {

    /**
     * Return subscription for the provided SKU, if it exists.
     */
    @Nullable
    public static SubscriptionStatus getSubscriptionForSku(
            @Nullable List<SubscriptionStatus> subscriptions, String sku) {
        if (subscriptions != null) {
            for (SubscriptionStatus subscription : subscriptions) {
                if (sku.equals(subscription.sku)) {
                    return subscription;
                }
            }
        }
        // User does not have the subscription.
        return null;
    }

    /**
     * Return purchase for the provided SKU, if it exists.
     */
    public static Purchase getPurchaseForSku(@Nullable List<Purchase> purchases, String sku) {
        if (purchases != null) {
            for (Purchase purchase : purchases) {
                if (sku.equals(purchase.getSku())) {
                    return purchase;
                }
            }
        }
        return null;
    }

    /*
     * This will return true if the Google Play Billing APIs have a record for the subscription.
     * This will not always match the server's record of the subscription for this app user.
     *
     * Example: App user buys the subscription on a different device with a different Google
     * account. The server will show that this app user has the subscription, even if the
     * Google account on this device has not purchased the subscription.
     * In this example, the method will return false.
     *
     * Example: The app user changes by signing out and signing into the app with a different
     * email address. The server will show that this app user does not have the subscription,
     * even if the Google account on this device has purchased the subscription.
     * In this example, the method will return true.
     */
    public static boolean deviceHasGooglePlaySubscription(List<Purchase> purchases, String sku) {
        return getPurchaseForSku(purchases, sku) != null;
    }

    /**
     * This will return true if the server has a record for the subscription.
     * Sometimes this will return true even if the Google Play Billing APIs return false.
     * <p>
     * For local purchases that are rejected by the server, this app attaches the field
     * subAlreadyOwned=true to the subscription object. This means that whenever
     * [deviceHasGooglePlaySubscription] returns true, and the server has processed all purchase
     * tokens, we also expect this method to return true.
     * <p>
     * Example: App user buys the subscription on a different device with a different Google
     * account. The server will show that this app user has the subscription, even if the
     * Google account on this device has not purchased the subscription.
     * In this example, the method will return true, even though [deviceHasGooglePlaySubscription]
     * will return false.
     * <p>
     * Example: The app user changes by signing out and signing into the app with a different
     * email address. The server will show that this app user does not have the subscription,
     * by returning an API response indicating that it is ALREADY_OWNED.
     * even if the Google account on this device has purchased the subscription.
     * In this example, the method will return true. This is the same as the result from
     * [deviceHasGooglePlaySubscription].
     */
    public static boolean serverHasSubscription(
            List<SubscriptionStatus> subscriptions, String sku) {
        return getSubscriptionForSku(subscriptions, sku) != null;
    }

    /**
     * Returns true if the grace period option should be shown.
     */
    public static boolean isGracePeriod(@Nullable SubscriptionStatus subscription) {
        return subscription != null &&
                subscription.isEntitlementActive &&
                subscription.isGracePeriod &&
                !subscription.subAlreadyOwned;
    }

    /**
     * Returns true if the subscription restore option should be shown.
     */
    public static boolean isSubscriptionRestore(@Nullable SubscriptionStatus subscription) {
        return subscription != null &&
                subscription.isEntitlementActive &&
                !subscription.willRenew &&
                !subscription.subAlreadyOwned;
    }

    /**
     * Returns true if the basic content should be shown.
     */
    public static boolean isBasicContent(@Nullable SubscriptionStatus subscription) {
        return subscription != null &&
                subscription.isEntitlementActive &&
                Constants.BASIC_SKU.equals(subscription.sku) &&
                !subscription.subAlreadyOwned;
    }

    /**
     * Returns true if premium content should be shown.
     */
    public static boolean isPremiumContent(@Nullable SubscriptionStatus subscription) {
        return subscription != null &&
                subscription.isEntitlementActive &&
                Constants.PREMIUM_SKU.equals(subscription.sku) &&
                !subscription.subAlreadyOwned;
    }

    /**
     * Returns true if account hold should be shown.
     */
    public static boolean isAccountHold(SubscriptionStatus subscription) {
        return subscription != null &&
                !subscription.isEntitlementActive &&
                subscription.isAccountHold &&
                !subscription.subAlreadyOwned;
    }

    /**
     * Returns true if account pause should be shown.
     */
    public static boolean isPaused(SubscriptionStatus subscription) {
        return subscription != null &&
                !subscription.isEntitlementActive &&
                subscription.isPaused &&
                !subscription.subAlreadyOwned;
    }

    /**
     * Returns true if the subscription is already owned and requires a transfer to this account.
     */
    public static boolean isTransferRequired(SubscriptionStatus subscription) {
        return subscription != null && subscription.subAlreadyOwned;
    }
}
