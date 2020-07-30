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
exports.servicecontrol_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var servicecontrol_v1;
(function (servicecontrol_v1) {
    /**
     * Service Control API
     *
     * Provides control plane functionality to managed services, such as logging, monitoring, and status checks.
     *
     * @example
     * const {google} = require('googleapis');
     * const servicecontrol = google.servicecontrol('v1');
     *
     * @namespace servicecontrol
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Servicecontrol
     */
    class Servicecontrol {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.services = new Resource$Services(this.context);
        }
    }
    servicecontrol_v1.Servicecontrol = Servicecontrol;
    class Resource$Services {
        constructor(context) {
            this.context = context;
        }
        allocateQuota(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:allocateQuota').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        check(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:check').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
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
            const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:report').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
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
    servicecontrol_v1.Resource$Services = Resource$Services;
})(servicecontrol_v1 = exports.servicecontrol_v1 || (exports.servicecontrol_v1 = {}));
//# sourceMappingURL=v1.js.map