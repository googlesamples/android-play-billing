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
const firebase = require("firebase-admin");
const functions = require("firebase-functions");
const play_billing_1 = require("../../play-billing");
const shared_1 = require("../shared");
const SubscriptionStatus_1 = require("../../model/SubscriptionStatus");
/* This file contains implementation of functions related to linking subscription purchase with user account
 */
/* Register a subscription purchased in Android app via Google Play Billing to an user.
 * It only works with brand-new subscription purchases, which have not been registered to other users before
 */
exports.subscription_register = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    shared_1.verifyAuthentication(context);
    const sku = data.sku;
    const token = data.token;
    try {
        yield shared_1.playBilling.purchases().registerToUserAccount(shared_1.PACKAGE_NAME, sku, token, play_billing_1.SkuType.SUBS, context.auth.uid);
    }
    catch (err) {
        console.error(err.message);
        switch (err.name) {
            case play_billing_1.PurchaseUpdateError.CONFLICT: {
                throw new functions.https.HttpsError('already-exists', 'Purchase token already registered to another user');
            }
            case play_billing_1.PurchaseUpdateError.INVALID_TOKEN: {
                throw new functions.https.HttpsError('not-found', 'Invalid token');
            }
            default: {
                throw new functions.https.HttpsError('internal', 'Internal server error');
            }
        }
    }
    return getSubscriptionsResponseObject(context.auth.uid);
}));
/* Register a subscription purchased in Android app via Google Play Billing to an user.
 * It only works with all active subscriptions, no matter if it's registered or not.
 */
exports.subscription_transfer = functions.https.onCall((data, context) => __awaiter(this, void 0, void 0, function* () {
    shared_1.verifyAuthentication(context);
    const sku = data.sku;
    const token = data.token;
    try {
        yield shared_1.playBilling.purchases().transferToUserAccount(shared_1.PACKAGE_NAME, sku, token, play_billing_1.SkuType.SUBS, context.auth.uid);
    }
    catch (err) {
        console.error(err.message);
        switch (err.name) {
            case play_billing_1.PurchaseUpdateError.INVALID_TOKEN: {
                throw new functions.https.HttpsError('not-found', 'Invalid token');
            }
            default: {
                throw new functions.https.HttpsError('internal', 'Internal server error');
            }
        }
    }
    return getSubscriptionsResponseObject(context.auth.uid);
}));
/* Returns a list of active subscriptions and those under Account Hold.
 * Subscriptions in Account Hold can still be recovered,
 * so it's useful that client app know about them and show an appropriate message to the user.
 */
exports.subscription_status = functions.https.onCall((data, context) => {
    shared_1.verifyAuthentication(context);
    return getSubscriptionsResponseObject(context.auth.uid)
        .catch(err => {
        console.error(err.message);
        throw new functions.https.HttpsError('internal', 'Internal server error');
    });
});
/* PubSub listener which handle Realtime Developer Notifications received from Google Play.
 * See https://developer.android.com/google/play/billing/realtime_developer_notifications.html
 */
exports.realtime_notification_listener = functions.pubsub.topic('play-subs').onPublish((data, context) => __awaiter(this, void 0, void 0, function* () {
    try {
        // Process the Realtime Developer notification
        const developerNotification = data.json;
        console.log('Received realtime notification: ', developerNotification);
        const purchase = yield shared_1.playBilling.purchases().processDeveloperNotification(shared_1.PACKAGE_NAME, developerNotification);
        // Send the updated SubscriptionStatus to the client app instances of the user who own the purchase
        if (purchase && purchase.userId) {
            yield sendSubscriptionStatusUpdateToClient(purchase.userId, developerNotification.subscriptionNotification.notificationType);
        }
    }
    catch (error) {
        console.error(error);
    }
}));
// Util method to get a list of subscriptions belong to an user, in the format that can be returned to client app
// It also handles library internal error and convert it to an HTTP error to return to client.
function getSubscriptionsResponseObject(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch purchase list from purchase records
            const purchaseList = yield shared_1.playBilling.users().queryCurrentSubscriptions(userId);
            // Convert Purchase objects to SubscriptionStatus objects
            const subscriptionStatusList = purchaseList.map(subscriptionPurchase => new SubscriptionStatus_1.SubscriptionStatus(subscriptionPurchase));
            // Return them in a format that is expected by client app
            return { subscriptions: subscriptionStatusList };
        }
        catch (err) {
            console.error(err.message);
            throw new functions.https.HttpsError('internal', 'Internal server error');
        }
    });
}
// Util method to send updated list of SubscriptionPurchase to client app via FCM
function sendSubscriptionStatusUpdateToClient(userId, notificationType) {
    return __awaiter(this, void 0, void 0, function* () {
        // Fetch updated subscription list of the user
        const subscriptionResponseObject = yield getSubscriptionsResponseObject(userId);
        // Get token list of devices that the user owns
        const tokens = yield shared_1.instanceIdManager.getInstanceIds(userId);
        // Compose the FCM data message to send to the devices
        const message = {
            data: {
                currentStatus: JSON.stringify(subscriptionResponseObject),
                notificationType: notificationType.toString()
            }
        };
        // Send message to devices using FCM
        const messageResponse = yield firebase.messaging().sendToDevice(tokens, message);
        console.log('Sent subscription update to user devices. UserId =', userId, ' messageResponse = ', messageResponse);
        const tokensToRemove = [];
        messageResponse.results.forEach((result, index) => {
            const error = result.error;
            if (error) {
                // There's some issue sending message to some tokens
                console.error('Failure sending notification to', tokens[index], error);
                // Cleanup the tokens who are not registered anymore.
                if (error.code === 'messaging/invalid-registration-token' || error.code === 'messaging/registration-token-not-registered') {
                    tokensToRemove.push(shared_1.instanceIdManager.unregisterInstanceId(userId, tokens[index]));
                }
            }
        });
        yield Promise.all(tokensToRemove);
    });
}
//# sourceMappingURL=subscription.js.map