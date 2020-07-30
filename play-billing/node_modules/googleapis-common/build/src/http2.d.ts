/// <reference types="node" />
import * as http2 from 'http2';
import { URL } from 'url';
import { GaxiosResponse, GaxiosOptions } from 'gaxios';
/**
 * Reference to the ClientHttp2Session and a timeout handler.
 * @private
 */
export interface SessionData {
    session: http2.ClientHttp2Session;
    timeoutHandle?: NodeJS.Timer;
}
/**
 * List of sessions current in use.
 * @private
 */
export declare const sessions: {
    [index: string]: SessionData;
};
/**
 * Public method to make an http2 request.
 * @param config - Request options.
 */
export declare function request<T>(config: GaxiosOptions): Promise<GaxiosResponse<T>>;
export declare function closeSession(url: URL): Promise<void>;
