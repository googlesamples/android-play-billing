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
exports.poly_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var poly_v1;
(function (poly_v1) {
    /**
     * Poly API
     *
     * The Poly API provides read access to assets hosted on &lt;a href=&quot;https://poly.google.com&quot;&gt;poly.google.com&lt;/a&gt; to all, and upload access to &lt;a href=&quot;https://poly.google.com&quot;&gt;poly.google.com&lt;/a&gt; for whitelisted accounts.
     *
     * @example
     * const {google} = require('googleapis');
     * const poly = google.poly('v1');
     *
     * @namespace poly
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Poly
     */
    class Poly {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.assets = new Resource$Assets(this.context);
            this.users = new Resource$Users(this.context);
        }
    }
    poly_v1.Poly = Poly;
    class Resource$Assets {
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
            const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
            const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/assets').replace(/([^:]\/)\/+/g, '$1'),
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
    poly_v1.Resource$Assets = Resource$Assets;
    class Resource$Users {
        constructor(context) {
            this.context = context;
            this.assets = new Resource$Users$Assets(this.context);
            this.likedassets = new Resource$Users$Likedassets(this.context);
        }
    }
    poly_v1.Resource$Users = Resource$Users;
    class Resource$Users$Assets {
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
            const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}/assets').replace(/([^:]\/)\/+/g, '$1'),
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
    poly_v1.Resource$Users$Assets = Resource$Users$Assets;
    class Resource$Users$Likedassets {
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
            const rootUrl = options.rootUrl || 'https://poly.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}/likedassets').replace(/([^:]\/)\/+/g, '$1'),
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
    poly_v1.Resource$Users$Likedassets = Resource$Users$Likedassets;
})(poly_v1 = exports.poly_v1 || (exports.poly_v1 = {}));
//# sourceMappingURL=v1.js.map