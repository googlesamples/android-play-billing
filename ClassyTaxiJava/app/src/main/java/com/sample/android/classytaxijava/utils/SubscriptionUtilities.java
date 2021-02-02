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

package com.sample.android.classytaxijava.utils;

import android.content.res.Resources;

import com.sample.android.classytaxijava.R;
import com.sample.android.classytaxijava.billing.BillingUtilities;
import com.sample.android.classytaxijava.data.SubscriptionStatus;

public class SubscriptionUtilities {

    /**
     * Return the resource string for the basic subscription button.
     *
     * Add an asterisk if the subscription is not local and might not be modifiable on this device.
     */
    public static String basicTextForSubscription(Resources res, SubscriptionStatus subscription) {
        String text;

        if (BillingUtilities.isAccountHold(subscription)) {
            text = res.getString(R.string.subscription_option_basic_message_account_hold);
        } else if (BillingUtilities.isPaused(subscription)) {
            text = res.getString(R.string.subscription_option_basic_message_account_paused);
        } else if (BillingUtilities.isGracePeriod(subscription)) {
            text = res.getString(R.string.subscription_option_basic_message_grace_period);
        } else if (BillingUtilities.isSubscriptionRestore(subscription)) {
            text = res.getString(R.string.subscription_option_basic_message_restore);
        } else if (BillingUtilities.isBasicContent(subscription)) {
            text = res.getString(R.string.subscription_option_basic_message_current);
        } else {
            text =  res.getString(R.string.subscription_option_basic_message);
        }
        if (subscription.isLocalPurchase) {
            return text;
        } else {
            // No local record, so the subscription cannot be managed on this device.
            return text + "*";
        }
    }

    /**
     * Return the resource string for the premium subscription button.
     *
     * Add an asterisk if the subscription is not local and might not be modifiable on this device.
     */
    public static String premiumTextForSubscription(Resources res,
                                                    SubscriptionStatus subscription) {
        String text;
        if (BillingUtilities.isAccountHold(subscription)) {
            text = res.getString(R.string.subscription_option_premium_message_account_hold);
        } else if (BillingUtilities.isPaused(subscription)) {
            text = res.getString(R.string.subscription_option_premium_message_account_paused);
        } else if (BillingUtilities.isGracePeriod(subscription)) {
            text = res.getString(R.string.subscription_option_premium_message_grace_period);
        } else if (BillingUtilities.isSubscriptionRestore(subscription)) {
            text =res.getString(R.string.subscription_option_premium_message_restore);
        } else if (BillingUtilities.isPremiumContent(subscription)) {
            text = res.getString(R.string.subscription_option_premium_message_current);
        } else {
            text = res.getString(R.string.subscription_option_premium_message);
        }

        if (subscription.isLocalPurchase) {
            return text;
        } else {
            // No local record, so the subscription cannot be managed on this device.
            return text + "*";
        }
    }
}
