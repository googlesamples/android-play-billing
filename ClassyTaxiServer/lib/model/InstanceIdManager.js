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
const FIRESTORE_USERS_COLLECTION = 'users';
/* InstanceIdManager is part of Model layer.
 * It manages InstanceIds of users, which is used to send push notification to users.
 */
class InstanceIdManager {
    constructor(firebaseApp) {
        this.usersCollectionReference = firebaseApp.firestore().collection(FIRESTORE_USERS_COLLECTION);
    }
    // Register a device instanceId to an user
    registerInstanceId(userId, instanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            // STEP 1: Fetch the user document from Firestore
            const userDocument = yield this.usersCollectionReference.doc(userId).get();
            if (userDocument.exists) {
                // STEP 2a: If the document exists, add the Instance ID to the user's list of FCM tokens
                let tokens = userDocument.data().fcmTokens;
                if (!tokens) {
                    tokens = [];
                }
                if (tokens.indexOf(instanceId) === -1) {
                    tokens.push(instanceId);
                    yield userDocument.ref.update({ fcmTokens: tokens });
                }
            }
            else {
                // STEP 2b: If the document doesn't exist, create a new one with the Instance ID
                const tokens = [instanceId];
                yield userDocument.ref.set({ fcmTokens: tokens });
            }
        });
    }
    /* Unregister a device instanceId from an user
     */
    unregisterInstanceId(userId, instanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            // STEP 1: Fetch the user document from Firestore
            const userDocument = yield this.usersCollectionReference.doc(userId).get();
            if (userDocument.exists) {
                // STEP 2: If the document exists, remove the Instance ID to the user's list of FCM tokens
                const tokens = userDocument.data().fcmTokens;
                if (tokens) {
                    const newTokens = tokens.filter(token => token !== instanceId);
                    if (newTokens.length !== tokens.length) {
                        yield userDocument.ref.update({ fcmTokens: newTokens });
                    }
                }
                else {
                    // The user doesn't exist, which is an unexpected situation
                    // However, we don't need to do handle this case, so just log an warning and move on
                    console.warn('Attempted to unregister InstanceId that does not belong to the user. userId =', userId);
                }
            }
            else {
                // The user doesn't exist, which is an unexpected situation
                // However, we don't need to do handle this case, so just log an warning and move on
                console.warn('Attempted to unregister InstanceId of an non-existent user. userId =', userId);
                return;
            }
        });
    }
    /* Get a list of instanceIds that are currently registerd to an user.
     * It can be used to send push notifications to all devices owned by the user
     */
    getInstanceIds(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // STEP 1: Fetch the user document from Firestore
            const userDocument = yield this.usersCollectionReference.doc(userId).get();
            // STEP 2: Return the list of Instance IDs (FCM tokens) inside the document
            return userDocument.data().fcmTokens ? userDocument.data().fcmTokens : [];
        });
    }
}
exports.InstanceIdManager = InstanceIdManager;
//# sourceMappingURL=InstanceIdManager.js.map