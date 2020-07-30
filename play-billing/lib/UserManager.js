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
const purchases_impl_1 = require("./internal/purchases_impl");
const errors_1 = require("./types/errors");
/*
 * A class that allows looking up purchases registered to a particular user
 */
class UserManager {
    /*
     * This class is intended to be initialized by the library.
     * Library consumer should not initialize this class themselves.
     */
    constructor(purchasesDbRef, purchaseManager) {
        this.purchasesDbRef = purchasesDbRef;
        this.purchaseManager = purchaseManager;
    }
    /*
     * Query subscriptions registered to a particular user, that are either active or in account hold.
     * Note: Other subscriptions which don't meet the above criteria still exists in Firestore purchase records, but not accessible from outside of the library.
     */
    queryCurrentSubscriptions(userId, sku, packageName) {
        return __awaiter(this, void 0, void 0, function* () {
            const purchaseList = new Array();
            try {
                // Create query to fetch possibly active subscriptions from Firestore
                let query = this.purchasesDbRef
                    .where('formOfPayment', '==', purchases_impl_1.GOOGLE_PLAY_FORM_OF_PAYMENT)
                    .where('skuType', '==', purchases_1.SkuType.SUBS)
                    .where('userId', '==', userId)
                    .where('isMutable', '==', true);
                if (sku) {
                    query = query.where('sku', '==', sku);
                }
                if (packageName) {
                    query = query.where('packageName', '==', packageName);
                }
                // Do fetch possibly active subscription from Firestore
                const queryResult = yield query.get();
                // Loop through these subscriptions and filter those that are indeed active
                for (const purchaseRecordSnapshot of queryResult.docs) {
                    let purchase = purchases_impl_1.SubscriptionPurchaseImpl.fromFirestoreObject(purchaseRecordSnapshot.data());
                    if (!purchase.isEntitlementActive() && !purchase.isAccountHold()) {
                        // If a subscription purchase record in Firestore indicates says that it has expired,
                        // and we haven't confirmed that it's in Account Hold,
                        // and we know that its status could have been changed since we last fetch its details,
                        // then we should query Play Developer API to get its latest status
                        console.log('Updating cached purchase record for token = ', purchase.purchaseToken);
                        purchase = yield this.purchaseManager.querySubscriptionPurchase(purchase.packageName, purchase.sku, purchase.purchaseToken);
                    }
                    // Add the updated purchase to list to returned to clients
                    if (purchase.isEntitlementActive() || purchase.isAccountHold()) {
                        purchaseList.push(purchase);
                    }
                }
                return purchaseList;
            }
            catch (err) {
                console.error('Error querying purchase records from Firestore. \n', err.message);
                const libraryError = new Error(err.message);
                libraryError.name = errors_1.PurchaseQueryError.OTHER_ERROR;
                throw libraryError;
            }
        });
    }
}
exports.default = UserManager;
//# sourceMappingURL=UserManager.js.map