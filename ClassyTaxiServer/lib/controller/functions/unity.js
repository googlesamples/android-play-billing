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
const shared_1 = require("../shared");
const UnityStatus_1 = require("../../model/UnityStatus");
exports.register_user = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    response.send(yield shared_1.unityManager.registerUser(request.body.userId));
}));
exports.save_game_data = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    response.send(yield shared_1.unityManager.saveGameData(request.body.userId, request.body.gameData));
}));
exports.get_game_data = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    response.send(yield shared_1.unityManager.getGameData(request.body.userId));
}));
exports.verify_and_save_purchaseToken = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    var purchaseInformation = shared_1.unityManager.getReceiptAndPurchaseType(request.body.userId, request.body.receipt);
    shared_1.playBilling.purchases().queryPurchase(purchaseInformation.receipt.packageName, purchaseInformation.receipt.productId, purchaseInformation.receipt.purchaseToken, purchaseInformation.purchaseType).then(() => {
        response.send(new UnityStatus_1.UnityStatus(true));
    }).catch(error => {
        response.send(new UnityStatus_1.UnityStatus(false, error));
    });
}));
//# sourceMappingURL=unity.js.map