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

import { OneTimeProductPurchase, SubscriptionPurchase, SkuType, Purchase } from "../types/purchases";
import { NotificationType } from "../types/notifications";

const FIRESTORE_OBJECT_INTERNAL_KEYS = ['skuType', 'formOfPayment'];
export const GOOGLE_PLAY_FORM_OF_PAYMENT = 'GOOGLE_PLAY';

/* This file contains internal implementation of classes and utilities that is only used inside of the library
 */

/* Convert a purchase object into a format that will be store in Firestore
 * What it does is to add some storekeeping meta-data to the purchase object.
 */
function purchaseToFirestoreObject(purchase: Purchase, skuType: SkuType): any {
  const fObj: any = {};
    Object.assign(fObj, purchase);
    fObj.formOfPayment = GOOGLE_PLAY_FORM_OF_PAYMENT;
    fObj.skuType = skuType;
    return fObj;
}

/* Merge a Purchase object, which is created from Play Developer API response,
 * with a purchase record of the same object stored in Firestore.
 * The Purchase object generated from Play Developer API response doesn't contain info of purchase ownership (which user owns the product),
 * while the record from Firestore can be outdated, so we want to merge the objects to create an updated representation of a purchase.
 * We only skip out internal storekeeping meta-data that the library consumer doesn't have to worry about.
 */
export function mergePurchaseWithFirestorePurchaseRecord(purchase: Purchase, firestoreObject: any) {
  // Copy all keys that exist in Firestore but not in Purchase object to the Purchase object (ex. userId)
  Object.keys(firestoreObject).map(key => {
    // Skip the internal key-value pairs assigned by convertToFirestorePurchaseRecord()
    if ((purchase[key] === undefined) && (FIRESTORE_OBJECT_INTERNAL_KEYS.indexOf(key) === -1)) {
      purchase[key] = firestoreObject[key];
    }
  });
}

/* Library's internal implementation of an OneTimeProductPurchase object
 * It's used inside of the library, not to be exposed to library's consumers.
 */
export class OneTimeProductPurchaseImpl implements OneTimeProductPurchase {
  // Raw response from server
  // https://developers.google.com/android-publisher/api-ref/purchases/products
  purchaseTimeMillis: number;
  purchaseState: number;
  consumptionState: number;
  orderId: string;
  purchaseType: number;

  // Library-managed Purchase properties
  packageName: string;
  purchaseToken: string;
  sku: string;
  userId?: string;
  verifiedAt: number;

  // Convert raw api response from Play Developer API to an OneTimeProductPurchase object
  static fromApiResponse(apiResponse: any, packageName: string, purchaseToken: string, sku: string, verifiedAt:number): OneTimeProductPurchaseImpl {
    // Intentionally hide developerPayload as the field was deprecated
    apiResponse.developerPayload = null;

    const purchase = new OneTimeProductPurchaseImpl();
    Object.assign(purchase, apiResponse);
    purchase.purchaseToken = purchaseToken;
    purchase.sku = sku;
    purchase.verifiedAt = verifiedAt;
    purchase.packageName = packageName;

    // Play Developer API subscriptions:get returns some properties as string instead of number as documented. We do some type correction here to fix that
    if (purchase.purchaseTimeMillis) purchase.purchaseTimeMillis = Number(purchase.purchaseTimeMillis);

    return purchase;
  }

  static fromFirestoreObject(firestoreObject: any): OneTimeProductPurchaseImpl {
    const purchase = new OneTimeProductPurchaseImpl();
    purchase.mergeWithFirestorePurchaseRecord(firestoreObject);
    return purchase;
  }

  toFirestoreObject(): any {
    return purchaseToFirestoreObject(this, SkuType.ONE_TIME);
  }

  mergeWithFirestorePurchaseRecord(firestoreObject: any) {
    mergePurchaseWithFirestorePurchaseRecord(this, firestoreObject);
  }

  isRegisterable(): boolean {
    // Only allow user to register one time product purchases that has not been consumed or canceled.
    return (this.purchaseState === 0) && (this.consumptionState === 0);
  }
}

/* Library's internal implementation of an SubscriptionPurchase object
 * It's used inside of the library, not to be exposed to library's consumers.
 */
export class SubscriptionPurchaseImpl implements SubscriptionPurchase {
  // Raw response from server
  // https://developers.google.com/android-publisher/api-ref/purchases/subscriptions/get
  startTimeMillis: number;
  expiryTimeMillis: number;
  autoResumeTimeMillis: number;
  autoRenewing: boolean;
  priceCurrencyCode: string;
  priceAmountMicros: number;
  countryCode: string
  paymentState: number
  cancelReason: number
  userCancellationTimeMillis: number
  orderId: string;
  linkedPurchaseToken: string;
  purchaseType?: number;

  // Library-managed Purchase properties
  packageName: string;
  purchaseToken: string;
  sku: string;
  userId?: string;
  verifiedAt: number; // timestamp of last purchase verification by Play Developer API
  replacedByAnotherPurchase: boolean;
  isMutable: boolean; // indicate if the subscription purchase details can be changed in the future (i.e. expiry date changed because of auto-renewal)
  latestNotificationType?: NotificationType;

  // Convert raw api response from Play Developer API to an SubscriptionPurchase object
  static fromApiResponse(apiResponse: any, packageName: string, purchaseToken: string, sku: string, verifiedAt:number): SubscriptionPurchaseImpl {
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
    if (purchase.startTimeMillis) purchase.startTimeMillis = Number(purchase.startTimeMillis);
    if (purchase.expiryTimeMillis) purchase.expiryTimeMillis = Number(purchase.expiryTimeMillis);
    if (purchase.autoResumeTimeMillis) purchase.autoResumeTimeMillis = Number(purchase.autoResumeTimeMillis);
    if (purchase.priceAmountMicros) purchase.priceAmountMicros = Number(purchase.priceAmountMicros);
    if (purchase.userCancellationTimeMillis) purchase.userCancellationTimeMillis = Number(purchase.userCancellationTimeMillis);

    return purchase;
  }

  static fromFirestoreObject(firestoreObject: any): SubscriptionPurchaseImpl {
    const purchase = new SubscriptionPurchaseImpl();
    purchase.mergeWithFirestorePurchaseRecord(firestoreObject);
    return purchase;
  }

  toFirestoreObject(): any {
    return purchaseToFirestoreObject(this, SkuType.SUBS);
  }

  mergeWithFirestorePurchaseRecord(firestoreObject: any) {
    mergePurchaseWithFirestorePurchaseRecord(this, firestoreObject);
  }

  isRegisterable(): boolean {
    const now = Date.now();
    return (now <= this.expiryTimeMillis);
  }

  // These methods below are convenient utilities that developers can use to interpret Play Developer API response
  isEntitlementActive(): boolean {
    const now = Date.now();
    return (now <= this.expiryTimeMillis) && (!this.replacedByAnotherPurchase);
  }

  willRenew(): boolean {
    return this.autoRenewing;
  }

  isTestPurchase(): boolean {
    return (this.purchaseType === 0);
  }

  isFreeTrial(): boolean {
    return (this.paymentState === 2);
  }

  isGracePeriod(): boolean {
    const now = Date.now();
    return (this.paymentState === 0) // payment hasn't been received
      && (now <= this.expiryTimeMillis) // and the subscription hasn't expired
      && (this.autoRenewing === true); // and it's renewing
    // One can also check if (this.latestNotificationType === NotificationType.SUBSCRIPTION_IN_GRACE_PERIOD)
    // Either way is fine. We decide to rely on Subscriptions:get API response because it works even when realtime dev notification delivery is delayed
  }

  isAccountHold(): boolean {
    const now = Date.now();
    return (now > this.expiryTimeMillis) // the subscription has expired
      && (this.autoRenewing === true) // but Google Play still try to renew it
      && (this.paymentState === 0) // and the payment is pending
      && (this.verifiedAt > this.expiryTimeMillis) // and we already fetch purchase details after the subscription has expired
  }

  isPaused(): boolean {
    const now = Date.now();
    return (now > this.expiryTimeMillis) // the subscription has expired
        && (this.autoRenewing === true) // but Google Play still try to renew it
        && (this.paymentState === 1) // and the payment is received
        && (this.verifiedAt > this.expiryTimeMillis) // and we already fetch purchase details after the subscription has expired
  }

  activeUntilDate(): Date {
    return new Date(this.expiryTimeMillis);
  }
}
