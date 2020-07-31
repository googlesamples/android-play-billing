"use strict";
/**
 * Copyright 2020 Google LLC. All Rights Reserved.
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
const admin = require("firebase-admin");
const PlayDevelopperApi_1 = require("../../utils/PlayDevelopperApi");
const db = admin.firestore();
const SUCCESSFUL_CODE = 200;
exports.register_user = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    const confirmation = {
        registered: true
    };
    db.collection("users").doc(request.body.userId).set(confirmation, { merge: true })
        .then(() => {
        response.send({ success: true, reason: "" });
    }).catch(error => {
        response.send({ success: false, reason: error });
    });
}));
exports.save_game_data = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    const gameData = {
        gameData: request.body.gameData
    };
    db.collection("users").doc(request.body.userId).set(gameData, { merge: true })
        .then(() => {
        response.send({ success: true, reason: "" });
    }).catch(error => {
        response.send({ success: false, reason: error });
    });
}));
exports.get_game_data = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    db.collection("users").doc(request.body.userId).get()
        .then(doc => {
        if (doc.exists && doc.data().gameData !== undefined && doc.data().gameData !== "") {
            response.send({ success: true, reason: "", result: doc.data().gameData });
        }
        else {
            response.send({ success: false, reason: "User is not registered in the database" });
        }
    }).catch(error => {
        response.send({ success: false, reason: error });
    });
}));
exports.verify_and_save_purchase_token = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    const receipt = JSON.parse(request.body.receipt);
    verify_with_developer_api(receipt.packageName, receipt.productId, receipt.purchaseToken, request.body.isSubscription)
        .then(() => {
        const result = verify_in_database_and_save(request.body.userId, receipt);
        if (result) {
            response.send({ success: true, reason: "Token is valid and is saved" });
        }
        else {
            response.send({ success: false, reason: "Token was not saved" });
        }
    }).catch(error => {
        console.log(error);
        response.send({ success: true, reason: error });
    });
}));
function verify_in_database_and_save(userId, receipt) {
    return __awaiter(this, void 0, void 0, function* () {
        receipt.userId = userId;
        const tokenCall = db.collection("purchases").doc(receipt.purchaseToken);
        console.log(receipt);
        tokenCall.get()
            .then(purchaseToken => {
            if (!purchaseToken.exists) {
                return tokenCall.set(receipt)
                    .then(() => {
                    return true;
                }).catch(() => {
                    return false;
                });
            }
            else {
                return false;
            }
        })
            .catch(() => {
            return false;
        });
    });
}
function verify_with_developer_api(packageName, productId, purchaseToken, isSubscription) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isSubscription) {
            return verify_purchase(packageName, productId, purchaseToken);
        }
        else {
            return verify_subscriptions(packageName, productId, purchaseToken);
        }
    });
}
function verify_purchase(packageName, productId, purchaseToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const playDeveloperApiClient = yield PlayDevelopperApi_1.getPlayDeveloperApiClient();
            const result = yield playDeveloperApiClient.purchases.products.get({
                // The package name of the application the inapp product was sold in (for
                // example, 'com.some.thing').
                packageName: packageName,
                // The inapp product SKU (for example, 'com.some.thing.inapp1').
                productId: productId,
                // The token provided to the user's device when the inapp product was
                // purchased.
                token: purchaseToken,
            });
            if (result.status === SUCCESSFUL_CODE) {
                console.log("Play developer api call to get product is successful");
                return true;
            }
        }
        catch (error) {
            throw error;
        }
        throw Error('Error in play developer api call');
    });
}
function verify_subscriptions(packageName, productId, purchaseToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const playDeveloperApiClient = yield PlayDevelopperApi_1.getPlayDeveloperApiClient();
            const result = yield playDeveloperApiClient.purchases.subscriptions.get({
                // The package name of the application the inapp product was sold in (for
                // example, 'com.some.thing').
                packageName: packageName,
                // The inapp product SKU (for example, 'com.some.thing.inapp1').
                subscriptionId: productId,
                // The token provided to the user's device when the inapp product was
                // purchased.
                token: purchaseToken,
            });
            if (result.status === SUCCESSFUL_CODE) {
                console.log("Play developer api call to get subscription is successful");
                return true;
            }
        }
        catch (error) {
            throw error;
        }
        throw Error('Error in play developer api call');
    });
}
//# sourceMappingURL=userController.js.map