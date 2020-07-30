/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */
/// <reference types="node" />
import { OutgoingHttpHeaders } from 'http';
export declare const BASE_PATH = "/computeMetadata/v1";
export declare const HOST_ADDRESS = "http://169.254.169.254";
export declare const SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
export declare const HEADER_NAME = "Metadata-Flavor";
export declare const HEADER_VALUE = "Google";
export declare const HEADERS: Readonly<{
    "Metadata-Flavor": string;
}>;
export interface Options {
    params?: {
        [index: string]: string;
    };
    property?: string;
    headers?: OutgoingHttpHeaders;
}
export declare function instance<T = any>(options?: string | Options): Promise<T>;
export declare function project<T = any>(options?: string | Options): Promise<T>;
export declare function isAvailable(): Promise<boolean>;
/**
 * reset the memoized isAvailable() lookup.
 */
export declare function resetIsAvailableCache(): void;
export declare function requestTimeout(): number;
