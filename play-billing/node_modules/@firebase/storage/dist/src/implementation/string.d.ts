/**
 * @enum {string}
 */
export declare type StringFormat = string;
export declare const StringFormat: {
    RAW: string;
    BASE64: string;
    BASE64URL: string;
    DATA_URL: string;
};
export declare function formatValidator(stringFormat: unknown): void;
/**
 * @struct
 */
export declare class StringData {
    data: Uint8Array;
    contentType: string | null;
    constructor(data: Uint8Array, contentType?: string | null);
}
export declare function dataFromString(format: StringFormat, stringData: string): StringData;
export declare function utf8Bytes_(value: string): Uint8Array;
export declare function percentEncodedBytes_(value: string): Uint8Array;
export declare function base64Bytes_(format: StringFormat, value: string): Uint8Array;
export declare function dataURLBytes_(dataUrl: string): Uint8Array;
export declare function dataURLContentType_(dataUrl: string): string | null;
