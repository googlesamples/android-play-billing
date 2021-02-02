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

import * as PlayBilling from "../play-billing";

/* SubscriptionStatus is part of Model layer.
 * It's an entity represents a subcription purchase from client app's perspective
 * It wraps the more general purpose SubscriptionPurchase class of Play Billing reusable component
 */
export class SubscriptionStatus {
  sku: string;
  purchaseToken: string;
  isEntitlementActive: boolean;
  willRenew: boolean;
  activeUntilMillisec: number;
  isFreeTrial: boolean;
  isGracePeriod: boolean;
  isAccountHold: boolean;
  isPaused: boolean;
  autoResumeTimeMillis: number;

  constructor(subcriptionPurchase: PlayBilling.SubscriptionPurchase) {
    this.sku = subcriptionPurchase.sku;
    this.purchaseToken = subcriptionPurchase.purchaseToken;
    this.isEntitlementActive = subcriptionPurchase.isEntitlementActive();
    this.willRenew = subcriptionPurchase.willRenew();
    this.activeUntilMillisec = subcriptionPurchase.activeUntilDate().getTime();
    this.isFreeTrial = subcriptionPurchase.isFreeTrial();
    this.isGracePeriod = subcriptionPurchase.isGracePeriod();
    this.isAccountHold = subcriptionPurchase.isAccountHold();
    this.isPaused = subcriptionPurchase.isPaused();
    this.autoResumeTimeMillis = subcriptionPurchase.autoResumeTimeMillis;
  }
}
