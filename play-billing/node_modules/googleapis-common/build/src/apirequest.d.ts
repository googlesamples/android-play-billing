import { GaxiosPromise } from 'gaxios';
import { APIRequestParams, BodyResponseCallback } from './api';
/**
 * Create and send request to Google API
 * @param parameters Parameters used to form request
 * @param callback   Callback when request finished or error found
 */
export declare function createAPIRequest<T>(parameters: APIRequestParams): GaxiosPromise<T>;
export declare function createAPIRequest<T>(parameters: APIRequestParams, callback: BodyResponseCallback<T>): void;
