/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace licensing_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | GoogleAuth;
        /**
         * Data format for the response.
         */
        alt?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Deprecated. Please use quotaUser instead.
         */
        userIp?: string;
    }
    /**
     * Licensing API
     *
     * Licensing API to view and manage licenses for your domain
     *
     * @example
     * const {google} = require('googleapis');
     * const licensing = google.licensing('v1');
     *
     * @namespace licensing
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Licensing
     */
    export class Licensing {
        context: APIRequestContext;
        licenseAssignments: Resource$Licenseassignments;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Representation of a license assignment.
     */
    export interface Schema$LicenseAssignment {
        /**
         * ETag of the resource.
         */
        etags?: string | null;
        /**
         * Identifies the resource as a LicenseAssignment.
         */
        kind?: string | null;
        /**
         * A product&#39;s unique identifier. For more information about products in this version of the API, see Product and SKU IDs.
         */
        productId?: string | null;
        /**
         * Display Name of the product.
         */
        productName?: string | null;
        /**
         * Link to this page.
         */
        selfLink?: string | null;
        /**
         * A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string | null;
        /**
         * Display Name of the sku of the product.
         */
        skuName?: string | null;
        /**
         * The user&#39;s current primary email address. If the user&#39;s email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user&#39;s email address changes. If the userId is suspended, the license status changes.
         */
        userId?: string | null;
    }
    /**
     * Representation of a license assignment.
     */
    export interface Schema$LicenseAssignmentInsert {
        /**
         * Email id of the user
         */
        userId?: string | null;
    }
    /**
     * LicesnseAssignment List for a given product/sku for a customer.
     */
    export interface Schema$LicenseAssignmentList {
        /**
         * ETag of the resource.
         */
        etag?: string | null;
        /**
         * The LicenseAssignments in this page of results.
         */
        items?: Schema$LicenseAssignment[];
        /**
         * Identifies the resource as a collection of LicenseAssignments.
         */
        kind?: string | null;
        /**
         * The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The maxResults query string is related to the nextPageToken since maxResults determines how many entries are returned on each next page.
         */
        nextPageToken?: string | null;
    }
    export class Resource$Licenseassignments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * licensing.licenseAssignments.delete
         * @desc Revoke a license.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.delete({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
         *     // Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
         *     // If the userId is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias licensing.licenseAssignments.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params: Params$Resource$Licenseassignments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Licenseassignments$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Licenseassignments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Licenseassignments$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Licenseassignments$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * licensing.licenseAssignments.get
         * @desc Get a specific user's license by product SKU.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.get({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
         *     // Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
         *     // If the userId is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias licensing.licenseAssignments.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Licenseassignments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Licenseassignments$Get, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        get(params: Params$Resource$Licenseassignments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Licenseassignments$Get, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        get(params: Params$Resource$Licenseassignments$Get, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        get(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        /**
         * licensing.licenseAssignments.insert
         * @desc Assign a license.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.insert({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "userId": "my_userId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias licensing.licenseAssignments.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         * @param {().LicenseAssignmentInsert} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params: Params$Resource$Licenseassignments$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Licenseassignments$Insert, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        insert(params: Params$Resource$Licenseassignments$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Licenseassignments$Insert, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        insert(params: Params$Resource$Licenseassignments$Insert, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        insert(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        /**
         * licensing.licenseAssignments.listForProduct
         * @desc List all users assigned licenses for a specific product SKU.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.listForProduct({
         *     // Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field.
         *     // If the customer is suspended, the server returns an error.
         *     customerId: 'placeholder-value',
         *     // The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         *     maxResults: 'placeholder-value',
         *     // Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         *     pageToken: 'placeholder-value',
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias licensing.licenseAssignments.listForProduct
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
         * @param {integer=} params.maxResults The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         * @param {string=} params.pageToken Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listForProduct(params?: Params$Resource$Licenseassignments$Listforproduct, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignmentList>;
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignmentList>, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProduct(callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        /**
         * licensing.licenseAssignments.listForProductAndSku
         * @desc List all users assigned licenses for a specific product SKU.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.listForProductAndSku({
         *     // Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field.
         *     // If the customer is suspended, the server returns an error.
         *     customerId: 'placeholder-value',
         *     // The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         *     maxResults: 'placeholder-value',
         *     // Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         *     pageToken: 'placeholder-value',
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias licensing.licenseAssignments.listForProductAndSku
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
         * @param {integer=} params.maxResults The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         * @param {string=} params.pageToken Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listForProductAndSku(params?: Params$Resource$Licenseassignments$Listforproductandsku, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignmentList>;
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignmentList>, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProductAndSku(callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        /**
         * licensing.licenseAssignments.patch
         * @desc Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.patch({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
         *     // Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
         *     // If the userId is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "etags": "my_etags",
         *       //   "kind": "my_kind",
         *       //   "productId": "my_productId",
         *       //   "productName": "my_productName",
         *       //   "selfLink": "my_selfLink",
         *       //   "skuId": "my_skuId",
         *       //   "skuName": "my_skuName",
         *       //   "userId": "my_userId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias licensing.licenseAssignments.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         * @param {().LicenseAssignment} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params: Params$Resource$Licenseassignments$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Licenseassignments$Patch, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        patch(params: Params$Resource$Licenseassignments$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Licenseassignments$Patch, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        patch(params: Params$Resource$Licenseassignments$Patch, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        patch(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        /**
         * licensing.licenseAssignments.update
         * @desc Reassign a user's product SKU with a different SKU in the same product.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.update({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests.
         *     // Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes.
         *     // If the userId is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "etags": "my_etags",
         *       //   "kind": "my_kind",
         *       //   "productId": "my_productId",
         *       //   "productName": "my_productName",
         *       //   "selfLink": "my_selfLink",
         *       //   "skuId": "my_skuId",
         *       //   "skuName": "my_skuName",
         *       //   "userId": "my_userId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias licensing.licenseAssignments.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.productId A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         * @param {string} params.skuId A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         * @param {string} params.userId The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         * @param {().LicenseAssignment} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params: Params$Resource$Licenseassignments$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Licenseassignments$Update, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        update(params: Params$Resource$Licenseassignments$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Licenseassignments$Update, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        update(params: Params$Resource$Licenseassignments$Update, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        update(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    }
    export interface Params$Resource$Licenseassignments$Delete extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         */
        userId?: string;
    }
    export interface Params$Resource$Licenseassignments$Get extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         */
        userId?: string;
    }
    export interface Params$Resource$Licenseassignments$Insert extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LicenseAssignmentInsert;
    }
    export interface Params$Resource$Licenseassignments$Listforproduct extends StandardParameters {
        /**
         * Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
         */
        customerId?: string;
        /**
         * The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         */
        maxResults?: number;
        /**
         * Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         */
        pageToken?: string;
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
    }
    export interface Params$Resource$Licenseassignments$Listforproductandsku extends StandardParameters {
        /**
         * Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
         */
        customerId?: string;
        /**
         * The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         */
        maxResults?: number;
        /**
         * Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         */
        pageToken?: string;
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
    }
    export interface Params$Resource$Licenseassignments$Patch extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         */
        userId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LicenseAssignment;
    }
    export interface Params$Resource$Licenseassignments$Update extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a userId is subject to change, do not use a userId value as a key for persistent data. This key could break if the current user's email address changes. If the userId is suspended, the license status changes.
         */
        userId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LicenseAssignment;
    }
    export {};
}
