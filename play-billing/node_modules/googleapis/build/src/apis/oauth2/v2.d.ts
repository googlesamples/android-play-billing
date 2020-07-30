/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace oauth2_v2 {
    export interface Options extends GlobalOptions {
        version: 'v2';
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
     * Google OAuth2 API
     *
     * Obtains end-user authorization grants for use with other Google APIs.
     *
     * @example
     * const {google} = require('googleapis');
     * const oauth2 = google.oauth2('v2');
     *
     * @namespace oauth2
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Oauth2
     */
    export class Oauth2 {
        context: APIRequestContext;
        userinfo: Resource$Userinfo;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        /**
         * oauth2.tokeninfo
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/oauth2.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const oauth2 = google.oauth2('v2');
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
         *   const res = await oauth2.tokeninfo({
         *     access_token: 'placeholder-value',
         *
         *     id_token: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "audience": "my_audience",
         *   //   "email": "my_email",
         *   //   "expires_in": 0,
         *   //   "issued_to": "my_issued_to",
         *   //   "scope": "my_scope",
         *   //   "user_id": "my_user_id",
         *   //   "verified_email": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias oauth2.tokeninfo
         * @memberOf! oauth2(v2)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.access_token
         * @param {string=} params.id_token
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        tokeninfo(params: Params$$Tokeninfo, options: StreamMethodOptions): GaxiosPromise<Readable>;
        tokeninfo(params?: Params$$Tokeninfo, options?: MethodOptions): GaxiosPromise<Schema$Tokeninfo>;
        tokeninfo(params: Params$$Tokeninfo, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        tokeninfo(params: Params$$Tokeninfo, options: MethodOptions | BodyResponseCallback<Schema$Tokeninfo>, callback: BodyResponseCallback<Schema$Tokeninfo>): void;
        tokeninfo(params: Params$$Tokeninfo, callback: BodyResponseCallback<Schema$Tokeninfo>): void;
        tokeninfo(callback: BodyResponseCallback<Schema$Tokeninfo>): void;
    }
    export interface Schema$Tokeninfo {
        /**
         * Who is the intended audience for this token. In general the same as issued_to.
         */
        audience?: string | null;
        /**
         * The email address of the user. Present only if the email scope is present in the request.
         */
        email?: string | null;
        /**
         * The expiry time of the token, as number of seconds left until expiry.
         */
        expires_in?: number | null;
        /**
         * To whom was the token issued to. In general the same as audience.
         */
        issued_to?: string | null;
        /**
         * The space separated list of scopes granted to this token.
         */
        scope?: string | null;
        /**
         * The obfuscated user id.
         */
        user_id?: string | null;
        /**
         * Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
         */
        verified_email?: boolean | null;
    }
    export interface Schema$Userinfo {
        /**
         * The user&#39;s email address.
         */
        email?: string | null;
        /**
         * The user&#39;s last name.
         */
        family_name?: string | null;
        /**
         * The user&#39;s gender.
         */
        gender?: string | null;
        /**
         * The user&#39;s first name.
         */
        given_name?: string | null;
        /**
         * The hosted domain e.g. example.com if the user is Google apps user.
         */
        hd?: string | null;
        /**
         * The obfuscated ID of the user.
         */
        id?: string | null;
        /**
         * URL of the profile page.
         */
        link?: string | null;
        /**
         * The user&#39;s preferred locale.
         */
        locale?: string | null;
        /**
         * The user&#39;s full name.
         */
        name?: string | null;
        /**
         * URL of the user&#39;s picture image.
         */
        picture?: string | null;
        /**
         * Boolean flag which is true if the email address is verified. Always verified because we only return the user&#39;s primary email address.
         */
        verified_email?: boolean | null;
    }
    export interface Params$$Tokeninfo extends StandardParameters {
        /**
         *
         */
        access_token?: string;
        /**
         *
         */
        id_token?: string;
    }
    export class Resource$Userinfo {
        context: APIRequestContext;
        v2: Resource$Userinfo$V2;
        constructor(context: APIRequestContext);
        /**
         * oauth2.userinfo.get
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/oauth2.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const oauth2 = google.oauth2('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'openid',
         *       'https://www.googleapis.com/auth/userinfo.email',
         *       'https://www.googleapis.com/auth/userinfo.profile',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await oauth2.userinfo.get({});
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "email": "my_email",
         *   //   "family_name": "my_family_name",
         *   //   "gender": "my_gender",
         *   //   "given_name": "my_given_name",
         *   //   "hd": "my_hd",
         *   //   "id": "my_id",
         *   //   "link": "my_link",
         *   //   "locale": "my_locale",
         *   //   "name": "my_name",
         *   //   "picture": "my_picture",
         *   //   "verified_email": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias oauth2.userinfo.get
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Userinfo$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Userinfo$Get, options?: MethodOptions): GaxiosPromise<Schema$Userinfo>;
        get(params: Params$Resource$Userinfo$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Userinfo$Get, options: MethodOptions | BodyResponseCallback<Schema$Userinfo>, callback: BodyResponseCallback<Schema$Userinfo>): void;
        get(params: Params$Resource$Userinfo$Get, callback: BodyResponseCallback<Schema$Userinfo>): void;
        get(callback: BodyResponseCallback<Schema$Userinfo>): void;
    }
    export interface Params$Resource$Userinfo$Get extends StandardParameters {
    }
    export class Resource$Userinfo$V2 {
        context: APIRequestContext;
        me: Resource$Userinfo$V2$Me;
        constructor(context: APIRequestContext);
    }
    export class Resource$Userinfo$V2$Me {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * oauth2.userinfo.v2.me.get
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/oauth2.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const oauth2 = google.oauth2('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'openid',
         *       'https://www.googleapis.com/auth/userinfo.email',
         *       'https://www.googleapis.com/auth/userinfo.profile',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await oauth2.userinfo.v2.me.get({});
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "email": "my_email",
         *   //   "family_name": "my_family_name",
         *   //   "gender": "my_gender",
         *   //   "given_name": "my_given_name",
         *   //   "hd": "my_hd",
         *   //   "id": "my_id",
         *   //   "link": "my_link",
         *   //   "locale": "my_locale",
         *   //   "name": "my_name",
         *   //   "picture": "my_picture",
         *   //   "verified_email": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias oauth2.userinfo.v2.me.get
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Userinfo$V2$Me$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Userinfo$V2$Me$Get, options?: MethodOptions): GaxiosPromise<Schema$Userinfo>;
        get(params: Params$Resource$Userinfo$V2$Me$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Userinfo$V2$Me$Get, options: MethodOptions | BodyResponseCallback<Schema$Userinfo>, callback: BodyResponseCallback<Schema$Userinfo>): void;
        get(params: Params$Resource$Userinfo$V2$Me$Get, callback: BodyResponseCallback<Schema$Userinfo>): void;
        get(callback: BodyResponseCallback<Schema$Userinfo>): void;
    }
    export interface Params$Resource$Userinfo$V2$Me$Get extends StandardParameters {
    }
    export {};
}
