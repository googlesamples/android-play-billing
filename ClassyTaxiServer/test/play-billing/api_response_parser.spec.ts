/**
 * Copyright 2018 Google LLC. All Rights Reserved.
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

import { expect } from "chai";
import { SubscriptionPurchaseImpl } from "../../src/play-billing/internal/purchases_impl"

describe('Google Play Developer API response parser', () => {
  describe('Purchases.subscriptions: get', () => {
    const packageName = 'com.domain.package_name'
    const sku = 'someSubsSKU'
    const purchaseToken = 'someToken123'

    it('Active subscription should be correctly parsed', () => {
      const apiResponse = {
        kind: 'androidpublisher#subscriptionPurchase',
        startTimeMillis: `${Date.now() - 10000}`, // some time in the past
        expiryTimeMillis: `${Date.now() + 10000}`, // some time in the future
        autoRenewing: true,
        priceCurrencyCode: 'JPY',
        priceAmountMicros: '99000000',
        countryCode: 'JP',
        developerPayload: '',
        paymentState: 1,
        orderId: 'GPA.3313-5503-3858-32549',
      }

      const subscription = SubscriptionPurchaseImpl.fromApiResponse(apiResponse, packageName, purchaseToken, sku, Date.now());
      expect(subscription.activeUntilDate().getTime(), 'activeUntilDate()').to.equal(new Date(parseInt(apiResponse.expiryTimeMillis)).getTime());
      expect(subscription.isAccountHold(), 'isAccountHold()').to.be.false;
      expect(subscription.isEntitlementActive(), 'isEntitlementActive()').to.be.true;
      expect(subscription.isFreeTrial(), 'isFreeTrial()').to.be.false;
      // expect(subscription.isGracePeriod(), 'isGracePeriod()').to.equals(false); // Currently can't tell grace period from API Response
      expect(subscription.isMutable, 'isMutable').to.be.true;
      expect(subscription.isTestPurchase(), 'isGracePeriod()').to.be.false;
      expect(subscription.willRenew(), 'willRenew()').to.be.true;

      // Verify that values of the original API response are all copied to the SubscriptionPurchase object.
      // We ignore type check because we do some type conversion (i.e. startTimeMillis: convert from string to int),
      // hence we use == instead of === below.
      Object.keys(apiResponse).forEach(key => expect(subscription[key] === apiResponse[key], `${key} is correctly copied`).to.be.true);
    });

    it('Trial subscription should be correctly parsed', () => {
      const apiResponse = {
        kind: 'androidpublisher#subscriptionPurchase',
        startTimeMillis: (Date.now() - 10000) + '', // some time in the past
        expiryTimeMillis: (Date.now() + 10000) + '', // some time in the future
        autoRenewing: true,
        priceCurrencyCode: 'JPY',
        priceAmountMicros: '99000000',
        countryCode: 'JP',
        developerPayload: '',
        paymentState: 2,
        orderId: 'GPA.3313-5503-3858-32549',
      }

      const subscription = SubscriptionPurchaseImpl.fromApiResponse(apiResponse, packageName, purchaseToken, sku, Date.now());
      expect(subscription.isFreeTrial(), 'isFreeTrial()').to.be.true;
    });

    it('Account hold subscription should be correctly parsed', () => {
      const apiResponse = {
        kind: 'androidpublisher#subscriptionPurchase',
        startTimeMillis: (Date.now() - 20000) + '', // some time in the past
        expiryTimeMillis: (Date.now() - 10000) + '', // some time in the past
        autoRenewing: true,
        priceCurrencyCode: 'JPY',
        priceAmountMicros: '99000000',
        countryCode: 'JP',
        developerPayload: '',
        paymentState: 0, // payment haven't been made
        orderId: 'GPA.3313-5503-3858-32549..1',
      }

      const subscription = SubscriptionPurchaseImpl.fromApiResponse(apiResponse, packageName, purchaseToken, sku, Date.now());
      expect(subscription.isAccountHold(), 'isAccountHold()').to.be.true;
    });

    it('Test purchase subscription should be correctly identified', () => {
      const apiResponse = {
        kind: 'androidpublisher#subscriptionPurchase',
        startTimeMillis: `${Date.now() - 10000}`, // some time in the past
        expiryTimeMillis: `${Date.now() + 10000}`, // some time in the future
        autoRenewing: true,
        priceCurrencyCode: 'JPY',
        priceAmountMicros: '99000000',
        countryCode: 'JP',
        developerPayload: '',
        paymentState: 1,
        purchaseType: 0,
        orderId: 'GPA.3313-5503-3858-32549',
      }

      const subscription = SubscriptionPurchaseImpl.fromApiResponse(apiResponse, packageName, purchaseToken, sku, Date.now());
      expect(subscription.isTestPurchase(), 'isTestPurchase').to.be.true;
    });
  });
});