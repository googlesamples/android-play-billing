/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace webfonts_v1 {
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
     * Web Fonts Developer API
     *
     * The Google Web Fonts Developer API lets you retrieve information about web fonts served     by Google.
     *
     * @example
     * const {google} = require('googleapis');
     * const webfonts = google.webfonts('v1');
     *
     * @namespace webfonts
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Webfonts
     */
    export class Webfonts {
        context: APIRequestContext;
        webfonts: Resource$Webfonts;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Metadata describing a family of fonts.
     */
    export interface Schema$Webfont {
        /**
         * The category of the font.
         */
        category?: string | null;
        /**
         * The name of the font.
         */
        family?: string | null;
        /**
         * The font files (with all supported scripts) for each one of the available variants, as a key : value map.
         */
        files?: {
            [key: string]: string;
        } | null;
        /**
         * This kind represents a webfont object in the webfonts service.
         */
        kind?: string | null;
        /**
         * The date (format &quot;yyyy-MM-dd&quot;) the font was modified for the last time.
         */
        lastModified?: string | null;
        /**
         * The scripts supported by the font.
         */
        subsets?: string[] | null;
        /**
         * The available variants for the font.
         */
        variants?: string[] | null;
        /**
         * The font version.
         */
        version?: string | null;
    }
    /**
     * Response containing the list of fonts currently served by the Google Fonts API.
     */
    export interface Schema$WebfontList {
        /**
         * The list of fonts currently served by the Google Fonts API.
         */
        items?: Schema$Webfont[];
        /**
         * This kind represents a list of webfont objects in the webfonts service.
         */
        kind?: string | null;
    }
    export class Resource$Webfonts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * webfonts.webfonts.list
         * @desc Retrieves the list of fonts currently served by the Google Fonts Developer API.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/webfonts.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const webfonts = google.webfonts('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await webfonts.webfonts.list({
         *     // Enables sorting of the list.
         *     sort: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "items": [],
         *   //   "kind": "my_kind"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias webfonts.webfonts.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.sort Enables sorting of the list.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Webfonts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Webfonts$List, options?: MethodOptions): GaxiosPromise<Schema$WebfontList>;
        list(params: Params$Resource$Webfonts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Webfonts$List, options: MethodOptions | BodyResponseCallback<Schema$WebfontList>, callback: BodyResponseCallback<Schema$WebfontList>): void;
        list(params: Params$Resource$Webfonts$List, callback: BodyResponseCallback<Schema$WebfontList>): void;
        list(callback: BodyResponseCallback<Schema$WebfontList>): void;
    }
    export interface Params$Resource$Webfonts$List extends StandardParameters {
        /**
         * Enables sorting of the list.
         */
        sort?: string;
    }
    export {};
}
