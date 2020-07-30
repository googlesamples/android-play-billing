import { LoadBalancer, ChannelControlHelper } from './load-balancer';
import { SubchannelAddress } from './subchannel';
import { LoadBalancingConfig } from './load-balancing-config';
export declare type LocalitySubchannelAddress = SubchannelAddress & {
    localityPath: string[];
};
export declare function isLocalitySubchannelAddress(address: SubchannelAddress): address is LocalitySubchannelAddress;
export declare class PriorityLoadBalancer implements LoadBalancer {
    private channelControlHelper;
    /**
     * Inner class for holding a child priority and managing associated timers.
     */
    private PriorityChildImpl;
    private children;
    /**
     * The priority order of child names from the latest config update.
     */
    private priorities;
    /**
     * The attributes object from the latest update, saved to be passed along to
     * each new child as they are created
     */
    private latestAttributes;
    /**
     * The latest load balancing policies and address lists for each child from
     * the latest update
     */
    private latestUpdates;
    /**
     * Current chosen priority that requests are sent to
     */
    private currentPriority;
    /**
     * After an update, this preserves the currently selected child from before
     * the update. We continue to use that child until it disconnects, or
     * another higher-priority child connects, or it is deleted because it is not
     * in the new priority list at all and its retention interval has expired, or
     * we try and fail to connect to every child in the new priority list.
     */
    private currentChildFromBeforeUpdate;
    constructor(channelControlHelper: ChannelControlHelper);
    private updateState;
    private onChildStateChange;
    private deleteChild;
    /**
     * Select the child at the specified priority, and report that child's state
     * as this balancer's state until that child disconnects or a higher-priority
     * child connects.
     * @param priority
     */
    private selectPriority;
    /**
     * Check each child in priority order until we find one to use
     * @param reportConnecting Whether we should report a CONNECTING state if we
     *     stop before picking a specific child. This should be true when we have
     *     not already selected a child.
     */
    private tryNextPriority;
    updateAddressList(addressList: SubchannelAddress[], lbConfig: LoadBalancingConfig, attributes: {
        [key: string]: unknown;
    }): void;
    exitIdle(): void;
    resetBackoff(): void;
    destroy(): void;
    getTypeName(): string;
}
export declare function setup(): void;
