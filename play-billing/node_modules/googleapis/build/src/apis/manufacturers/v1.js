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
exports.manufacturers_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var manufacturers_v1;
(function (manufacturers_v1) {
    /**
     * Manufacturer Center API
     *
     * Public API for managing Manufacturer Center related data.
     *
     * @example
     * const {google} = require('googleapis');
     * const manufacturers = google.manufacturers('v1');
     *
     * @namespace manufacturers
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Manufacturers
     */
    class Manufacturers {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.accounts = new Resource$Accounts(this.context);
        }
    }
    manufacturers_v1.Manufacturers = Manufacturers;
    class Resource$Accounts {
        constructor(context) {
            this.context = context;
            this.products = new Resource$Accounts$Products(this.context);
        }
    }
    manufacturers_v1.Resource$Accounts = Resource$Accounts;
    class Resource$Accounts$Products {
        constructor(context) {
            this.context = context;
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/products/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['parent', 'name'],
                pathParams: ['name', 'parent'],
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
            const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/products/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['parent', 'name'],
                pathParams: ['name', 'parent'],
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
            const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/products').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['parent'],
                pathParams: ['parent'],
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
            const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+parent}/products/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['parent', 'name'],
                pathParams: ['name', 'parent'],
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
    manufacturers_v1.Resource$Accounts$Products = Resource$Accounts$Products;
})(manufacturers_v1 = exports.manufacturers_v1 || (exports.manufacturers_v1 = {}));
//# sourceMappingURL=v1.js.map