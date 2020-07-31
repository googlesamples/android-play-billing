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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const shared_1 = require("../shared");
const BASIC_PLAN_SKU = functions.config().app.basic_plan_sku;
const PREMIUM_PLAN_SKU = functions.config().app.premium_plan_sku;
/* This file contains implementation of functions related to content serving.
 * Each functions checks if the active user have access to the subscribed content,
 * and then returns the content to client app.
 */
/* Callable that serves basic content to the client
 */
exports.content_basic = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    shared_1.verifyAuthentication(context);
    yield verifySubscriptionOwnershipAsync(context, [BASIC_PLAN_SKU, PREMIUM_PLAN_SKU]);
    return shared_1.contentManager.getBasicContent();
}));
/* Callable that serves premium content to the client
 */
exports.content_premium = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    shared_1.verifyAuthentication(context);
    yield verifySubscriptionOwnershipAsync(context, [PREMIUM_PLAN_SKU]);
    return shared_1.contentManager.getPremiumContent();
}));
// Util function that verifies if current user owns at least one active purchases listed in skus
function verifySubscriptionOwnershipAsync(context, skus) {
    return __awaiter(this, void 0, void 0, function* () {
        const purchaseList = yield shared_1.playBilling.users().queryCurrentSubscriptions(context.auth.uid)
            .catch(err => {
            console.error(err.message);
            throw new functions.https.HttpsError('internal', 'Internal server error');
        });
        const isUserHavingTheSku = purchaseList.some(purchase => ((skus.indexOf(purchase.sku) > -1) && (purchase.isEntitlementActive())));
        if (!isUserHavingTheSku) {
            throw new functions.https.HttpsError('permission-denied', 'Valid subscription not found');
        }
    });
}
//# sourceMappingURL=content.js.map