import { Headers, XhrIo, ErrorCode } from './xhrio';
/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
export declare class NetworkXhrIo implements XhrIo {
    private xhr_;
    private errorCode_;
    private sendPromise_;
    private sent_;
    constructor();
    /**
     * @override
     */
    send(url: string, method: string, body?: ArrayBufferView | Blob | string | null, headers?: Headers): Promise<XhrIo>;
    /**
     * @override
     */
    getErrorCode(): ErrorCode;
    /**
     * @override
     */
    getStatus(): number;
    /**
     * @override
     */
    getResponseText(): string;
    /**
     * Aborts the request.
     * @override
     */
    abort(): void;
    /**
     * @override
     */
    getResponseHeader(header: string): string | null;
    /**
     * @override
     */
    addUploadProgressListener(listener: (p1: ProgressEvent) => void): void;
    /**
     * @override
     */
    removeUploadProgressListener(listener: (p1: ProgressEvent) => void): void;
}
