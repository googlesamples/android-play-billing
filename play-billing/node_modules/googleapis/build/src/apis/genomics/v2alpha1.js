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
exports.genomics_v2alpha1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var genomics_v2alpha1;
(function (genomics_v2alpha1) {
    /**
     * Genomics API
     *
     * Uploads, processes, queries, and searches Genomics data in the cloud.
     *
     * @example
     * const {google} = require('googleapis');
     * const genomics = google.genomics('v2alpha1');
     *
     * @namespace genomics
     * @type {Function}
     * @version v2alpha1
     * @variation v2alpha1
     * @param {object=} options Options for Genomics
     */
    class Genomics {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.pipelines = new Resource$Pipelines(this.context);
            this.projects = new Resource$Projects(this.context);
            this.workers = new Resource$Workers(this.context);
        }
    }
    genomics_v2alpha1.Genomics = Genomics;
    class Resource$Pipelines {
        constructor(context) {
            this.context = context;
        }
        run(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/pipelines:run').replace(/([^:]\/)\/+/g, '$1'),
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
    genomics_v2alpha1.Resource$Pipelines = Resource$Pipelines;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
            this.operations = new Resource$Projects$Operations(this.context);
            this.workers = new Resource$Projects$Workers(this.context);
        }
    }
    genomics_v2alpha1.Resource$Projects = Resource$Projects;
    class Resource$Projects$Operations {
        constructor(context) {
            this.context = context;
        }
        cancel(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
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
    genomics_v2alpha1.Resource$Projects$Operations = Resource$Projects$Operations;
    class Resource$Projects$Workers {
        constructor(context) {
            this.context = context;
        }
        checkIn(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/{+id}:checkIn').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
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
    genomics_v2alpha1.Resource$Projects$Workers = Resource$Projects$Workers;
    class Resource$Workers {
        constructor(context) {
            this.context = context;
            this.projects = new Resource$Workers$Projects(this.context);
        }
        checkIn(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/workers/{id}:checkIn').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
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
    genomics_v2alpha1.Resource$Workers = Resource$Workers;
    class Resource$Workers$Projects {
        constructor(context) {
            this.context = context;
            this.workers = new Resource$Workers$Projects$Workers(this.context);
        }
    }
    genomics_v2alpha1.Resource$Workers$Projects = Resource$Workers$Projects;
    class Resource$Workers$Projects$Workers {
        constructor(context) {
            this.context = context;
        }
        uploadSosReport(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2alpha1/workers/{+id}:uploadSosReport').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
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
    genomics_v2alpha1.Resource$Workers$Projects$Workers = Resource$Workers$Projects$Workers;
})(genomics_v2alpha1 = exports.genomics_v2alpha1 || (exports.genomics_v2alpha1 = {}));
//# sourceMappingURL=v2alpha1.js.map