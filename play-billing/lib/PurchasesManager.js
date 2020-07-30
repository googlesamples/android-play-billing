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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const purchases_1 = require("./types/purchases");
const errors_1 = require("./types/errors");
const notifications_1 = require("./types/notifications");
/*
 * A class that provides user-purchase linking features
 */
class PurchaseManager {
    /*
     * This class is intended to be initialized by the library.
     * Library consumer should not initialize this class themselves.
     */
    constructor(playDeveloperApiClient) {
        this.playDeveloperApiClient = playDeveloperApiClient;
    }
    ;
    /*
     * Query a onetime product purchase by its package name, product Id (sku) and purchase token.
     * The method queries Google Play Developer API to get the latest status of the purchase,
     * then merge it with purchase ownership info stored in the library's managed Firestore database,
     * then returns the merge information as a OneTimeProductPurchase to its caller.
     */
    queryOneTimeProductPurchase(packageName, sku, purchaseToken) {
        return __awaiter(this, void 0, void 0, function* () {
            // STEP 1. Query Play Developer API to verify the purchase token
            yield new Promise((resolve, reject) => {
                this.playDeveloperApiClient.purchases.products.get({
                    packageName: packageName,
                    productId: sku,
                    token: purchaseToken
                }, (err, result) => {
                    if (err) {
                        reject(this.convertPlayAPIErrorToLibraryError(err));
                    }
                    else {
                        resolve(result.data);
                    }
                });
            });
        });
    }
    /*
     * Query a subscription purchase by its package name, product Id (sku) and purchase token.
     * The method queries Google Play Developer API to get the latest status of the purchase,
     * then merge it with purchase ownership info stored in the library's managed Firestore database,
     * then returns the merge information as a SubscriptionPurchase to its caller.
     */
    querySubscriptionPurchase(packageName, sku, purchaseToken) {
        return this.querySubscriptionPurchaseWithTrigger(packageName, sku, purchaseToken);
    }
    /*
     * Actual private information of querySubscriptionPurchase(packageName, sku, purchaseToken)
     * It's expanded to support storing extra information only available via Realtime Developer Notification,
     * such as latest notification type.
     *  - triggerNotificationType is only neccessary if the purchase query action is triggered by a Realtime Developer notification
     */
    querySubscriptionPurchaseWithTrigger(packageName, sku, purchaseToken) {
        return __awaiter(this, void 0, void 0, function* () {
            // STEP 1. Query Play Developer API to verify the purchase token
            yield new Promise((resolve, reject) => {
                this.playDeveloperApiClient.purchases.subscriptions.get({
                    packageName: packageName,
                    subscriptionId: sku,
                    token: purchaseToken
                }, (err, result) => {
                    if (err) {
                        reject(this.convertPlayAPIErrorToLibraryError(err));
                    }
                    else {
                        resolve(result.data);
                    }
                });
            });
        });
    }
    /*
     * Another method to query latest status of a Purchase.
     * Internally it just calls queryOneTimeProductPurchase / querySubscriptionPurchase accordingly
     */
    queryPurchase(packageName, sku, purchaseToken, skuType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (skuType === purchases_1.SkuType.ONE_TIME) {
                return yield this.queryOneTimeProductPurchase(packageName, sku, purchaseToken);
            }
            else if (skuType === purchases_1.SkuType.SUBS) {
                return yield this.querySubscriptionPurchase(packageName, sku, purchaseToken);
            }
            else {
                throw new Error('Invalid skuType.');
            }
        });
    }
    processDeveloperNotification(packageName, notification) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (notification.testNotification) {
                console.log('Received a test Realtime Developer Notification. ', notification.testNotification);
                return null;
            }
            // Received a real-time developer notification.
            const subscriptionNotification = notification.subscriptionNotification;
            if ((subscriptionNotification === null || subscriptionNotification === void 0 ? void 0 : subscriptionNotification.notificationType) !== notifications_1.NotificationType.SUBSCRIPTION_PURCHASED) {
                // We can safely ignoreSUBSCRIPTION_PURCHASED because with new subscription, our Android app will send the same token to server for verification
                // For other type of notification, we query Play Developer API to update our purchase record cache in Firestore
                return yield this.querySubscriptionPurchaseWithTrigger(packageName, (_a = subscriptionNotification === null || subscriptionNotification === void 0 ? void 0 : subscriptionNotification.subscriptionId) !== null && _a !== void 0 ? _a : "", (_b = subscriptionNotification === null || subscriptionNotification === void 0 ? void 0 : subscriptionNotification.purchaseToken) !== null && _b !== void 0 ? _b : "");
            }
            return null;
        });
    }
    convertPlayAPIErrorToLibraryError(playError) {
        const libraryError = new Error(playError.message);
        if (playError.code === 404) {
            libraryError.name = errors_1.PurchaseQueryError.INVALID_TOKEN;
        }
        else {
            // Unexpected error occurred. It's likely an issue with Service Account
            libraryError.name = errors_1.PurchaseQueryError.OTHER_ERROR;
            console.error('Unexpected error when querying Google Play Developer API. Please check if you use a correct service account');
        }
        return libraryError;
    }
}
exports.default = PurchaseManager;
//# sourceMappingURL=PurchasesManager.js.map