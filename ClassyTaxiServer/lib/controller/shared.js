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
const firebase = require("firebase-admin");
const functions = require("firebase-functions");
const play_billing_1 = require("../play-billing");
const serviceAccountPlay = require("../service-account.json");
const InstanceIdManager_1 = require("../model/InstanceIdManager");
const ContentManager_1 = require("../model/ContentManager");
/*
 * This file defines shared resources that are used in functions
 */
// Shared config
exports.PACKAGE_NAME = functions.config().app.package_name;
// Shared Managers
exports.playBilling = play_billing_1.PlayBilling.fromServiceAccount(serviceAccountPlay, firebase.app());
exports.instanceIdManager = new InstanceIdManager_1.InstanceIdManager(firebase.app());
exports.contentManager = new ContentManager_1.ContentManager();
// Shared verification functions
// Verify if the user making the call has signed in
function verifyAuthentication(context) {
    if (!context.auth)
        throw new functions.https.HttpsError('unauthenticated', 'Unauthorized Access');
}
exports.verifyAuthentication = verifyAuthentication;
// Verify if the user making the call has a valid instanceId token
function verifyInstanceIdToken(context) {
    if (!context.instanceIdToken) {
        throw new functions.https.HttpsError('invalid-argument', 'No Instance Id specified');
    }
}
exports.verifyInstanceIdToken = verifyInstanceIdToken;
//# sourceMappingURL=shared.js.map