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
const UnityStatus_1 = require("./UnityStatus");
const purchases_1 = require("../play-billing/types/purchases");
const FIRESTORE_USERS_COLLECTION = 'users';
/* UnityManager is part of Model layer.
 * It manages request of users from the unity sample game.
 */
class UnityManager {
    constructor(firebaseApp) {
        this.usersCollectionReference = firebaseApp.firestore().collection(FIRESTORE_USERS_COLLECTION);
    }
    registerUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const valuesToSave = {
                registered: true
            };
            return this.usersCollectionReference.doc(userId).set(valuesToSave, { merge: true })
                .then(() => {
                return new UnityStatus_1.UnityStatus(true);
            }).catch(error => {
                return new UnityStatus_1.UnityStatus(false, error);
            });
        });
    }
    saveGameData(userId, gameData) {
        return __awaiter(this, void 0, void 0, function* () {
            const valuesToSave = {
                gameData: gameData
            };
            return this.usersCollectionReference.doc(userId).set(valuesToSave, { merge: true })
                .then(() => {
                return new UnityStatus_1.UnityStatus(true);
            }).catch(error => {
                return new UnityStatus_1.UnityStatus(false, error);
            });
        });
    }
    getGameData(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersCollectionReference.doc(userId).get()
                .then(doc => {
                if (doc.exists && doc.data().gameData !== undefined && doc.data().gameData !== "") {
                    return new UnityStatus_1.UnityStatus(true, "", doc.data().gameData);
                }
                return new UnityStatus_1.UnityStatus(false, "User is not registered in the database");
            }).catch(error => {
                return new UnityStatus_1.UnityStatus(false, error);
            });
        });
    }
    getReceiptAndPurchaseType(userId, jsonReceipt) {
        const receipt = JSON.parse(this.getReceiptData(jsonReceipt));
        return { receipt: receipt, purchaseType: this.getPurchaseType(receipt.productId) };
    }
    getPurchaseType(productId) {
        if (productId.includes('subscription')) {
            return purchases_1.SkuType.SUBS;
        }
        else {
            return purchases_1.SkuType.ONE_TIME;
        }
    }
    getReceiptData(receipt) {
        let receiptInfo = receipt;
        receiptInfo = receiptInfo.replace(/\\/g, '');
        return receiptInfo.slice(receiptInfo.search("orderId") - 2, receiptInfo.search("signature") - 3);
    }
}
exports.UnityManager = UnityManager;
//# sourceMappingURL=UnityManager.js.map