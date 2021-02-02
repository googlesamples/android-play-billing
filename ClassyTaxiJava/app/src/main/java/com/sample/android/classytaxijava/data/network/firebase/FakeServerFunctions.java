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

package com.sample.android.classytaxijava.data.network.firebase;

import androidx.annotation.Nullable;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.sample.android.classytaxijava.Constants;
import com.sample.android.classytaxijava.billing.BillingUtilities;
import com.sample.android.classytaxijava.data.ContentResource;
import com.sample.android.classytaxijava.data.SubscriptionStatus;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Fake implementation of ServerFunctions
 */
public class FakeServerFunctions implements ServerFunctions {

    /**
     * Live data is true when there are pending network requests.
     */
    private final MutableLiveData<Boolean> loading = new MutableLiveData<>();

    /**
     * The latest subscription data.
     * <p>
     * Use this class by observing the subscriptions {@link LiveData}.
     * Fake data will be communicated through this LiveData.
     */
    private final MutableLiveData<List<SubscriptionStatus>> subscriptions = new MutableLiveData<>();

    /**
     * The basic content URL.
     */
    private final MutableLiveData<ContentResource> basicContent = new MutableLiveData<>();

    /**
     * The premium content URL.
     */
    private final MutableLiveData<ContentResource> premiumContent = new MutableLiveData<>();

    private int fakeDataIndex;
    private static volatile FakeServerFunctions INSTANCE;

    public static ServerFunctions getInstance() {
        if (INSTANCE == null) {
            synchronized (FakeServerFunctions.class) {
                if (INSTANCE == null) {
                    INSTANCE = new FakeServerFunctions();
                }
            }
        }
        return INSTANCE;
    }

    @Override
    public LiveData<Boolean> getLoading() {
        return loading;
    }

    @Override
    public LiveData<List<SubscriptionStatus>> getSubscriptions() {
        return subscriptions;
    }

    @Override
    public LiveData<ContentResource> getBasicContent() {
        return basicContent;
    }

    @Override
    public LiveData<ContentResource> getPremiumContent() {
        return premiumContent;
    }

    /**
     * Fetch fake basic content and post results to {@link #basicContent}.
     * This will fail if the user does not have a basic subscription.
     */
    @Override
    public void updateBasicContent() {
        List<SubscriptionStatus> subs = subscriptions.getValue();
        if (subs == null || subs.isEmpty()) {
            basicContent.postValue(null);
            return;
        }
        // Premium subscriptions also give access to basic content.
        if (BillingUtilities.isBasicContent(subs.get(0)) ||
                BillingUtilities.isPremiumContent(subs.get(0))) {
            basicContent.postValue(new ContentResource("https://example.com/basic.jpg"));
        } else {
            basicContent.postValue(null);
        }
    }

    /**
     * Fetch fake premium content and post results to {@link #premiumContent}.
     * This will fail if the user does not have a premium subscription.
     */
    @Override
    public void updatePremiumContent() {
        List<SubscriptionStatus> subs = subscriptions.getValue();
        if (subs == null || subs.isEmpty()) {
            premiumContent.postValue(null);
            return;
        }
        if (BillingUtilities.isPremiumContent(subs.get(0))) {
            premiumContent.postValue(new ContentResource("https://example.com/premium.jpg"));
        } else {
            premiumContent.postValue(null);
        }
    }

    /**
     * Fetches fake subscription data and posts successful results to {@link #subscriptions}.
     */
    @Override
    public void updateSubscriptionStatus() {
        List<SubscriptionStatus> nextSub = new ArrayList<>();
        SubscriptionStatus subscriptionStatus = nextFakeSubscription();
        if (subscriptionStatus != null) {
            nextSub.add(subscriptionStatus);
        }
        subscriptions.postValue(nextSub);
    }

    /**
     * Register a subscription with the server and posts successful results to
     * {@link #subscriptions}.
     */
    @Override
    public void registerSubscription(String sku, String purchaseToken) {
        // When successful, return subscription results.
        // When response code is HTTP 409 CONFLICT create an already owned subscription.
        switch (sku) {
            case Constants.BASIC_SKU:
                subscriptions.postValue(Collections.singletonList(createFakeBasicSubscription()));
                break;
            case Constants.PREMIUM_SKU:
                subscriptions.postValue(Collections.singletonList(createFakePremiumSubscription()));
                break;
            default:
                subscriptions.postValue(Collections.singletonList(
                        createAlreadyOwnedSubscription(sku, purchaseToken)));

        }
    }

    /**
     * Transfer subscription to this account posts successful results to {@link #subscriptions}.
     */
    @Override
    public void transferSubscription(String sku, String purchaseToken) {
        SubscriptionStatus subscription = createFakeBasicSubscription();
        subscription.sku = sku;
        subscription.purchaseToken = purchaseToken;
        subscription.subAlreadyOwned = false;
        subscription.isEntitlementActive = true;
        subscriptions.postValue(Collections.singletonList(subscription));
    }

    /**
     * Register Instance ID when the user signs in or the token is refreshed.
     */
    @Override
    public void registerInstanceId(String instanceId) { }

    /**
     * Unregister when the user signs out.
     */
    @Override
    public void unregisterInstanceId(String instanceId) { }

    /**
     * Create a local record of a subscription that is already owned by someone else.
     * Created when the server returns HTTP 409 CONFLICT after a subscription registration request.
     */
    private SubscriptionStatus createAlreadyOwnedSubscription(
            String sku,
            String purchaseToken) {
        SubscriptionStatus subscriptionStatus = new SubscriptionStatus();
        subscriptionStatus.sku = sku;
        subscriptionStatus.purchaseToken = purchaseToken;
        subscriptionStatus.isEntitlementActive = false;
        subscriptionStatus.subAlreadyOwned = true;

        return subscriptionStatus;
    }

    @Nullable
    private SubscriptionStatus nextFakeSubscription() {
        SubscriptionStatus subscription;
        switch (fakeDataIndex) {
            case 0:
                subscription = null;
                break;
            case 1:
                subscription = createFakeBasicSubscription();
                break;
            case 2:
                subscription = createFakePremiumSubscription();
                break;
            case 3:
                subscription = createFakeAccountPausedSubscription();
                break;
            case 4:
                subscription = createFakeAccountHoldSubscription();
                break;
            case 5:
                subscription = createFakeGracePeriodSubscription();
                break;
            case 6:
                subscription = createFakeAlreadyOwnedSubscription();
                break;
            case 7:
                subscription = createFakeCanceledBasicSubscription();
                break;
            case 8:
                subscription = createFakeCanceledPremiumSubscription();
                break;
            default:
                // Unknown fake index, just pick one.
                subscription = null;
                break;
        }
        // Iterate through fake data for testing purposes.
        fakeDataIndex = (fakeDataIndex + 1) % 8;
        return subscription;
    }

    private SubscriptionStatus createFakeBasicSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = true;
        subscription.willRenew = true;
        subscription.sku = Constants.BASIC_SKU;
        subscription.isAccountHold = false;
        subscription.isGracePeriod = false;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = false;
        return subscription;
    }

    private SubscriptionStatus createFakePremiumSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = true;
        subscription.willRenew = true;
        subscription.sku = Constants.PREMIUM_SKU;
        subscription.isAccountHold = false;
        subscription.isGracePeriod = false;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = false;
        return subscription;
    }

    private SubscriptionStatus createFakeAccountHoldSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = false;
        subscription.willRenew = true;
        subscription.sku = Constants.PREMIUM_SKU;
        subscription.isAccountHold = true;
        subscription.isGracePeriod = false;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = false;
        return subscription;
    }

    private SubscriptionStatus createFakeAccountPausedSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = false;
        subscription.willRenew = true;
        subscription.sku = Constants.PREMIUM_SKU;
        subscription.isPaused = true;
        subscription.isGracePeriod = false;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = false;
        return subscription;
    }

    private SubscriptionStatus createFakeGracePeriodSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = true;
        subscription.willRenew = true;
        subscription.sku = Constants.BASIC_SKU;
        subscription.isAccountHold = false;
        subscription.isGracePeriod = true;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = false;
        return subscription;
    }

    private SubscriptionStatus createFakeAlreadyOwnedSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = false;
        subscription.willRenew = true;
        subscription.sku = Constants.BASIC_SKU;
        subscription.isAccountHold = false;
        subscription.isGracePeriod = false;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = true;
        return subscription;
    }

    private SubscriptionStatus createFakeCanceledBasicSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = true;
        subscription.willRenew = false;
        subscription.sku = Constants.BASIC_SKU;
        subscription.isAccountHold = false;
        subscription.isGracePeriod = false;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = false;
        return subscription;
    }

    private SubscriptionStatus createFakeCanceledPremiumSubscription() {
        SubscriptionStatus subscription = new SubscriptionStatus();
        subscription.isEntitlementActive = true;
        subscription.willRenew = false;
        subscription.sku = Constants.PREMIUM_SKU;
        subscription.isAccountHold = false;
        subscription.isGracePeriod = false;
        subscription.purchaseToken = "FAKE_PURCHASE_TOKEN";
        subscription.subAlreadyOwned = false;
        return subscription;
    }
}
