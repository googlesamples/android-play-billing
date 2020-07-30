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
exports.clouderrorreporting_v1beta1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var clouderrorreporting_v1beta1;
(function (clouderrorreporting_v1beta1) {
    /**
     * Error Reporting API
     *
     * Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors.
     *
     * @example
     * const {google} = require('googleapis');
     * const clouderrorreporting = google.clouderrorreporting('v1beta1');
     *
     * @namespace clouderrorreporting
     * @type {Function}
     * @version v1beta1
     * @variation v1beta1
     * @param {object=} options Options for Clouderrorreporting
     */
    class Clouderrorreporting {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.projects = new Resource$Projects(this.context);
        }
    }
    clouderrorreporting_v1beta1.Clouderrorreporting = Clouderrorreporting;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
            this.events = new Resource$Projects$Events(this.context);
            this.groups = new Resource$Projects$Groups(this.context);
            this.groupStats = new Resource$Projects$Groupstats(this.context);
        }
        deleteEvents(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouderrorreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+projectName}/events').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['projectName'],
                pathParams: ['projectName'],
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
    clouderrorreporting_v1beta1.Resource$Projects = Resource$Projects;
    class Resource$Projects$Events {
        constructor(context) {
            this.context = context;
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
            const rootUrl = options.rootUrl || 'https://clouderrorreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+projectName}/events').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['projectName'],
                pathParams: ['projectName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        report(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouderrorreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+projectName}/events:report').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['projectName'],
                pathParams: ['projectName'],
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
    clouderrorreporting_v1beta1.Resource$Projects$Events = Resource$Projects$Events;
    class Resource$Projects$Groups {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouderrorreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+groupName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['groupName'],
                pathParams: ['groupName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouderrorreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
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
    clouderrorreporting_v1beta1.Resource$Projects$Groups = Resource$Projects$Groups;
    class Resource$Projects$Groupstats {
        constructor(context) {
            this.context = context;
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
            const rootUrl = options.rootUrl || 'https://clouderrorreporting.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+projectName}/groupStats').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['projectName'],
                pathParams: ['projectName'],
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
    clouderrorreporting_v1beta1.Resource$Projects$Groupstats = Resource$Projects$Groupstats;
})(clouderrorreporting_v1beta1 = exports.clouderrorreporting_v1beta1 || (exports.clouderrorreporting_v1beta1 = {}));
//# sourceMappingURL=v1beta1.js.map