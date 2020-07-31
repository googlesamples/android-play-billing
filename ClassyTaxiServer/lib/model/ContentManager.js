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
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const projectId = firebaseConfig.projectId;
const basicContentUrl = `https://${projectId}.firebaseapp.com/content/basic.jpg`;
const premiumContentUrl = `https://${projectId}.firebaseapp.com/content/premium.jpg`;
/* ContentManager is part of Model layer. It manages content of subscriptions plans.
 * However, it doesn't know if an user has an active subscription or not, which needs to be handle in Controller layer.
 */
class ContentManager {
    // Note: Here we serve our content via Firebase Hosting without authentication for demo purpose
    // In production environment, you should have your paid content protected behind an authentication layer,
    // so that only users who have paid for the content can get access.
    getBasicContent() {
        // License: Creative Commons CC0
        // From: https://pixabay.com/en/tree-shade-river-house-water-3321798/
        return { url: basicContentUrl };
    }
    getPremiumContent() {
        // License: Creative Commons CC0
        // From: https://cdn.pixabay.com/photo/2014/09/19/08/23/symbol-451842_960_720.png
        return { url: premiumContentUrl };
    }
}
exports.ContentManager = ContentManager;
//# sourceMappingURL=ContentManager.js.map