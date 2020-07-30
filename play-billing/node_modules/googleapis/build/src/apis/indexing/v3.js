"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexing_v3 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var indexing_v3;
(function (indexing_v3) {
    /**
     * Indexing API
     *
     * Notifies Google when your web pages change.
     *
     * @example
     * const {google} = require('googleapis');
     * const indexing = google.indexing('v3');
     *
     * @namespace indexing
     * @type {Function}
     * @version v3
     * @variation v3
     * @param {object=} options Options for Indexing
     */
    class Indexing {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.urlNotifications = new Resource$Urlnotifications(this.context);
        }
    }
    indexing_v3.Indexing = Indexing;
    class Resource$Urlnotifications {
        constructor(context) {
            this.context = context;
        }
        getMetadata(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://indexing.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v3/urlNotifications/metadata').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        publish(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://indexing.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v3/urlNotifications:publish').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    indexing_v3.Resource$Urlnotifications = Resource$Urlnotifications;
})(indexing_v3 = exports.indexing_v3 || (exports.indexing_v3 = {}));
//# sourceMappingURL=v3.js.map