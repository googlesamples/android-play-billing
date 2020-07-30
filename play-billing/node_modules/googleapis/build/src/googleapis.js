"use strict";
// Copyright 2012 Google LLC
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
exports.GoogleApis = exports.AuthPlus = void 0;
const apis = require("./apis");
const googleapis_common_1 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_1.AuthPlus; } });
class GoogleApis extends apis.GeneratedAPIs {
    /**
     * GoogleApis constructor.
     *
     * @example
     * const GoogleApis = require('googleapis').GoogleApis;
     * const google = new GoogleApis();
     *
     * @class GoogleApis
     * @param {Object} [options] Configuration options.
     */
    constructor(options) {
        super();
        this._discovery = new googleapis_common_1.Discovery({ debug: false, includePrivate: false });
        this.auth = new googleapis_common_1.AuthPlus();
        this._options = {};
        this.options(options);
    }
    /**
     * Obtain a Map of supported APIs, along with included API versions.
     */
    getSupportedAPIs() {
        const apiMap = {};
        Object.keys(apis.APIS).forEach(a => {
            apiMap[a] = Object.keys(apis.APIS[a]);
        });
        return apiMap;
    }
    /**
     * Set options.
     *
     * @param  {Object} [options] Configuration options.
     */
    options(options) {
        this._options = options || {};
    }
    /**
     * Add APIs endpoints to googleapis object
     * E.g. googleapis.drive and googleapis.datastore
     *
     * @name GoogleApis#addAPIs
     * @method
     * @param {Object} apis Apis to be added to this GoogleApis instance.
     * @private
     */
    addAPIs(apisToAdd) {
        for (const apiName in apisToAdd) {
            // eslint-disable-next-line no-prototype-builtins
            if (apisToAdd.hasOwnProperty(apiName)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this[apiName] = apisToAdd[apiName].bind(this);
            }
        }
    }
    discover(url, callback) {
        if (callback) {
            this.discoverAsync(url)
                .then(() => callback())
                .catch(callback);
        }
        else {
            return this.discoverAsync(url);
        }
    }
    async discoverAsync(url) {
        const allApis = await this._discovery.discoverAllAPIs(url);
        this.addAPIs(allApis);
    }
    /**
     * Dynamically generate an Endpoint object from a discovery doc.
     *
     * @param path Url or file path to discover doc for a single API.
     * @param Options to configure the Endpoint object generated from the
     * discovery doc.
     * @returns A promise that resolves with the configured endpoint.
     */
    async discoverAPI(apiPath, options = {}) {
        const endpointCreator = await this._discovery.discoverAPI(apiPath);
        const ep = endpointCreator(options, this);
        ep.google = this; // for drive.google.transporter
        return Object.freeze(ep);
    }
}
exports.GoogleApis = GoogleApis;
//# sourceMappingURL=googleapis.js.map