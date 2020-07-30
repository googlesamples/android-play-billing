/// <reference types="node" />
import * as stream from 'stream';
import { JWTInput } from './credentials';
import { Headers } from './oauth2client';
export interface Claims {
    [index: string]: string;
}
export declare class JWTAccess {
    email?: string | null;
    key?: string | null;
    keyId?: string | null;
    projectId?: string;
    private cache;
    /**
     * JWTAccess service account credentials.
     *
     * Create a new access token by using the credential to create a new JWT token
     * that's recognized as the access token.
     *
     * @param email the service account email address.
     * @param key the private key that will be used to sign the token.
     * @param keyId the ID of the private key used to sign the token.
     */
    constructor(email?: string | null, key?: string | null, keyId?: string | null);
    /**
     * Get a non-expired access token, after refreshing if necessary.
     *
     * @param url The URI being authorized.
     * @param additionalClaims An object with a set of additional claims to
     * include in the payload.
     * @returns An object that includes the authorization header.
     */
    getRequestHeaders(url: string, additionalClaims?: Claims): Headers;
    /**
     * Create a JWTAccess credentials instance using the given input options.
     * @param json The input object.
     */
    fromJSON(json: JWTInput): void;
    /**
     * Create a JWTAccess credentials instance using the given input stream.
     * @param inputStream The input stream.
     * @param callback Optional callback.
     */
    fromStream(inputStream: stream.Readable): Promise<void>;
    fromStream(inputStream: stream.Readable, callback: (err?: Error) => void): void;
    private fromStreamAsync;
}
