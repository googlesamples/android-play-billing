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

/* 
 * This is a reusable component (the library) that directly manage purchases made via Google Play Billing.
 * It does several things:
 *  - Manage relation between purchases and users (i.e. which user owns which purchase)
 *  - Manage the lifecycle of recurring subscription purchases (renewal, expiry, grace period, account hold etc.)
 * 
 * These types are exposed to be used by the library's consumers.
 * One should not use types that are not included below, as it may have unexpected effects.
 */ 

export { default as PlayBilling } from "./PlayBilling";
export { Purchase, OneTimeProductPurchase, SubscriptionPurchase, SkuType } from "./types/purchases";
export { PurchaseQueryError, PurchaseUpdateError } from "./types/errors";
export { DeveloperNotification, NotificationType } from "./types/notifications";