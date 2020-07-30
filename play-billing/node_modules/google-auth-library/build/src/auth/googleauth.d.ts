/// <reference types="node" />
import { GaxiosOptions, GaxiosResponse } from 'gaxios';
import * as stream from 'stream';
import { DefaultTransporter, Transporter } from '../transporters';
import { Compute } from './computeclient';
import { CredentialBody, JWTInput } from './credentials';
import { IdTokenClient } from './idtokenclient';
import { GCPEnv } from './envDetect';
import { JWT, JWTOptions } from './jwtclient';
import { Headers, OAuth2Client, OAuth2ClientOptions, RefreshOptions } from './oauth2client';
import { UserRefreshClient, UserRefreshClientOptions } from './refreshclient';
export interface ProjectIdCallback {
    (err?: Error | null, projectId?: string | null): void;
}
export interface CredentialCallback {
    (err: Error | null, result?: UserRefreshClient | JWT): void;
}
interface DeprecatedGetClientOptions {
}
export interface ADCCallback {
    (err: Error | null, credential?: OAuth2Client, projectId?: string | null): void;
}
export interface ADCResponse {
    credential: OAuth2Client;
    projectId: string | null;
}
export interface GoogleAuthOptions {
    /**
     * Path to a .json, .pem, or .p12 key file
     */
    keyFilename?: string;
    /**
     * Path to a .json, .pem, or .p12 key file
     */
    keyFile?: string;
    /**
     * Object containing client_email and private_key properties
     */
    credentials?: CredentialBody;
    /**
     * Options object passed to the constructor of the client
     */
    clientOptions?: JWTOptions | OAuth2ClientOptions | UserRefreshClientOptions;
    /**
     * Required scopes for the desired API request
     */
    scopes?: string | string[];
    /**
     * Your project ID.
     */
    projectId?: string;
}
export declare const CLOUD_SDK_CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com";
export declare class GoogleAuth {
    transporter?: Transporter;
    /**
     * Caches a value indicating whether the auth layer is running on Google
     * Compute Engine.
     * @private
     */
    private checkIsGCE?;
    get isGCE(): boolean | undefined;
    private _getDefaultProjectIdPromise?;
    private _cachedProjectId?;
    jsonContent: JWTInput | null;
    cachedCredential: JWT | UserRefreshClient | Compute | null;
    private keyFilename?;
    private scopes?;
    private clientOptions?;
    /**
     * Export DefaultTransporter as a static property of the class.
     */
    static DefaultTransporter: typeof DefaultTransporter;
    constructor(opts?: GoogleAuthOptions);
    /**
     * Obtains the default project ID for the application.
     * @param callback Optional callback
     * @returns Promise that resolves with project Id (if used without callback)
     */
    getProjectId(): Promise<string>;
    getProjectId(callback: ProjectIdCallback): void;
    private getProjectIdAsync;
    /**
     * Obtains the default service-level credentials for the application.
     * @param callback Optional callback.
     * @returns Promise that resolves with the ADCResponse (if no callback was
     * passed).
     */
    getApplicationDefault(): Promise<ADCResponse>;
    getApplicationDefault(callback: ADCCallback): void;
    getApplicationDefault(options: RefreshOptions): Promise<ADCResponse>;
    getApplicationDefault(options: RefreshOptions, callback: ADCCallback): void;
    private getApplicationDefaultAsync;
    /**
     * Determines whether the auth layer is running on Google Compute Engine.
     * @returns A promise that resolves with the boolean.
     * @api private
     */
    _checkIsGCE(): Promise<boolean>;
    /**
     * Attempts to load default credentials from the environment variable path..
     * @returns Promise that resolves with the OAuth2Client or null.
     * @api private
     */
    _tryGetApplicationCredentialsFromEnvironmentVariable(options?: RefreshOptions): Promise<JWT | UserRefreshClient | null>;
    /**
     * Attempts to load default credentials from a well-known file location
     * @return Promise that resolves with the OAuth2Client or null.
     * @api private
     */
    _tryGetApplicationCredentialsFromWellKnownFile(options?: RefreshOptions): Promise<JWT | UserRefreshClient | null>;
    /**
     * Attempts to load default credentials from a file at the given path..
     * @param filePath The path to the file to read.
     * @returns Promise that resolves with the OAuth2Client
     * @api private
     */
    _getApplicationCredentialsFromFilePath(filePath: string, options?: RefreshOptions): Promise<JWT | UserRefreshClient>;
    /**
     * Create a credentials instance using the given input options.
     * @param json The input object.
     * @param options The JWT or UserRefresh options for the client
     * @returns JWT or UserRefresh Client with data
     */
    fromJSON(json: JWTInput, options?: RefreshOptions): JWT | UserRefreshClient;
    /**
     * Return a JWT or UserRefreshClient from JavaScript object, caching both the
     * object used to instantiate and the client.
     * @param json The input object.
     * @param options The JWT or UserRefresh options for the client
     * @returns JWT or UserRefresh Client with data
     */
    private _cacheClientFromJSON;
    /**
     * Create a credentials instance using the given input stream.
     * @param inputStream The input stream.
     * @param callback Optional callback.
     */
    fromStream(inputStream: stream.Readable): Promise<JWT | UserRefreshClient>;
    fromStream(inputStream: stream.Readable, callback: CredentialCallback): void;
    fromStream(inputStream: stream.Readable, options: RefreshOptions): Promise<JWT | UserRefreshClient>;
    fromStream(inputStream: stream.Readable, options: RefreshOptions, callback: CredentialCallback): void;
    private fromStreamAsync;
    /**
     * Create a credentials instance using the given API key string.
     * @param apiKey The API key string
     * @param options An optional options object.
     * @returns A JWT loaded from the key
     */
    fromAPIKey(apiKey: string, options?: RefreshOptions): JWT;
    /**
     * Determines whether the current operating system is Windows.
     * @api private
     */
    private _isWindows;
    /**
     * Run the Google Cloud SDK command that prints the default project ID
     */
    private getDefaultServiceProjectId;
    /**
     * Loads the project id from environment variables.
     * @api private
     */
    private getProductionProjectId;
    /**
     * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
     * @api private
     */
    private getFileProjectId;
    /**
     * Gets the Compute Engine project ID if it can be inferred.
     */
    private getGCEProjectId;
    /**
     * The callback function handles a credential object that contains the
     * client_email and private_key (if exists).
     * getCredentials checks for these values from the user JSON at first.
     * If it doesn't exist, and the environment is on GCE, it gets the
     * client_email from the cloud metadata server.
     * @param callback Callback that handles the credential object that contains
     * a client_email and optional private key, or the error.
     * returned
     */
    getCredentials(): Promise<CredentialBody>;
    getCredentials(callback: (err: Error | null, credentials?: CredentialBody) => void): void;
    private getCredentialsAsync;
    /**
     * Automatically obtain a client based on the provided configuration.  If no
     * options were passed, use Application Default Credentials.
     */
    getClient(options?: DeprecatedGetClientOptions): Promise<Compute | JWT | UserRefreshClient>;
    /**
     * Creates a client which will fetch an ID token for authorization.
     * @param targetAudience the audience for the fetched ID token.
     * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
     */
    getIdTokenClient(targetAudience: string): Promise<IdTokenClient>;
    /**
     * Automatically obtain application default credentials, and return
     * an access token for making requests.
     */
    getAccessToken(): Promise<string | null | undefined>;
    /**
     * Obtain the HTTP headers that will provide authorization for a given
     * request.
     */
    getRequestHeaders(url?: string): Promise<Headers>;
    /**
     * Obtain credentials for a request, then attach the appropriate headers to
     * the request options.
     * @param opts Axios or Request options on which to attach the headers
     */
    authorizeRequest(opts: {
        url?: string;
        uri?: string;
        headers?: Headers;
    }): Promise<{
        url?: string | undefined;
        uri?: string | undefined;
        headers?: Headers | undefined;
    }>;
    /**
     * Automatically obtain application default credentials, and make an
     * HTTP request using the given options.
     * @param opts Axios request options for the HTTP request.
     */
    request<T = any>(opts: GaxiosOptions): Promise<GaxiosResponse<T>>;
    /**
     * Determine the compute environment in which the code is running.
     */
    getEnv(): Promise<GCPEnv>;
    /**
     * Sign the given data with the current private key, or go out
     * to the IAM API to sign it.
     * @param data The data to be signed.
     */
    sign(data: string): Promise<string>;
}
export interface SignBlobResponse {
    keyId: string;
    signedBlob: string;
}
export {};
