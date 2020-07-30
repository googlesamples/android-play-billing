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
exports.youtubereporting_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var youtubereporting_v1;
(function (youtubereporting_v1) {
    /**
     * YouTube Reporting API
     *
     * Schedules reporting jobs containing your YouTube Analytics data and downloads the resulting bulk data reports in the form of CSV files.
     *
     * @example
     * const {google} = require('googleapis');
     * const youtubereporting = google.youtubereporting('v1');
     *
     * @namespace youtubereporting
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Youtubereporting
     */
    class Youtubereporting {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.jobs = new Resource$Jobs(this.context);
            this.media = new Resource$Media(this.context);
            this.reportTypes = new Resource$Reporttypes(this.context);
        }
    }
    youtubereporting_v1.Youtubereporting = Youtubereporting;
    class Resource$Jobs {
        constructor(context) {
            this.context = context;
            this.reports = new Resource$Jobs$Reports(this.context);
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        delete(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['jobId'],
                pathParams: ['jobId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['jobId'],
                pathParams: ['jobId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
    youtubereporting_v1.Resource$Jobs = Resource$Jobs;
    class Resource$Jobs$Reports {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs/{jobId}/reports/{reportId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['jobId', 'reportId'],
                pathParams: ['jobId', 'reportId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/jobs/{jobId}/reports').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['jobId'],
                pathParams: ['jobId'],
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
    youtubereporting_v1.Resource$Jobs$Reports = Resource$Jobs$Reports;
    class Resource$Media {
        constructor(context) {
            this.context = context;
        }
        download(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/media/{+resourceName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
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
    youtubereporting_v1.Resource$Media = Resource$Media;
    class Resource$Reporttypes {
        constructor(context) {
            this.context = context;
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://youtubereporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/reportTypes').replace(/([^:]\/)\/+/g, '$1'),
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
    youtubereporting_v1.Resource$Reporttypes = Resource$Reporttypes;
})(youtubereporting_v1 = exports.youtubereporting_v1 || (exports.youtubereporting_v1 = {}));
//# sourceMappingURL=v1.js.map