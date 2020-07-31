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
// As defined in https://developer.android.com/google/play/billing/realtime_developer_notifications.html#notification_types
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["SUBSCRIPTION_PURCHASED"] = 4] = "SUBSCRIPTION_PURCHASED";
    NotificationType[NotificationType["SUBSCRIPTION_RENEWED"] = 2] = "SUBSCRIPTION_RENEWED";
    NotificationType[NotificationType["SUBSCRIPTION_RECOVERED"] = 1] = "SUBSCRIPTION_RECOVERED";
    NotificationType[NotificationType["SUBSCRIPTION_CANCELED"] = 3] = "SUBSCRIPTION_CANCELED";
    NotificationType[NotificationType["SUBSCRIPTION_ON_HOLD"] = 5] = "SUBSCRIPTION_ON_HOLD";
    NotificationType[NotificationType["SUBSCRIPTION_IN_GRACE_PERIOD"] = 6] = "SUBSCRIPTION_IN_GRACE_PERIOD";
    NotificationType[NotificationType["SUBSCRIPTION_RESTARTED"] = 7] = "SUBSCRIPTION_RESTARTED";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
//# sourceMappingURL=notifications.js.map