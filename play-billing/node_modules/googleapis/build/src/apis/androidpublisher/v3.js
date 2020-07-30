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
exports.androidpublisher_v3 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var androidpublisher_v3;
(function (androidpublisher_v3) {
    /**
     * Google Play Android Developer API
     *
     * Lets Android application developers access their Google Play accounts.
     *
     * @example
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v3');
     *
     * @namespace androidpublisher
     * @type {Function}
     * @version v3
     * @variation v3
     * @param {object=} options Options for Androidpublisher
     */
    class Androidpublisher {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.edits = new Resource$Edits(this.context);
            this.inappproducts = new Resource$Inappproducts(this.context);
            this.internalappsharingartifacts = new Resource$Internalappsharingartifacts(this.context);
            this.orders = new Resource$Orders(this.context);
            this.purchases = new Resource$Purchases(this.context);
            this.reviews = new Resource$Reviews(this.context);
            this.systemapks = new Resource$Systemapks(this.context);
        }
    }
    androidpublisher_v3.Androidpublisher = Androidpublisher;
    class Resource$Edits {
        constructor(context) {
            this.context = context;
            this.apks = new Resource$Edits$Apks(this.context);
            this.bundles = new Resource$Edits$Bundles(this.context);
            this.deobfuscationfiles = new Resource$Edits$Deobfuscationfiles(this.context);
            this.details = new Resource$Edits$Details(this.context);
            this.expansionfiles = new Resource$Edits$Expansionfiles(this.context);
            this.images = new Resource$Edits$Images(this.context);
            this.listings = new Resource$Edits$Listings(this.context);
            this.testers = new Resource$Edits$Testers(this.context);
            this.tracks = new Resource$Edits$Tracks(this.context);
        }
        commit(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}:commit').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        insert(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/androidpublisher/v3/applications/{packageName}/edits').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        validate(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}:validate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
    androidpublisher_v3.Resource$Edits = Resource$Edits;
    class Resource$Edits$Apks {
        constructor(context) {
            this.context = context;
        }
        addexternallyhosted(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        upload(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                mediaUrl: (rootUrl +
                    '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
    androidpublisher_v3.Resource$Edits$Apks = Resource$Edits$Apks;
    class Resource$Edits$Bundles {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        upload(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                mediaUrl: (rootUrl +
                    '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
    androidpublisher_v3.Resource$Edits$Bundles = Resource$Edits$Bundles;
    class Resource$Edits$Deobfuscationfiles {
        constructor(context) {
            this.context = context;
        }
        upload(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                mediaUrl: (rootUrl +
                    '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: [
                    'packageName',
                    'editId',
                    'apkVersionCode',
                    'deobfuscationFileType',
                ],
                pathParams: [
                    'apkVersionCode',
                    'deobfuscationFileType',
                    'editId',
                    'packageName',
                ],
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
    androidpublisher_v3.Resource$Edits$Deobfuscationfiles = Resource$Edits$Deobfuscationfiles;
    class Resource$Edits$Details {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
    androidpublisher_v3.Resource$Edits$Details = Resource$Edits$Details;
    class Resource$Edits$Expansionfiles {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: [
                    'packageName',
                    'editId',
                    'apkVersionCode',
                    'expansionFileType',
                ],
                pathParams: [
                    'apkVersionCode',
                    'editId',
                    'expansionFileType',
                    'packageName',
                ],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: [
                    'packageName',
                    'editId',
                    'apkVersionCode',
                    'expansionFileType',
                ],
                pathParams: [
                    'apkVersionCode',
                    'editId',
                    'expansionFileType',
                    'packageName',
                ],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: [
                    'packageName',
                    'editId',
                    'apkVersionCode',
                    'expansionFileType',
                ],
                pathParams: [
                    'apkVersionCode',
                    'editId',
                    'expansionFileType',
                    'packageName',
                ],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        upload(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                mediaUrl: (rootUrl +
                    '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: [
                    'packageName',
                    'editId',
                    'apkVersionCode',
                    'expansionFileType',
                ],
                pathParams: [
                    'apkVersionCode',
                    'editId',
                    'expansionFileType',
                    'packageName',
                ],
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
    androidpublisher_v3.Resource$Edits$Expansionfiles = Resource$Edits$Expansionfiles;
    class Resource$Edits$Images {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: [
                    'packageName',
                    'editId',
                    'language',
                    'imageType',
                    'imageId',
                ],
                pathParams: [
                    'editId',
                    'imageId',
                    'imageType',
                    'language',
                    'packageName',
                ],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        deleteall(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                pathParams: ['editId', 'imageType', 'language', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                pathParams: ['editId', 'imageType', 'language', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        upload(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                mediaUrl: (rootUrl +
                    '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                pathParams: ['editId', 'imageType', 'language', 'packageName'],
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
    androidpublisher_v3.Resource$Edits$Images = Resource$Edits$Images;
    class Resource$Edits$Listings {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'language'],
                pathParams: ['editId', 'language', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        deleteall(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'language'],
                pathParams: ['editId', 'language', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'language'],
                pathParams: ['editId', 'language', 'packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'language'],
                pathParams: ['editId', 'language', 'packageName'],
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
    androidpublisher_v3.Resource$Edits$Listings = Resource$Edits$Listings;
    class Resource$Edits$Testers {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'track'],
                pathParams: ['editId', 'packageName', 'track'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'track'],
                pathParams: ['editId', 'packageName', 'track'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'track'],
                pathParams: ['editId', 'packageName', 'track'],
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
    androidpublisher_v3.Resource$Edits$Testers = Resource$Edits$Testers;
    class Resource$Edits$Tracks {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'track'],
                pathParams: ['editId', 'packageName', 'track'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'track'],
                pathParams: ['editId', 'packageName', 'track'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['packageName', 'editId', 'track'],
                pathParams: ['editId', 'packageName', 'track'],
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
    androidpublisher_v3.Resource$Edits$Tracks = Resource$Edits$Tracks;
    class Resource$Inappproducts {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        insert(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/inappproducts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/inappproducts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
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
    androidpublisher_v3.Resource$Inappproducts = Resource$Inappproducts;
    class Resource$Internalappsharingartifacts {
        constructor(context) {
            this.context = context;
        }
        uploadapk(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                mediaUrl: (rootUrl +
                    '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        uploadbundle(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                mediaUrl: (rootUrl +
                    '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
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
    androidpublisher_v3.Resource$Internalappsharingartifacts = Resource$Internalappsharingartifacts;
    class Resource$Orders {
        constructor(context) {
            this.context = context;
        }
        refund(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'orderId'],
                pathParams: ['orderId', 'packageName'],
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
    androidpublisher_v3.Resource$Orders = Resource$Orders;
    class Resource$Purchases {
        constructor(context) {
            this.context = context;
            this.products = new Resource$Purchases$Products(this.context);
            this.subscriptions = new Resource$Purchases$Subscriptions(this.context);
            this.voidedpurchases = new Resource$Purchases$Voidedpurchases(this.context);
        }
    }
    androidpublisher_v3.Resource$Purchases = Resource$Purchases;
    class Resource$Purchases$Products {
        constructor(context) {
            this.context = context;
        }
        acknowledge(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'productId', 'token'],
                pathParams: ['packageName', 'productId', 'token'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'productId', 'token'],
                pathParams: ['packageName', 'productId', 'token'],
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
    androidpublisher_v3.Resource$Purchases$Products = Resource$Purchases$Products;
    class Resource$Purchases$Subscriptions {
        constructor(context) {
            this.context = context;
        }
        acknowledge(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'subscriptionId', 'token'],
                pathParams: ['packageName', 'subscriptionId', 'token'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'subscriptionId', 'token'],
                pathParams: ['packageName', 'subscriptionId', 'token'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        defer(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'subscriptionId', 'token'],
                pathParams: ['packageName', 'subscriptionId', 'token'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'subscriptionId', 'token'],
                pathParams: ['packageName', 'subscriptionId', 'token'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        refund(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'subscriptionId', 'token'],
                pathParams: ['packageName', 'subscriptionId', 'token'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        revoke(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'subscriptionId', 'token'],
                pathParams: ['packageName', 'subscriptionId', 'token'],
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
    androidpublisher_v3.Resource$Purchases$Subscriptions = Resource$Purchases$Subscriptions;
    class Resource$Purchases$Voidedpurchases {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
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
    androidpublisher_v3.Resource$Purchases$Voidedpurchases = Resource$Purchases$Voidedpurchases;
    class Resource$Reviews {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'reviewId'],
                pathParams: ['packageName', 'reviewId'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/reviews').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        reply(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'reviewId'],
                pathParams: ['packageName', 'reviewId'],
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
    androidpublisher_v3.Resource$Reviews = Resource$Reviews;
    class Resource$Systemapks {
        constructor(context) {
            this.context = context;
            this.variants = new Resource$Systemapks$Variants(this.context);
        }
    }
    androidpublisher_v3.Resource$Systemapks = Resource$Systemapks;
    class Resource$Systemapks$Variants {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['packageName', 'versionCode'],
                pathParams: ['packageName', 'versionCode'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        download(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'versionCode', 'variantId'],
                pathParams: ['packageName', 'variantId', 'versionCode'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'versionCode', 'variantId'],
                pathParams: ['packageName', 'variantId', 'versionCode'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['packageName', 'versionCode'],
                pathParams: ['packageName', 'versionCode'],
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
    androidpublisher_v3.Resource$Systemapks$Variants = Resource$Systemapks$Variants;
})(androidpublisher_v3 = exports.androidpublisher_v3 || (exports.androidpublisher_v3 = {}));
//# sourceMappingURL=v3.js.map