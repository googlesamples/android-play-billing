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
firebase.initializeApp();
const content_1 = require("./controller/functions/content");
const subscription_1 = require("./controller/functions/subscription");
const instance_id_1 = require("./controller/functions/instance_id");
/*
 * This file is the main entrace for Cloud Functions for Firebase.
 * It exposes functions that will be deployed to the backend
 */
// This is a trick to improve performance when there are many functions,
// by only exporting the function that is needed by the particular instance.
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'content_basic') {
    exports.content_basic = content_1.content_basic;
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'content_premium') {
    exports.content_premium = content_1.content_premium;
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'subscription_register') {
    exports.subscription_register = subscription_1.subscription_register;
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'subscription_transfer') {
    exports.subscription_transfer = subscription_1.subscription_transfer;
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'subscription_status') {
    exports.subscription_status = subscription_1.subscription_status;
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'realtime_notification_listener') {
    exports.realtime_notification_listener = subscription_1.realtime_notification_listener;
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'instanceId_register') {
    exports.instanceId_register = instance_id_1.instanceId_register;
}
if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'instanceId_unregister') {
    exports.instanceId_unregister = instance_id_1.instanceId_unregister;
}
//# sourceMappingURL=index.js.map