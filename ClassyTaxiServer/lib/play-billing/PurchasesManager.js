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
const purchases_1 = require("./types/purchases");
const errors_1 = require("./types/errors");
const purchases_impl_1 = require("./internal/purchases_impl");
const notifications_1 = require("./types/notifications");
const REPLACED_PURCHASE_USERID_PLACEHOLDER = 'invalid';
/*
 * A class that provides user-purchase linking features
 */
class PurchaseManager {
    /*
     * This class is intended to be initialized by the library.
     * Library consumer should not initialize this class themselves.
     */
    constructor(purchasesDbRef, playDeveloperApiClient) {
        this.purchasesDbRef = purchasesDbRef;
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
            const apiResponse = yield new Promise((resolve, reject) => {
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
            // STEP 2. Look up purchase records from Firestore which matches this purchase token
            try {
                const purchaseRecordDoc = yield this.purchasesDbRef.doc(purchaseToken).get();
                // Generate OneTimeProductPurchase object from Firestore response
                const now = Date.now();
                const onetimeProductPurchase = purchases_impl_1.OneTimeProductPurchaseImpl.fromApiResponse(apiResponse, packageName, purchaseToken, sku, now);
                // Attempt to save purchase record cache to Firestore
                const firestoreObject = onetimeProductPurchase.toFirestoreObject();
                if (purchaseRecordDoc.exists) {
                    // STEP 3a. We have this purchase cached in Firstore. Update our cache with the newly received response from Google Play Developer API
                    yield purchaseRecordDoc.ref.update(firestoreObject);
                    // STEP 4a. Merge other fields of our purchase record in Firestore (such as userId) with our OneTimeProductPurchase object and return to caller.
                    purchases_impl_1.mergePurchaseWithFirestorePurchaseRecord(onetimeProductPurchase, purchaseRecordDoc.data());
                    return onetimeProductPurchase;
                }
                else {
                    // STEP 3b. This is a brand-new purchase. Save the purchase record to Firestore
                    yield purchaseRecordDoc.ref.set(firestoreObject);
                    // STEP 4b. Return the OneTimeProductPurchase object.
                    return onetimeProductPurchase;
                }
            }
            catch (err) {
                // Some unexpected error has occured while interacting with Firestore.
                const libraryError = new Error(err.message);
                libraryError.name = errors_1.PurchaseQueryError.OTHER_ERROR;
                throw libraryError;
            }
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
    querySubscriptionPurchaseWithTrigger(packageName, sku, purchaseToken, triggerNotificationType) {
        return __awaiter(this, void 0, void 0, function* () {
            // STEP 1. Query Play Developer API to verify the purchase token
            const apiResponse = yield new Promise((resolve, reject) => {
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
            try {
                // STEP 2. Look up purchase records from Firestore which matches this purchase token
                const purchaseRecordDoc = yield this.purchasesDbRef.doc(purchaseToken).get();
                // Generate SubscriptionPurchase object from Firestore response
                const now = Date.now();
                const subscriptionPurchase = purchases_impl_1.SubscriptionPurchaseImpl.fromApiResponse(apiResponse, packageName, purchaseToken, sku, now);
                // Store notificationType to database if queryPurchase was triggered by a realtime developer notification
                if (triggerNotificationType !== undefined) {
                    subscriptionPurchase.latestNotificationType = triggerNotificationType;
                }
                // Convert subscriptionPurchase object to a format that to be stored in Firestore
                const firestoreObject = subscriptionPurchase.toFirestoreObject();
                if (purchaseRecordDoc.exists) {
                    // STEP 3a. We has this purchase cached in Firstore. Update our cache with the newly received response from Google Play Developer API
                    yield purchaseRecordDoc.ref.update(firestoreObject);
                    // STEP 4a. Merge other fields of our purchase record in Firestore (such as userId) with our SubscriptionPurchase object and return to caller.
                    purchases_impl_1.mergePurchaseWithFirestorePurchaseRecord(subscriptionPurchase, purchaseRecordDoc.data());
                    return subscriptionPurchase;
                }
                else {
                    // STEP 3b. This is a brand-new subscription purchase. Just save the purchase record to Firestore
                    yield purchaseRecordDoc.ref.set(firestoreObject);
                    if (subscriptionPurchase.linkedPurchaseToken) {
                        // STEP 4b. This is a subscription purchase that replaced other subscriptions in the past. Let's disable the purchases that it has replaced.
                        yield this.disableReplacedSubscription(packageName, sku, subscriptionPurchase.linkedPurchaseToken);
                    }
                    // STEP 5. This is a brand-new subscription purchase. Just save the purchase record to Firestore and return an SubscriptionPurchase object with userId = null.
                    return subscriptionPurchase;
                }
            }
            catch (err) {
                // Some unexpected error has occured while interacting with Firestore.
                const libraryError = new Error(err.message);
                libraryError.name = errors_1.PurchaseQueryError.OTHER_ERROR;
                throw libraryError;
            }
        });
    }
    /*
     * There are situations that a subscription is replaced by another subscription.
     * For example, an user signs up for a subscription (tokenA), cancel its and re-signups (tokenB)
     * We must disable the subscription linked to tokenA because it has been replaced by tokenB.
     * If failed to do so, there's chance that a malicious user can have a single purchase registered to multiple user accounts.
     *
     * This method is used to disable a replaced subscription. It's not intended to be used from outside of the library.
     */
    disableReplacedSubscription(packageName, sku, purchaseToken) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Disabling purchase token = ', purchaseToken);
            // STEP 1: Lookup the purchase record in Firestore
            const purchaseRecordDoc = yield this.purchasesDbRef.doc(purchaseToken).get();
            if (purchaseRecordDoc.exists) {
                // Purchase record found in Firestore. Check if it has been disabled.
                if (purchaseRecordDoc.data().replacedByAnotherPurchase) {
                    // The old purchase has been. We don't need to take further action
                    return;
                }
                else {
                    // STEP 2a: Old purchase found in cache, so we disable it
                    yield purchaseRecordDoc.ref.update({ replacedByAnotherPurchase: true, userId: REPLACED_PURCHASE_USERID_PLACEHOLDER });
                    return;
                }
            }
            else {
                // Purchase record not found in Firestore. We'll try to fetch purchase detail from Play Developer API to backfill the missing cache
                const apiResponse = yield new Promise((resolve, reject) => {
                    this.playDeveloperApiClient.purchases.subscriptions.get({
                        packageName: packageName,
                        subscriptionId: sku,
                        token: purchaseToken
                    }, (err, result) => __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            console.warn('Error fetching purchase data from Play Developer API to backfilled missing purchase record in Firestore. ', err.message);
                            // We only log an warning to console log as there is chance that backfilling is impossible.
                            // For example: after a subscription upgrade, the new token has linkedPurchaseToken to be the token before upgrade. 
                            // We can't tell the sku of the purchase before upgrade from the old token itself, so we can't query Play Developer API
                            // to backfill our cache.
                            resolve();
                        }
                        else {
                            resolve(result.data);
                        }
                    }));
                });
                if (apiResponse) {
                    // STEP 2b. Parse the response from Google Play Developer API and store the purchase detail
                    const now = Date.now();
                    const subscriptionPurchase = purchases_impl_1.SubscriptionPurchaseImpl.fromApiResponse(apiResponse, packageName, purchaseToken, sku, now);
                    subscriptionPurchase.replacedByAnotherPurchase = true; // Mark the purchase as already being replaced by other purchase.
                    subscriptionPurchase.userId = REPLACED_PURCHASE_USERID_PLACEHOLDER;
                    const firestoreObject = subscriptionPurchase.toFirestoreObject();
                    yield purchaseRecordDoc.ref.set(firestoreObject);
                    // STEP 3. If this purchase has also replaced another purchase, repeating from STEP 1 with the older token
                    if (subscriptionPurchase.linkedPurchaseToken) {
                        yield this.disableReplacedSubscription(packageName, sku, subscriptionPurchase.linkedPurchaseToken);
                    }
                }
            }
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
    /*
     * Force register a purchase to an user.
     * This method is not intended to be called from outside of the library.
     */
    forceRegisterToUserAccount(purchaseToken, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.purchasesDbRef.doc(purchaseToken).update({ userId: userId });
            }
            catch (err) {
                // console.error('Failed to update purchase record in Firestore. \n', err.message);
                const libraryError = new Error(err.message);
                libraryError.name = errors_1.PurchaseUpdateError.OTHER_ERROR;
                throw libraryError;
            }
        });
    }
    /*
     * Register a purchase (both one-time product and recurring subscription) to a user.
     * It's intended to be exposed to Android app to verify purchases made in the app
     */
    registerToUserAccount(packageName, sku, purchaseToken, skuType, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // STEP 1. Fetch the purchase using Play Developer API and purchase records in Firestore.
            let purchase;
            try {
                purchase = yield this.queryPurchase(packageName, sku, purchaseToken, skuType);
            }
            catch (err) {
                // console.error('Error querying purchase', err);
                // Error when attempt to query purchase. Return invalid token to caller.
                const libraryError = new Error(err.message);
                libraryError.name = errors_1.PurchaseUpdateError.INVALID_TOKEN;
                throw libraryError;
            }
            // STEP 2. Check if the purchase is registerable.
            if (!purchase.isRegisterable()) {
                const libraryError = new Error('Purchase is not registerable');
                libraryError.name = errors_1.PurchaseUpdateError.INVALID_TOKEN;
                throw libraryError;
            }
            // STEP 3. Check if the purchase has been registered to an user. If it is, then return conflict error to our caller.
            if (purchase.userId === userId) {
                // Purchase record already registered to the target user. We'll do nothing.
                return;
            }
            else if (purchase.userId) {
                console.log('Purchase has been registered to another user');
                // Purchase record already registered to different user. Return 'conflict' to caller
                const libraryError = new Error('Purchase has been registered to another user');
                libraryError.name = errors_1.PurchaseUpdateError.CONFLICT;
                throw libraryError;
            }
            // STEP 3: Register purchase to the user
            yield this.forceRegisterToUserAccount(purchaseToken, userId);
        });
    }
    transferToUserAccount(packageName, sku, purchaseToken, skuType, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // STEP 1. Fetch the purchase using Play Developer API and purchase records in Firestore.
                yield this.queryPurchase(packageName, sku, purchaseToken, skuType);
                // STEP 2: Attempt to transfer a purchase to the user
                yield this.forceRegisterToUserAccount(purchaseToken, userId);
            }
            catch (err) {
                // Error when attempt to query purchase. Return invalid token to caller.
                const libraryError = new Error(err.message);
                libraryError.name = errors_1.PurchaseUpdateError.INVALID_TOKEN;
                throw libraryError;
            }
        });
    }
    processDeveloperNotification(packageName, notification) {
        return __awaiter(this, void 0, void 0, function* () {
            if (notification.testNotification) {
                console.log('Received a test Realtime Developer Notification. ', notification.testNotification);
                return null;
            }
            // Received a real-time developer notification.
            const subscriptionNotification = notification.subscriptionNotification;
            if (subscriptionNotification.notificationType !== notifications_1.NotificationType.SUBSCRIPTION_PURCHASED) {
                // We can safely ignoreSUBSCRIPTION_PURCHASED because with new subscription, our Android app will send the same token to server for verification
                // For other type of notification, we query Play Developer API to update our purchase record cache in Firestore
                return yield this.querySubscriptionPurchaseWithTrigger(packageName, subscriptionNotification.subscriptionId, subscriptionNotification.purchaseToken, subscriptionNotification.notificationType);
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