"use strict";
/*
 * Copyright 2020 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = exports.WeightedTargetLoadBalancer = void 0;
const load_balancer_1 = require("./load-balancer");
const load_balancing_config_1 = require("./load-balancing-config");
const picker_1 = require("./picker");
const channel_1 = require("./channel");
const load_balancer_child_handler_1 = require("./load-balancer-child-handler");
const constants_1 = require("./constants");
const metadata_1 = require("./metadata");
const load_balancer_priority_1 = require("./load-balancer-priority");
const TYPE_NAME = 'weighted_target';
const DEFAULT_RETENTION_INTERVAL_MS = 15 * 60 * 1000;
class WeightedTargetPicker {
    constructor(pickerList) {
        this.pickerList = pickerList;
        this.rangeTotal = pickerList[pickerList.length - 1].rangeEnd;
    }
    pick(pickArgs) {
        // num | 0 is equivalent to floor(num)
        const selection = (Math.random() * this.rangeTotal) | 0;
        /* Binary search for the element of the list such that
         * pickerList[index - 1].rangeEnd <= selection < pickerList[index].rangeEnd
         */
        let mid = 0;
        let startIndex = 0;
        let endIndex = this.pickerList.length - 1;
        let index = 0;
        while (endIndex > startIndex) {
            mid = ((startIndex + endIndex) / 2) | 0;
            if (this.pickerList[mid].rangeEnd > selection) {
                endIndex = mid;
            }
            else if (this.pickerList[mid].rangeEnd < selection) {
                startIndex = mid + 1;
            }
            else {
                // + 1 here because the range is exclusive at the top end
                index = mid + 1;
                break;
            }
        }
        if (index === 0) {
            index = startIndex;
        }
        return this.pickerList[index].picker.pick(pickArgs);
    }
}
class WeightedTargetLoadBalancer {
    constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        this.WeightedChildImpl = class {
            constructor(parent, name) {
                this.parent = parent;
                this.name = name;
                this.connectivityState = channel_1.ConnectivityState.IDLE;
                this.deactivationTimer = null;
                this.weight = 0;
                this.childBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler({
                    createSubchannel: (subchannelAddress, subchannelOptions) => {
                        return this.parent.channelControlHelper.createSubchannel(subchannelAddress, subchannelOptions);
                    },
                    updateState: (connectivityState, picker) => {
                        this.updateState(connectivityState, picker);
                    },
                    requestReresolution: () => {
                        this.parent.channelControlHelper.requestReresolution();
                    }
                });
                this.picker = new picker_1.QueuePicker(this.childBalancer);
            }
            updateState(connectivityState, picker) {
                this.connectivityState = connectivityState;
                this.picker = picker;
                this.parent.updateState();
            }
            updateAddressList(addressList, lbConfig, attributes) {
                this.weight = lbConfig.weight;
                const childConfig = load_balancer_1.getFirstUsableConfig(lbConfig.child_policy);
                if (childConfig !== null) {
                    this.childBalancer.updateAddressList(addressList, childConfig, attributes);
                }
            }
            exitIdle() {
                this.childBalancer.exitIdle();
            }
            resetBackoff() {
                this.childBalancer.resetBackoff();
            }
            destroy() {
                this.childBalancer.destroy();
                if (this.deactivationTimer !== null) {
                    clearTimeout(this.deactivationTimer);
                }
            }
            deactivate() {
                if (this.deactivationTimer === null) {
                    this.deactivationTimer = setTimeout(() => {
                        this.parent.targets.delete(this.name);
                        this.deactivationTimer = null;
                    }, DEFAULT_RETENTION_INTERVAL_MS);
                }
            }
            maybeReactivate() {
                if (this.deactivationTimer !== null) {
                    clearTimeout(this.deactivationTimer);
                    this.deactivationTimer = null;
                }
            }
            getConnectivityState() {
                return this.connectivityState;
            }
            getPicker() {
                return this.picker;
            }
            getWeight() {
                return this.weight;
            }
        };
        // end of WeightedChildImpl
        /**
         * Map of target names to target children. Includes current targets and
         * previous targets with deactivation timers that have not yet triggered.
         */
        this.targets = new Map();
        /**
         * List of current target names.
         */
        this.targetList = [];
    }
    updateState() {
        const pickerList = [];
        let end = 0;
        let connectingCount = 0;
        let idleCount = 0;
        let transientFailureCount = 0;
        for (const targetName of this.targetList) {
            const target = this.targets.get(targetName);
            if (target === undefined) {
                continue;
            }
            switch (target.getConnectivityState()) {
                case channel_1.ConnectivityState.READY:
                    end += target.getWeight();
                    pickerList.push({
                        picker: target.getPicker(),
                        rangeEnd: end
                    });
                    break;
                case channel_1.ConnectivityState.CONNECTING:
                    connectingCount += 1;
                    break;
                case channel_1.ConnectivityState.IDLE:
                    idleCount += 1;
                    break;
                case channel_1.ConnectivityState.TRANSIENT_FAILURE:
                    transientFailureCount += 1;
                    break;
                default:
                // Ignore the other possiblity, SHUTDOWN
            }
        }
        let connectivityState;
        if (pickerList.length > 0) {
            connectivityState = channel_1.ConnectivityState.READY;
        }
        else if (connectingCount > 0) {
            connectivityState = channel_1.ConnectivityState.CONNECTING;
        }
        else if (idleCount > 0) {
            connectivityState = channel_1.ConnectivityState.IDLE;
        }
        else {
            connectivityState = channel_1.ConnectivityState.TRANSIENT_FAILURE;
        }
        let picker;
        switch (connectivityState) {
            case channel_1.ConnectivityState.READY:
                picker = new WeightedTargetPicker(pickerList);
                break;
            case channel_1.ConnectivityState.CONNECTING:
            case channel_1.ConnectivityState.READY:
                picker = new picker_1.QueuePicker(this);
                break;
            default:
                picker = new picker_1.UnavailablePicker({
                    code: constants_1.Status.UNAVAILABLE,
                    details: 'weighted_target: all children report state TRANSIENT_FAILURE',
                    metadata: new metadata_1.Metadata()
                });
        }
        this.channelControlHelper.updateState(connectivityState, picker);
    }
    updateAddressList(addressList, lbConfig, attributes) {
        var _a;
        if (!load_balancing_config_1.isWeightedTargetLoadBalancingConfig(lbConfig)) {
            // Reject a config of the wrong type
            return;
        }
        /* For each address, the first element of its localityPath array determines
         * which child it belongs to. So we bucket those addresses by that first
         * element, and pass along the rest of the localityPath for that child
         * to use. */
        const childAddressMap = new Map();
        for (const address of addressList) {
            if (!load_balancer_priority_1.isLocalitySubchannelAddress(address)) {
                // Reject address that cannot be associated with targets
                return;
            }
            if (address.localityPath.length < 1) {
                // Reject address that cannot be associated with targets
                return;
            }
            const childName = address.localityPath[0];
            const childAddress = Object.assign(Object.assign({}, address), { localityPath: address.localityPath.slice(1) });
            let childAddressList = childAddressMap.get(childName);
            if (childAddressList === undefined) {
                childAddressList = [];
                childAddressMap.set(childName, childAddressList);
            }
            childAddressList.push(childAddress);
        }
        this.targetList = Array.from(lbConfig.weighted_target.targets.keys());
        for (const [targetName, targetConfig] of lbConfig.weighted_target.targets) {
            let target = this.targets.get(targetName);
            if (target === undefined) {
                target = new this.WeightedChildImpl(this, targetName);
                this.targets.set(targetName, target);
            }
            else {
                target.maybeReactivate();
            }
            target.updateAddressList((_a = childAddressMap.get(targetName)) !== null && _a !== void 0 ? _a : [], targetConfig, attributes);
        }
        // Deactivate targets that are not in the new config
        for (const [targetName, target] of this.targets) {
            if (this.targetList.indexOf(targetName) < 0) {
                target.deactivate();
            }
        }
        this.updateState();
    }
    exitIdle() {
        var _a;
        for (const targetName of this.targetList) {
            (_a = this.targets.get(targetName)) === null || _a === void 0 ? void 0 : _a.exitIdle();
        }
    }
    resetBackoff() {
        var _a;
        for (const targetName of this.targetList) {
            (_a = this.targets.get(targetName)) === null || _a === void 0 ? void 0 : _a.resetBackoff();
        }
    }
    destroy() {
        for (const target of this.targets.values()) {
            target.destroy();
        }
        this.targets.clear();
    }
    getTypeName() {
        return TYPE_NAME;
    }
}
exports.WeightedTargetLoadBalancer = WeightedTargetLoadBalancer;
function setup() {
    load_balancer_1.registerLoadBalancerType(TYPE_NAME, WeightedTargetLoadBalancer);
}
exports.setup = setup;
//# sourceMappingURL=load-balancer-weighted-target.js.map