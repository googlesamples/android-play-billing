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

import { NotificationType } from "./notifications";

// This file defines types that are exposed externally to the library consumers.

/* An abstract representation of a purchase made via Google Play Billing
 * It includes both one-time purchase and recurring subscription purchase.
 * The intention is to expose the raw response from Google Play Developer API,
 * while adding some fileds to support user-purchase management.
 */
export interface Purchase {
  // Library-managed properties that represents a purchase made via Google Play Billing
  packageName: string;
  purchaseToken: string;
  sku: string;
  userId?: string; // userId of the user who made this purchase
  verifiedAt: number; // epoch timestamp of when the server last queried Play Developer API for this purchase
  isRegisterable(): boolean; // determine if a purchase can be registered to an user
}
/*
 * Respresting a one-time purchase made via Google Play Billing
 */
export interface OneTimeProductPurchase extends Purchase {
  // Raw response from server
  // https://developers.google.com/android-publisher/api-ref/purchases/products
  purchaseTimeMillis: number;
  purchaseState: number;
  consumptionState: number;
  orderId: string;
  purchaseType?: number;
}

/*
 * Respresting a recurring subscription purchase made via Google Play Billing
 * It exposes the raw response received from Google Play Developer API,
 * and adds some util methods that interpretes the API response to a more human-friendly format.
 */
export interface SubscriptionPurchase extends Purchase {
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
  replacedByAnotherPurchase: boolean;
  isMutable: boolean; // indicate if the subscription purchase details can be changed in the future (i.e. expiry date changed because of auto-renewal)
  latestNotificationType?: NotificationType; // store the latest notification type received via Realtime Developer Notification

  isRegisterable(): boolean;

  // These methods below are convenient utilities that developers can use to interpret Play Developer API response
  isEntitlementActive(): boolean;
  willRenew(): boolean;
  isTestPurchase(): boolean;
  isFreeTrial(): boolean;
  isGracePeriod(): boolean;
  isAccountHold(): boolean;
  isPaused(): boolean;
  activeUntilDate(): Date;
}

// Representing type of a purchase / product.
// https://developer.android.com/reference/com/android/billingclient/api/BillingClient.SkuType.html
export enum SkuType {
  ONE_TIME = 'inapp',
  SUBS = 'subs'
}