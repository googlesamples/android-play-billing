/// <reference types="node" />
import { EventEmitter } from 'events';
import { GaxiosOptions, GaxiosPromise } from 'gaxios';
import { DefaultTransporter } from '../transporters';
import { Credentials } from './credentials';
import { Headers } from './oauth2client';
export declare interface AuthClient {
    on(event: 'tokens', listener: (tokens: Credentials) => void): this;
}
export declare abstract class AuthClient extends EventEmitter {
    protected quotaProjectId?: string;
    transporter: DefaultTransporter;
    credentials: Credentials;
    /**
     * Provides an alternative Gaxios request implementation with auth credentials
     */
    abstract request<T>(opts: GaxiosOptions): GaxiosPromise<T>;
    /**
     * Sets the auth credentials.
     */
    setCredentials(credentials: Credentials): void;
    /**
     * Append additional headers, e.g., x-goog-user-project, shared across the
     * classes inheriting AuthClient. This method should be used by any method
     * that overrides getRequestMetadataAsync(), which is a shared helper for
     * setting request information in both gRPC and HTTP API calls.
     *
     * @param headers objedcdt to append additional headers to.
     */
    protected addSharedMetadataHeaders(headers: Headers): Headers;
}
