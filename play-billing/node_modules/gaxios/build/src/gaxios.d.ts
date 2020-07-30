import { GaxiosOptions, GaxiosPromise } from './common';
export declare class Gaxios {
    private agentCache;
    /**
     * Default HTTP options that will be used for every HTTP request.
     */
    defaults: GaxiosOptions;
    /**
     * The Gaxios class is responsible for making HTTP requests.
     * @param defaults The default set of options to be used for this instance.
     */
    constructor(defaults?: GaxiosOptions);
    /**
     * Perform an HTTP request with the given options.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    request<T = any>(opts?: GaxiosOptions): GaxiosPromise<T>;
    /**
     * Internal, retryable version of the `request` method.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    private _request;
    private getResponseData;
    /**
     * Validates the options, and merges them with defaults.
     * @param opts The original options passed from the client.
     */
    private validateOpts;
    /**
     * By default, throw for any non-2xx status code
     * @param status status code from the HTTP response
     */
    private validateStatus;
    /**
     * Encode a set of key/value pars into a querystring format (?foo=bar&baz=boo)
     * @param params key value pars to encode
     */
    private paramsSerializer;
    private translateResponse;
}
