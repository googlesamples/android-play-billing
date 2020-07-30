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
exports.vault_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var vault_v1;
(function (vault_v1) {
    /**
     * G Suite Vault API
     *
     * Archiving and eDiscovery for G Suite.
     *
     * @example
     * const {google} = require('googleapis');
     * const vault = google.vault('v1');
     *
     * @namespace vault
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Vault
     */
    class Vault {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.matters = new Resource$Matters(this.context);
            this.operations = new Resource$Operations(this.context);
        }
    }
    vault_v1.Vault = Vault;
    class Resource$Matters {
        constructor(context) {
            this.context = context;
            this.exports = new Resource$Matters$Exports(this.context);
            this.holds = new Resource$Matters$Holds(this.context);
            this.savedQueries = new Resource$Matters$Savedqueries(this.context);
        }
        addPermissions(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:addPermissions').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        close(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:close').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters').replace(/([^:]\/)\/+/g, '$1'),
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
        removePermissions(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:removePermissions').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        reopen(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:reopen').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        undelete(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}:undelete').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
    vault_v1.Resource$Matters = Resource$Matters;
    class Resource$Matters$Exports {
        constructor(context) {
            this.context = context;
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/exports').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/exports/{exportId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['matterId', 'exportId'],
                pathParams: ['exportId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/exports/{exportId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId', 'exportId'],
                pathParams: ['exportId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/exports').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
    vault_v1.Resource$Matters$Exports = Resource$Matters$Exports;
    class Resource$Matters$Holds {
        constructor(context) {
            this.context = context;
            this.accounts = new Resource$Matters$Holds$Accounts(this.context);
        }
        addHeldAccounts(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}:addHeldAccounts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId'],
                pathParams: ['holdId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId'],
                pathParams: ['holdId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId'],
                pathParams: ['holdId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        removeHeldAccounts(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId'],
                pathParams: ['holdId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId'],
                pathParams: ['holdId', 'matterId'],
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
    vault_v1.Resource$Matters$Holds = Resource$Matters$Holds;
    class Resource$Matters$Holds$Accounts {
        constructor(context) {
            this.context = context;
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId'],
                pathParams: ['holdId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId', 'accountId'],
                pathParams: ['accountId', 'holdId', 'matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/holds/{holdId}/accounts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId', 'holdId'],
                pathParams: ['holdId', 'matterId'],
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
    vault_v1.Resource$Matters$Holds$Accounts = Resource$Matters$Holds$Accounts;
    class Resource$Matters$Savedqueries {
        constructor(context) {
            this.context = context;
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/savedQueries').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/savedQueries/{savedQueryId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['matterId', 'savedQueryId'],
                pathParams: ['matterId', 'savedQueryId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/savedQueries/{savedQueryId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId', 'savedQueryId'],
                pathParams: ['matterId', 'savedQueryId'],
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/matters/{matterId}/savedQueries').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['matterId'],
                pathParams: ['matterId'],
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
    vault_v1.Resource$Matters$Savedqueries = Resource$Matters$Savedqueries;
    class Resource$Operations {
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
            const rootUrl = options.rootUrl || 'https://vault.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
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
    vault_v1.Resource$Operations = Resource$Operations;
})(vault_v1 = exports.vault_v1 || (exports.vault_v1 = {}));
//# sourceMappingURL=v1.js.map