import { LoadBalancer, ChannelControlHelper } from './load-balancer';
import { LoadBalancingConfig } from './load-balancing-config';
import { SubchannelAddress } from './subchannel';
export declare class RoundRobinLoadBalancer implements LoadBalancer {
    private readonly channelControlHelper;
    private subchannels;
    private currentState;
    private subchannelStateListener;
    private subchannelStateCounts;
    private currentReadyPicker;
    constructor(channelControlHelper: ChannelControlHelper);
    private calculateAndUpdateState;
    private updateState;
    private resetSubchannelList;
    updateAddressList(addressList: SubchannelAddress[], lbConfig: LoadBalancingConfig): void;
    exitIdle(): void;
    resetBackoff(): void;
    destroy(): void;
    getTypeName(): string;
}
export declare function setup(): void;
