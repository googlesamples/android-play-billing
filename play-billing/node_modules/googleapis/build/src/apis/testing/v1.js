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
exports.testing_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var testing_v1;
(function (testing_v1) {
    /**
     * Cloud Testing API
     *
     * Allows developers to run automated tests for their mobile applications on Google infrastructure.
     *
     * @example
     * const {google} = require('googleapis');
     * const testing = google.testing('v1');
     *
     * @namespace testing
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Testing
     */
    class Testing {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.applicationDetailService = new Resource$Applicationdetailservice(this.context);
            this.projects = new Resource$Projects(this.context);
            this.testEnvironmentCatalog = new Resource$Testenvironmentcatalog(this.context);
        }
    }
    testing_v1.Testing = Testing;
    class Resource$Applicationdetailservice {
        constructor(context) {
            this.context = context;
        }
        getApkDetails(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/applicationDetailService/getApkDetails').replace(/([^:]\/)\/+/g, '$1'),
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
    testing_v1.Resource$Applicationdetailservice = Resource$Applicationdetailservice;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
            this.testMatrices = new Resource$Projects$Testmatrices(this.context);
        }
    }
    testing_v1.Resource$Projects = Resource$Projects;
    class Resource$Projects$Testmatrices {
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
            const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['projectId', 'testMatrixId'],
                pathParams: ['projectId', 'testMatrixId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{projectId}/testMatrices').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
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
            const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{projectId}/testMatrices/{testMatrixId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['projectId', 'testMatrixId'],
                pathParams: ['projectId', 'testMatrixId'],
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
    testing_v1.Resource$Projects$Testmatrices = Resource$Projects$Testmatrices;
    class Resource$Testenvironmentcatalog {
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
            const rootUrl = options.rootUrl || 'https://testing.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/testEnvironmentCatalog/{environmentType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['environmentType'],
                pathParams: ['environmentType'],
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
    testing_v1.Resource$Testenvironmentcatalog = Resource$Testenvironmentcatalog;
})(testing_v1 = exports.testing_v1 || (exports.testing_v1 = {}));
//# sourceMappingURL=v1.js.map