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
/*
 * This is a reusable component (the library) that directly manage purchases made via Google Play Billing.
 * It does several things:
 *  - Manage relation between purchases and users (i.e. which user owns which purchase)
 *  - Manage the lifecycle of recurring subscription purchases (renewal, expiry, grace period, account hold etc.)
 *
 * These types are exposed to be used by the library's consumers.
 * One should not use types that are not included below, as it may have unexpected effects.
 */
var PlayBilling_1 = require("./PlayBilling");
exports.PlayBilling = PlayBilling_1.default;
var purchases_1 = require("./types/purchases");
exports.SkuType = purchases_1.SkuType;
var errors_1 = require("./types/errors");
exports.PurchaseQueryError = errors_1.PurchaseQueryError;
exports.PurchaseUpdateError = errors_1.PurchaseUpdateError;
var notifications_1 = require("./types/notifications");
exports.NotificationType = notifications_1.NotificationType;
//# sourceMappingURL=index.js.map