import { Node } from './generated/envoy/api/v2/core/Node';
export interface ChannelCredsConfig {
    type: string;
    config?: object;
}
export interface XdsServerConfig {
    serverUri: string;
    channelCreds: ChannelCredsConfig[];
}
export interface BootstrapInfo {
    xdsServers: XdsServerConfig[];
    node: Node;
}
export declare function loadBootstrapInfo(): Promise<BootstrapInfo>;
