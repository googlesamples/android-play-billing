"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const purchases_1 = require("../types/purchases");
const FIRESTORE_OBJECT_INTERNAL_KEYS = ['skuType', 'formOfPayment'];
exports.GOOGLE_PLAY_FORM_OF_PAYMENT = 'GOOGLE_PLAY';
/* This file contains internal implementation of classes and utilities that is only used inside of the library
 */
/* Convert a purchase object into a format that will be store in Firestore
 * What it does is to add some storekeeping meta-data to the purchase object.
 */
function purchaseToFirestoreObject(purchase, skuType) {
    const fObj = {};
    Object.assign(fObj, purchase);
    fObj.formOfPayment = exports.GOOGLE_PLAY_FORM_OF_PAYMENT;
    fObj.skuType = skuType;
    return fObj;
}
/* Merge a Purchase object, which is created from Play Developer API response,
 * with a purchase record of the same object stored in Firestore.
 * The Purchase object generated from Play Developer API response doesn't contain info of purchase ownership (which user owns the product),
 * while the record from Firestore can be outdated, so we want to merge the objects to create an updated representation of a purchase.
 * We only skip out internal storekeeping meta-data that the library consumer doesn't have to worry about.
 */
function mergePurchaseWithFirestorePurchaseRecord(purchase, firestoreObject) {
    // Copy all keys that exist in Firestore but not in Purchase object to the Purchase object (ex. userId)
    Object.keys(firestoreObject).map(key => {
        // Skip the internal key-value pairs assigned by convertToFirestorePurchaseRecord()
        if ((purchase[key] === undefined) && (FIRESTORE_OBJECT_INTERNAL_KEYS.indexOf(key) === -1)) {
            purchase[key] = firestoreObject[key];
        }
    });
}
exports.mergePurchaseWithFirestorePurchaseRecord = mergePurchaseWithFirestorePurchaseRecord;
/* Library's internal implementation of an OneTimeProductPurchase object
 * It's used inside of the library, not to be exposed to library's consumers.
 */
class OneTimeProductPurchaseImpl {
    // Convert raw api response from Play Developer API to an OneTimeProductPurchase object
    static fromApiResponse(apiResponse, packageName, purchaseToken, sku, verifiedAt) {
        // Intentionally hide developerPayload as the field was deprecated
        apiResponse.developerPayload = null;
        const purchase = new OneTimeProductPurchaseImpl();
        Object.assign(purchase, apiResponse);
        purchase.purchaseToken = purchaseToken;
        purchase.sku = sku;
        purchase.verifiedAt = verifiedAt;
        purchase.packageName = packageName;
        // Play Developer API subscriptions:get returns some properties as string instead of number as documented. We do some type correction here to fix that
        if (purchase.purchaseTimeMillis)
            purchase.purchaseTimeMillis = Number(purchase.purchaseTimeMillis);
        return purchase;
    }
    static fromFirestoreObject(firestoreObject) {
        const purchase = new OneTimeProductPurchaseImpl();
        purchase.mergeWithFirestorePurchaseRecord(firestoreObject);
        return purchase;
    }
    toFirestoreObject() {
        return purchaseToFirestoreObject(this, purchases_1.SkuType.ONE_TIME);
    }
    mergeWithFirestorePurchaseRecord(firestoreObject) {
        mergePurchaseWithFirestorePurchaseRecord(this, firestoreObject);
    }
    isRegisterable() {
        // Only allow user to register one time product purchases that has not been consumed or canceled.
        return (this.purchaseState === 0) && (this.consumptionState === 0);
    }
}
exports.OneTimeProductPurchaseImpl = OneTimeProductPurchaseImpl;
/* Library's internal implementation of an SubscriptionPurchase object
 * It's used inside of the library, not to be exposed to library's consumers.
 */
class SubscriptionPurchaseImpl {
    // Convert raw api response from Play Developer API to an SubscriptionPurchase object
    static fromApiResponse(apiResponse, packageName, purchaseToken, sku, verifiedAt) {
        // Intentionally hide developerPayload as the field was deprecated
        apiResponse.developerPayload = null;
        const purchase = new SubscriptionPurchaseImpl();
        Object.assign(purchase, apiResponse);
        purchase.purchaseToken = purchaseToken;
        purchase.sku = sku;
        purchase.verifiedAt = verifiedAt;
        purchase.replacedByAnotherPurchase = false;
        purchase.packageName = packageName;
        purchase.isMutable = purchase.autoRenewing || (verifiedAt < purchase.expiryTimeMillis);
        // Play Developer API subscriptions:get returns some properties as string instead of number as documented. We do some type correction here to fix that
        if (purchase.startTimeMillis)
            purchase.startTimeMillis = Number(purchase.startTimeMillis);
        if (purchase.expiryTimeMillis)
            purchase.expiryTimeMillis = Number(purchase.expiryTimeMillis);
        if (purchase.priceAmountMicros)
            purchase.priceAmountMicros = Number(purchase.priceAmountMicros);
        if (purchase.userCancellationTimeMillis)
            purchase.userCancellationTimeMillis = Number(purchase.userCancellationTimeMillis);
        return purchase;
    }
    static fromFirestoreObject(firestoreObject) {
        const purchase = new SubscriptionPurchaseImpl();
        purchase.mergeWithFirestorePurchaseRecord(firestoreObject);
        return purchase;
    }
    toFirestoreObject() {
        return purchaseToFirestoreObject(this, purchases_1.SkuType.SUBS);
    }
    mergeWithFirestorePurchaseRecord(firestoreObject) {
        mergePurchaseWithFirestorePurchaseRecord(this, firestoreObject);
    }
    isRegisterable() {
        const now = Date.now();
        return (now <= this.expiryTimeMillis);
    }
    // These methods below are convenient utilities that developers can use to interpret Play Developer API response
    isEntitlementActive() {
        const now = Date.now();
        return (now <= this.expiryTimeMillis) && (!this.replacedByAnotherPurchase);
    }
    willRenew() {
        return this.autoRenewing;
    }
    isTestPurchase() {
        return (this.purchaseType === 0);
    }
    isFreeTrial() {
        return (this.paymentState === 2);
    }
    isGracePeriod() {
        const now = Date.now();
        return (this.paymentState === 0) // payment hasn't been received
            && (now <= this.expiryTimeMillis) // and the subscription hasn't expired
            && (this.autoRenewing === true); // and it's renewing
        // One can also check if (this.latestNotificationType === NotificationType.SUBSCRIPTION_IN_GRACE_PERIOD)
        // Either way is fine. We decide to rely on Subscriptions:get API response because it works even when realtime dev notification delivery is delayed
    }
    isAccountHold() {
        const now = Date.now();
        return (now > this.expiryTimeMillis) // the subscription has expired
            && (this.autoRenewing === true) // but Google Play still try to renew it
            && (this.verifiedAt > this.expiryTimeMillis); // and we already fetch purchase details after the subscription has expired
        // One can also check if (this.latestNotificationType === NotificationType.SUBSCRIPTION_ON_HOLD)
        // Either way is fine. We decide to rely on Subscriptions:get API response because it works even when realtime dev notification delivery is delayed
    }
    activeUntilDate() {
        return new Date(this.expiryTimeMillis);
    }
}
exports.SubscriptionPurchaseImpl = SubscriptionPurchaseImpl;
//# sourceMappingURL=purchases_impl.js.map