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

package com.sample.android.classytaxijava.ui;

import android.app.Application;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MediatorLiveData;
import androidx.lifecycle.MutableLiveData;

import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.SkuDetails;
import com.sample.android.classytaxijava.Constants;
import com.sample.android.classytaxijava.SubApp;
import com.sample.android.classytaxijava.billing.BillingUtilities;
import com.sample.android.classytaxijava.data.SubscriptionStatus;

import java.util.List;
import java.util.Map;

public class BillingViewModel extends AndroidViewModel {

    /**
     * Local billing purchase data.
     */
    private MutableLiveData<List<Purchase>> purchases;

    /**
     * SkuDetails for all known SKUs.
     */
    private MutableLiveData<Map<String, SkuDetails>> skusWithSkuDetails;

    /**
     * Subscriptions record according to the server.
     */
    private MediatorLiveData<List<SubscriptionStatus>> subscriptions;

    /**
     * Send an event when the Activity needs to buy something.
     */
    public SingleLiveEvent<BillingFlowParams> buyEvent = new SingleLiveEvent<>();

    /**
     * Send an event when the UI should open the Google Play
     * Store for the user to manage their subscriptions.
     */
    public SingleLiveEvent<String> openPlayStoreSubscriptionsEvent = new SingleLiveEvent<>();

    public BillingViewModel(Application application) {
        super(application);
        SubApp subApp = ((SubApp) application);
        purchases = subApp.getBillingClientLifecycle().purchases;
        skusWithSkuDetails = subApp.getBillingClientLifecycle().skusWithSkuDetails;
        subscriptions = subApp.getRepository().getSubscriptions();
    }

    /**
     * Open the Play Store subscription center. If the user has exactly one SKU,
     * then open the deeplink to the specific SKU.
     */
    public void openPlayStoreSubscriptions() {
        boolean hasBasic = BillingUtilities.deviceHasGooglePlaySubscription(
                purchases.getValue(), Constants.BASIC_SKU);
        boolean hasPremium = BillingUtilities.deviceHasGooglePlaySubscription
                (purchases.getValue(), Constants.PREMIUM_SKU);
        Log.d("Billing", "hasBasic: $hasBasic, hasPremium: $hasPremium");

        if (hasBasic && !hasPremium) {
            // If we just have a basic subscription, open the basic SKU.
            openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU);
        } else if (!hasBasic && hasPremium) {
            // If we just have a premium subscription, open the premium SKU.
            openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU);
        } else {
            // If we do not have an active subscription,
            // or if we have multiple subscriptions, open the default subscription center.
            openPlayStoreSubscriptionsEvent.call();
        }
    }

    /**
     * Open the subscription page on Google Play.
     * <p>
     * Since the purchase tokens will not be returned during account hold or pause,
     * we use the server data to determine the deeplink to Google Play.
     */
    public void openSubscriptionPageOnGooglePlay() {
        boolean isPremiumOnServer = BillingUtilities
                .serverHasSubscription(subscriptions.getValue(), Constants.PREMIUM_SKU);
        boolean isBasicOnServer = BillingUtilities
                .serverHasSubscription(subscriptions.getValue(), Constants.BASIC_SKU);
        if (isPremiumOnServer) {
            openPremiumPlayStoreSubscriptions();
        }

        if (isBasicOnServer) {
            openBasicPlayStoreSubscriptions();
        }
    }

    /**
     * Open the Play Store basic subscription.
     */
    public void openBasicPlayStoreSubscriptions() {
        openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU);
    }

    /**
     * Open the Play Store premium subscription.
     */
    public void openPremiumPlayStoreSubscriptions() {
        openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU);
    }

    /**
     * Buy a basic subscription.
     */
    public void buyBasic() {
        boolean hasBasic = BillingUtilities
                .deviceHasGooglePlaySubscription(purchases.getValue(), Constants.BASIC_SKU);
        boolean hasPremium = BillingUtilities
                .deviceHasGooglePlaySubscription(purchases.getValue(), Constants.PREMIUM_SKU);
        Log.d("Billing", "hasBasic: " + hasBasic + ", hasPremium: " + hasPremium);
        if (hasBasic && hasPremium) {
            // If the user has both subscriptions, open the basic SKU on Google Play.
            openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU);
        } else if (hasBasic && !hasPremium) {
            // If the user just has a basic subscription, open the basic SKU on Google Play.
            openPlayStoreSubscriptionsEvent.postValue(Constants.BASIC_SKU);
        } else if (!hasBasic && hasPremium) {
            // If the user just has a premium subscription, downgrade.
            buy(Constants.BASIC_SKU, Constants.PREMIUM_SKU);
        } else {
            // If the user dooes not have a subscription, buy the basic SKU.
            buy(Constants.BASIC_SKU, null);
        }
    }

    /**
     * Buy a premium subscription.
     */
    public void buyPremium() {
        boolean hasBasic = BillingUtilities
                .deviceHasGooglePlaySubscription(purchases.getValue(), Constants.BASIC_SKU);
        boolean hasPremium = BillingUtilities
                .deviceHasGooglePlaySubscription(purchases.getValue(), Constants.PREMIUM_SKU);
        Log.d("Billing", "hasBasic: " + hasBasic + ", hasPremium: " + hasPremium);
        if (hasBasic && hasPremium) {
            // If the user has both subscriptions, open the premium SKU on Google Play.
            openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU);
        } else if (!hasBasic && hasPremium) {
            // If the user just has a premium subscription, open the premium SKU on Google Play.
            openPlayStoreSubscriptionsEvent.postValue(Constants.PREMIUM_SKU);
        } else if (hasBasic && !hasPremium) {
            // If the user just has a basic subscription, upgrade.
            buy(Constants.PREMIUM_SKU, Constants.BASIC_SKU);
        } else {
            // If the user does not have a subscription, buy the premium SKU.
            buy(Constants.PREMIUM_SKU, null);
        }
    }

    /**
     * Upgrade to a premium subscription.
     */
    public void buyUpgrade() {
        buy(Constants.PREMIUM_SKU, Constants.BASIC_SKU);
    }

    /**
     * Use the Google Play Billing Library to make a purchase.
     */
    private void buy(String sku, @Nullable String oldSku) {
        // First, determine whether the new SKU can be purchased.
        boolean isSkuOnServer = BillingUtilities
                .serverHasSubscription(subscriptions.getValue(), sku);
        boolean isSkuOnDevice = BillingUtilities
                .deviceHasGooglePlaySubscription(purchases.getValue(), sku);
        Log.d("Billing", sku + " - isSkuOnServer: " + isSkuOnServer +
                ", isSkuOnDevice: " + isSkuOnDevice);
        if (isSkuOnDevice && isSkuOnServer) {
            Log.e("Billing", "You cannot buy a SKU that is already owned: " + sku +
                    "This is an error in the application trying to use Google Play Billing.");
        } else if (isSkuOnDevice && !isSkuOnServer) {
            Log.e("Billing", "The Google Play Billing Library APIs indicate that" +
                    "this SKU is already owned, but the purchase token is not registered " +
                    "with the server. There might be an issue registering the purchase token.");
        } else if (!isSkuOnDevice && isSkuOnServer) {
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
                    "method from an existing payment method to this Google Play account.");
        } else {
            // Second, determine whether the old SKU can be replaced.
            // If the old SKU cannot be used, set this value to null and ignore it.

            String oldSkuToBeReplaced = null;
            if (isOldSkuReplaceable(subscriptions.getValue(), purchases.getValue(), oldSku)) {
                oldSkuToBeReplaced = oldSku;
            }

            // Third, create the billing parameters for the purchase.
            if (sku.equals(oldSkuToBeReplaced)) {
                Log.i("Billing", "Re-subscribe.");
            } else if (Constants.PREMIUM_SKU.equals(sku)
                    && Constants.BASIC_SKU.equals(oldSkuToBeReplaced)) {
                Log.i("Billing", "Upgrade!");
            } else if (Constants.BASIC_SKU.equals(sku)
                    && Constants.PREMIUM_SKU.equals(oldSkuToBeReplaced)) {
                Log.i("Billing", "Downgrade...");
            } else {
                Log.i("Billing", "Regular purchase.");
            }

            SkuDetails skuDetails = null;
            // Create the parameters for the purchase.
            if (skusWithSkuDetails.getValue() != null) {
                skuDetails = skusWithSkuDetails.getValue().get(sku);
            }

            if (skuDetails == null) {
                Log.e("Billing", "Could not find SkuDetails to make purchase.");
                return;
            }

            BillingFlowParams.Builder billingBuilder =
                    BillingFlowParams.newBuilder().setSkuDetails(skuDetails);
            // Only set the old SKU parameter if the old SKU is already owned.
            if (oldSkuToBeReplaced != null && !oldSkuToBeReplaced.equals(sku)) {
                Purchase oldPurchase = BillingUtilities
                        .getPurchaseForSku(purchases.getValue(), oldSkuToBeReplaced);
                billingBuilder.setOldSku(oldSkuToBeReplaced, oldPurchase.getPurchaseToken());
            }

            BillingFlowParams billingParams = billingBuilder.build();

            // Send the parameters to the Activity in order to launch the billing flow.
            buyEvent.postValue(billingParams);
        }
    }

    /**
     * Determine if the old SKU can be replaced.
     */
    private boolean isOldSkuReplaceable(
            List<SubscriptionStatus> subscriptions,
            List<Purchase> purchases,
            String oldSku) {
        if (oldSku == null) return false;
        boolean isOldSkuOnServer = BillingUtilities.serverHasSubscription(subscriptions, oldSku);
        boolean isOldSkuOnDevice = BillingUtilities.deviceHasGooglePlaySubscription(purchases, oldSku);

        if (!isOldSkuOnDevice) {
            Log.e("Billing", "You cannot replace a SKU that is NOT already owned: " + oldSku
                    + "This is an error in the application trying to use Google Play Billing.");
            return false;
        } else if (!isOldSkuOnServer) {
            Log.i("Billing", "Refusing to replace the old SKU because it is " +
                    "not registered with the server. Instead just buy the new SKU as an " +
                    "original purchase. The old SKU might already " +
                    "be owned by a different app account, and we should not transfer the " +
                    "subscription without user permission.");
            return false;
        } else {
            SubscriptionStatus subscription = BillingUtilities
                    .getSubscriptionForSku(subscriptions, oldSku);
            if (subscription != null && subscription.subAlreadyOwned) {
                Log.i("Billing", "The old subscription is used by a " +
                        "different app account. However, it was paid for by the same " +
                        "Google account that is on this device.");
                return false;
            } else {
                return true;
            }
        }
    }
}
