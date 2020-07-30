import { LoadBalancer, ChannelControlHelper } from "./load-balancer";
import { SubchannelAddress } from "./subchannel";
import { LoadBalancingConfig } from "./load-balancing-config";
export declare class WeightedTargetLoadBalancer implements LoadBalancer {
    private channelControlHelper;
    private WeightedChildImpl;
    /**
     * Map of target names to target children. Includes current targets and
     * previous targets with deactivation timers that have not yet triggered.
     */
    private targets;
    /**
     * List of current target names.
     */
    private targetList;
    constructor(channelControlHelper: ChannelControlHelper);
    private updateState;
    updateAddressList(addressList: SubchannelAddress[], lbConfig: LoadBalancingConfig, attributes: {
        [key: string]: unknown;
    }): void;
    exitIdle(): void;
    resetBackoff(): void;
    destroy(): void;
    getTypeName(): string;
}
export declare function setup(): void;
