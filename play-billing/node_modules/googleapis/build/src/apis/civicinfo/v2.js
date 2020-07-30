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
exports.civicinfo_v2 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var civicinfo_v2;
(function (civicinfo_v2) {
    /**
     * Google Civic Information API
     *
     * Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.
     *
     * @example
     * const {google} = require('googleapis');
     * const civicinfo = google.civicinfo('v2');
     *
     * @namespace civicinfo
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Civicinfo
     */
    class Civicinfo {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.divisions = new Resource$Divisions(this.context);
            this.elections = new Resource$Elections(this.context);
            this.representatives = new Resource$Representatives(this.context);
        }
    }
    civicinfo_v2.Civicinfo = Civicinfo;
    class Resource$Divisions {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
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
            const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/divisions').replace(/([^:]\/)\/+/g, '$1'),
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
    }
    civicinfo_v2.Resource$Divisions = Resource$Divisions;
    class Resource$Elections {
        constructor(context) {
            this.context = context;
        }
        electionQuery(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/elections').replace(/([^:]\/)\/+/g, '$1'),
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
        voterInfoQuery(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/voterinfo').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['address'],
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
    civicinfo_v2.Resource$Elections = Resource$Elections;
    class Resource$Representatives {
        constructor(context) {
            this.context = context;
        }
        representativeInfoByAddress(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/representatives').replace(/([^:]\/)\/+/g, '$1'),
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
        representativeInfoByDivision(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/civicinfo/v2/representatives/{ocdId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['ocdId'],
                pathParams: ['ocdId'],
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
    civicinfo_v2.Resource$Representatives = Resource$Representatives;
})(civicinfo_v2 = exports.civicinfo_v2 || (exports.civicinfo_v2 = {}));
//# sourceMappingURL=v2.js.map