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
/* This file contains implementation of functions related to instanceId,
 * which are used to send push notifications to client devices.
 */
/* Register a device instanceId to an user. This is called when the user sign-in in a device
 */
exports.instanceId_register = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    shared_1.verifyAuthentication(context);
    shared_1.verifyInstanceIdToken(context);
    try {
        yield shared_1.instanceIdManager.registerInstanceId(context.auth.uid, context.instanceIdToken);
        return {};
    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
}));
/* Unregister a device instanceId to an user. This is called when the user sign-out in a device
 */
exports.instanceId_unregister = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    shared_1.verifyAuthentication(context);
    shared_1.verifyInstanceIdToken(context);
    try {
        yield shared_1.instanceIdManager.unregisterInstanceId(context.auth.uid, context.instanceIdToken);
        return {};
    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
}));
//# sourceMappingURL=instance_id.js.map