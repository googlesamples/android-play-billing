"use strict";
// Copyright 2012 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClient = void 0;
const events_1 = require("events");
const transporters_1 = require("../transporters");
class AuthClient extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.transporter = new transporters_1.DefaultTransporter();
        this.credentials = {};
    }
    /**
     * Sets the auth credentials.
     */
    setCredentials(credentials) {
        this.credentials = credentials;
    }
    /**
     * Append additional headers, e.g., x-goog-user-project, shared across the
     * classes inheriting AuthClient. This method should be used by any method
     * that overrides getRequestMetadataAsync(), which is a shared helper for
     * setting request information in both gRPC and HTTP API calls.
     *
     * @param headers objedcdt to append additional headers to.
     */
    addSharedMetadataHeaders(headers) {
        // quota_project_id, stored in application_default_credentials.json, is set in
        // the x-goog-user-project header, to indicate an alternate account for
        // billing and quota:
        if (!headers['x-goog-user-project'] && // don't override a value the user sets.
            this.quotaProjectId) {
            headers['x-goog-user-project'] = this.quotaProjectId;
        }
        return headers;
    }
}
exports.AuthClient = AuthClient;
//# sourceMappingURL=authclient.js.map