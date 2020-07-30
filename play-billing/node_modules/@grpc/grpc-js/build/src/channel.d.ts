import { Deadline, Call, Http2CallStream } from './call-stream';
import { ChannelCredentials } from './channel-credentials';
import { ChannelOptions } from './channel-options';
import { Metadata } from './metadata';
export declare enum ConnectivityState {
    CONNECTING = 0,
    READY = 1,
    TRANSIENT_FAILURE = 2,
    IDLE = 3,
    SHUTDOWN = 4
}
/**
 * An interface that represents a communication channel to a server specified
 * by a given address.
 */
export interface Channel {
    /**
     * Close the channel. This has the same functionality as the existing
     * grpc.Client.prototype.close
     */
    close(): void;
    /**
     * Return the target that this channel connects to
     */
    getTarget(): string;
    /**
     * Get the channel's current connectivity state. This method is here mainly
     * because it is in the existing internal Channel class, and there isn't
     * another good place to put it.
     * @param tryToConnect If true, the channel will start connecting if it is
     *     idle. Otherwise, idle channels will only start connecting when a
     *     call starts.
     */
    getConnectivityState(tryToConnect: boolean): ConnectivityState;
    /**
     * Watch for connectivity state changes. This is also here mainly because
     * it is in the existing external Channel class.
     * @param currentState The state to watch for transitions from. This should
     *     always be populated by calling getConnectivityState immediately
     *     before.
     * @param deadline A deadline for waiting for a state change
     * @param callback Called with no error when a state change, or with an
     *     error if the deadline passes without a state change.
     */
    watchConnectivityState(currentState: ConnectivityState, deadline: Date | number, callback: (error?: Error) => void): void;
    /**
     * Create a call object. Call is an opaque type that is used by the Client
     * class. This function is called by the gRPC library when starting a
     * request. Implementers should return an instance of Call that is returned
     * from calling createCall on an instance of the provided Channel class.
     * @param method The full method string to request.
     * @param deadline The call deadline
     * @param host A host string override for making the request
     * @param parentCall A server call to propagate some information from
     * @param propagateFlags A bitwise combination of elements of grpc.propagate
     *     that indicates what information to propagate from parentCall.
     */
    createCall(method: string, deadline: Deadline, host: string | null | undefined, parentCall: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    propagateFlags: number | null | undefined): Call;
}
export declare class ChannelImplementation implements Channel {
    private readonly credentials;
    private readonly options;
    private resolvingLoadBalancer;
    private subchannelPool;
    private connectivityState;
    private currentPicker;
    private pickQueue;
    private connectivityStateWatchers;
    private defaultAuthority;
    private filterStackFactory;
    private target;
    constructor(target: string, credentials: ChannelCredentials, options: ChannelOptions);
    /**
     * Check the picker output for the given call and corresponding metadata,
     * and take any relevant actions. Should not be called while iterating
     * over pickQueue.
     * @param callStream
     * @param callMetadata
     */
    private tryPick;
    private removeConnectivityStateWatcher;
    private updateState;
    _startCallStream(stream: Http2CallStream, metadata: Metadata): void;
    close(): void;
    getTarget(): string;
    getConnectivityState(tryToConnect: boolean): ConnectivityState;
    watchConnectivityState(currentState: ConnectivityState, deadline: Date | number, callback: (error?: Error) => void): void;
    createCall(method: string, deadline: Deadline, host: string | null | undefined, parentCall: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    propagateFlags: number | null | undefined): Call;
}
