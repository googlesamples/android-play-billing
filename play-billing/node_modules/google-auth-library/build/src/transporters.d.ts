import { GaxiosError, GaxiosOptions, GaxiosPromise, GaxiosResponse } from 'gaxios';
export interface Transporter {
    request<T>(opts: GaxiosOptions): GaxiosPromise<T>;
    request<T>(opts: GaxiosOptions, callback?: BodyResponseCallback<T>): void;
    request<T>(opts: GaxiosOptions, callback?: BodyResponseCallback<T>): GaxiosPromise | void;
}
export interface BodyResponseCallback<T> {
    (err: Error | null, res?: GaxiosResponse<T> | null): void;
}
export interface RequestError extends GaxiosError {
    errors: Error[];
}
export declare class DefaultTransporter {
    /**
     * Default user agent.
     */
    static readonly USER_AGENT: string;
    /**
     * Configures request options before making a request.
     * @param opts GaxiosOptions options.
     * @return Configured options.
     */
    configure(opts?: GaxiosOptions): GaxiosOptions;
    /**
     * Makes a request using Gaxios with given options.
     * @param opts GaxiosOptions options.
     * @param callback optional callback that contains GaxiosResponse object.
     * @return GaxiosPromise, assuming no callback is passed.
     */
    request<T>(opts: GaxiosOptions): GaxiosPromise<T>;
    request<T>(opts: GaxiosOptions, callback?: BodyResponseCallback<T>): void;
    /**
     * Changes the error to include details from the body.
     */
    private processError;
}
