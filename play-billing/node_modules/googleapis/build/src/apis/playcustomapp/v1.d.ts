/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace playcustomapp_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
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
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Google Play Custom App Publishing API
     *
     * API to create and publish custom Android apps
     *
     * @example
     * const {google} = require('googleapis');
     * const playcustomapp = google.playcustomapp('v1');
     *
     * @namespace playcustomapp
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Playcustomapp
     */
    export class Playcustomapp {
        context: APIRequestContext;
        accounts: Resource$Accounts;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * This resource represents a custom app.
     */
    export interface Schema$CustomApp {
        /**
         * Default listing language in BCP 47 format.
         */
        languageCode?: string | null;
        /**
         * Output only. Package name of the created Android app. Only present in the API response.
         */
        packageName?: string | null;
        /**
         * Title for the Android app.
         */
        title?: string | null;
    }
    export class Resource$Accounts {
        context: APIRequestContext;
        customApps: Resource$Accounts$Customapps;
        constructor(context: APIRequestContext);
    }
    export class Resource$Accounts$Customapps {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * playcustomapp.accounts.customApps.create
         * @desc Creates a new custom app.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/playcustomapp.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const playcustomapp = google.playcustomapp('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/androidpublisher'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await playcustomapp.accounts.customApps.create({
         *     // Developer account ID.
         *     account: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "languageCode": "my_languageCode",
         *       //   "packageName": "my_packageName",
         *       //   "title": "my_title"
         *       // }
         *     },
         *     media: {
         *       mimeType: 'placeholder-value',
         *       body: 'placeholder-value',
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "languageCode": "my_languageCode",
         *   //   "packageName": "my_packageName",
         *   //   "title": "my_title"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias playcustomapp.accounts.customApps.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.account Developer account ID.
         * @param  {object} params.requestBody Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params: Params$Resource$Accounts$Customapps$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Customapps$Create, options?: MethodOptions): GaxiosPromise<Schema$CustomApp>;
        create(params: Params$Resource$Accounts$Customapps$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Customapps$Create, options: MethodOptions | BodyResponseCallback<Schema$CustomApp>, callback: BodyResponseCallback<Schema$CustomApp>): void;
        create(params: Params$Resource$Accounts$Customapps$Create, callback: BodyResponseCallback<Schema$CustomApp>): void;
        create(callback: BodyResponseCallback<Schema$CustomApp>): void;
    }
    export interface Params$Resource$Accounts$Customapps$Create extends StandardParameters {
        /**
         * Developer account ID.
         */
        account?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CustomApp;
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export {};
}
