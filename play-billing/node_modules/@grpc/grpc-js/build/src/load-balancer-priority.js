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
exports.setup = exports.PriorityLoadBalancer = exports.isLocalitySubchannelAddress = void 0;
const load_balancer_1 = require("./load-balancer");
const load_balancing_config_1 = require("./load-balancing-config");
const channel_1 = require("./channel");
const picker_1 = require("./picker");
const load_balancer_child_handler_1 = require("./load-balancer-child-handler");
const constants_1 = require("./constants");
const metadata_1 = require("./metadata");
const TYPE_NAME = 'priority';
const DEFAULT_FAILOVER_TIME_MS = 10000;
const DEFAULT_RETENTION_INTERVAL_MS = 15 * 60 * 1000;
function isLocalitySubchannelAddress(address) {
    return Array.isArray(address.localityPath);
}
exports.isLocalitySubchannelAddress = isLocalitySubchannelAddress;
class PriorityLoadBalancer {
    constructor(channelControlHelper) {
        this.channelControlHelper = channelControlHelper;
        /**
         * Inner class for holding a child priority and managing associated timers.
         */
        this.PriorityChildImpl = class {
            constructor(parent, name) {
                this.parent = parent;
                this.name = name;
                this.connectivityState = channel_1.ConnectivityState.IDLE;
                this.failoverTimer = null;
                this.deactivationTimer = null;
                this.childBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler({
                    createSubchannel: (subchannelAddress, subchannelArgs) => {
                        return this.parent.channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
                    },
                    updateState: (connectivityState, picker) => {
                        this.updateState(connectivityState, picker);
                    },
                    requestReresolution: () => {
                        this.parent.channelControlHelper.requestReresolution();
                    },
                });
                this.picker = new picker_1.QueuePicker(this.childBalancer);
            }
            updateState(connectivityState, picker) {
                this.connectivityState = connectivityState;
                this.picker = picker;
                this.parent.onChildStateChange(this);
            }
            startFailoverTimer() {
                if (this.failoverTimer === null) {
                    this.failoverTimer = setTimeout(() => {
                        this.failoverTimer = null;
                        this.updateState(channel_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker());
                    }, DEFAULT_FAILOVER_TIME_MS);
                }
            }
            updateAddressList(addressList, lbConfig, attributes) {
                this.childBalancer.updateAddressList(addressList, lbConfig, attributes);
                this.startFailoverTimer();
            }
            exitIdle() {
                if (this.connectivityState === channel_1.ConnectivityState.IDLE) {
                    this.startFailoverTimer();
                }
                this.childBalancer.exitIdle();
            }
            resetBackoff() {
                this.childBalancer.resetBackoff();
            }
            deactivate() {
                if (this.deactivationTimer === null) {
                    this.deactivationTimer = setTimeout(() => {
                        this.parent.deleteChild(this);
                        this.childBalancer.destroy();
                    }, DEFAULT_RETENTION_INTERVAL_MS);
                }
            }
            maybeReactivate() {
                if (this.deactivationTimer !== null) {
                    clearTimeout(this.deactivationTimer);
                    this.deactivationTimer = null;
                }
            }
            cancelFailoverTimer() {
                if (this.failoverTimer !== null) {
                    clearTimeout(this.failoverTimer);
                    this.failoverTimer = null;
                }
            }
            isFailoverTimerPending() {
                return this.failoverTimer !== null;
            }
            getConnectivityState() {
                return this.connectivityState;
            }
            getPicker() {
                return this.picker;
            }
            getName() {
                return this.name;
            }
            destroy() {
                this.childBalancer.destroy();
            }
        };
        // End of inner class PriorityChildImpl
        this.children = new Map();
        /**
         * The priority order of child names from the latest config update.
         */
        this.priorities = [];
        /**
         * The attributes object from the latest update, saved to be passed along to
         * each new child as they are created
         */
        this.latestAttributes = {};
        /**
         * The latest load balancing policies and address lists for each child from
         * the latest update
         */
        this.latestUpdates = new Map();
        /**
         * Current chosen priority that requests are sent to
         */
        this.currentPriority = null;
        /**
         * After an update, this preserves the currently selected child from before
         * the update. We continue to use that child until it disconnects, or
         * another higher-priority child connects, or it is deleted because it is not
         * in the new priority list at all and its retention interval has expired, or
         * we try and fail to connect to every child in the new priority list.
         */
        this.currentChildFromBeforeUpdate = null;
    }
    updateState(state, picker) {
        /* If switching to IDLE, use a QueuePicker attached to this load balancer
         * so that when the picker calls exitIdle, that in turn calls exitIdle on
         * the PriorityChildImpl, which will start the failover timer. */
        if (state === channel_1.ConnectivityState.IDLE) {
            picker = new picker_1.QueuePicker(this);
        }
        this.channelControlHelper.updateState(state, picker);
    }
    onChildStateChange(child) {
        const childState = child.getConnectivityState();
        if (child === this.currentChildFromBeforeUpdate) {
            if (childState === channel_1.ConnectivityState.READY ||
                childState === channel_1.ConnectivityState.IDLE) {
                this.updateState(childState, child.getPicker());
            }
            else {
                this.currentChildFromBeforeUpdate = null;
                this.tryNextPriority(true);
            }
            return;
        }
        const childPriority = this.priorities.indexOf(child.getName());
        if (childPriority < 0) {
            // child is not in the priority list, ignore updates
            return;
        }
        if (this.currentPriority !== null && childPriority > this.currentPriority) {
            // child is lower priority than the currently selected child, ignore updates
            return;
        }
        if (childState === channel_1.ConnectivityState.TRANSIENT_FAILURE) {
            /* Report connecting if and only if the currently selected child is the
             * one entering TRANSIENT_FAILURE */
            this.tryNextPriority(childPriority === this.currentPriority);
            return;
        }
        if (this.currentPriority === null || childPriority < this.currentPriority) {
            /* In this case, either there is no currently selected child or this
             * child is higher priority than the currently selected child, so we want
             * to switch to it if it is READY or IDLE. */
            if (childState === channel_1.ConnectivityState.READY ||
                childState === channel_1.ConnectivityState.IDLE) {
                this.selectPriority(childPriority);
            }
            return;
        }
        /* The currently selected child has updated state to something other than
         * TRANSIENT_FAILURE, so we pass that update along */
        this.updateState(childState, child.getPicker());
    }
    deleteChild(child) {
        if (child === this.currentChildFromBeforeUpdate) {
            this.currentChildFromBeforeUpdate = null;
            /* If we get to this point, the currentChildFromBeforeUpdate was still in
             * use, so we are still trying to connect to the specified priorities */
            this.tryNextPriority(true);
        }
    }
    /**
     * Select the child at the specified priority, and report that child's state
     * as this balancer's state until that child disconnects or a higher-priority
     * child connects.
     * @param priority
     */
    selectPriority(priority) {
        var _a;
        this.currentPriority = priority;
        const chosenChild = this.children.get(this.priorities[priority]);
        this.updateState(chosenChild.getConnectivityState(), chosenChild.getPicker());
        this.currentChildFromBeforeUpdate = null;
        // Deactivate each child of lower priority than the chosen child
        for (let i = priority + 1; i < this.priorities.length; i++) {
            (_a = this.children.get(this.priorities[i])) === null || _a === void 0 ? void 0 : _a.deactivate();
        }
    }
    /**
     * Check each child in priority order until we find one to use
     * @param reportConnecting Whether we should report a CONNECTING state if we
     *     stop before picking a specific child. This should be true when we have
     *     not already selected a child.
     */
    tryNextPriority(reportConnecting) {
        for (const [index, childName] of this.priorities.entries()) {
            let child = this.children.get(childName);
            /* If the child doesn't already exist, create it and update it.  */
            if (child === undefined) {
                if (reportConnecting) {
                    this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
                }
                child = new this.PriorityChildImpl(this, childName);
                this.children.set(childName, child);
                const childUpdate = this.latestUpdates.get(childName);
                if (childUpdate !== undefined) {
                    child.updateAddressList(childUpdate.subchannelAddress, childUpdate.lbConfig, this.latestAttributes);
                }
            }
            /* We're going to try to use this child, so reactivate it if it has been
             * deactivated */
            child.maybeReactivate();
            if (child.getConnectivityState() === channel_1.ConnectivityState.READY ||
                child.getConnectivityState() === channel_1.ConnectivityState.IDLE) {
                this.selectPriority(index);
                return;
            }
            if (child.isFailoverTimerPending()) {
                /* This child is still trying to connect. Wait until its failover timer
                 * has ended to continue to the next one */
                if (reportConnecting) {
                    this.updateState(channel_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
                }
                return;
            }
        }
        this.currentPriority = null;
        this.currentChildFromBeforeUpdate = null;
        this.updateState(channel_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({
            code: constants_1.Status.UNAVAILABLE,
            details: 'No ready priority',
            metadata: new metadata_1.Metadata(),
        }));
    }
    updateAddressList(addressList, lbConfig, attributes) {
        var _a;
        if (!load_balancing_config_1.isPriorityLoadBalancingConfig(lbConfig)) {
            // Reject a config of the wrong type
            return;
        }
        const priorityConfig = lbConfig.priority;
        /* For each address, the first element of its localityPath array determines
         * which child it belongs to. So we bucket those addresses by that first
         * element, and pass along the rest of the localityPath for that child
         * to use. */
        const childAddressMap = new Map();
        for (const address of addressList) {
            if (!isLocalitySubchannelAddress(address)) {
                // Reject address that cannot be prioritized
                return;
            }
            if (address.localityPath.length < 1) {
                // Reject address that cannot be prioritized
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
        if (this.currentPriority !== null) {
            this.currentChildFromBeforeUpdate = this.children.get(this.priorities[this.currentPriority]);
            this.currentPriority = null;
        }
        this.latestAttributes = attributes;
        this.latestUpdates.clear();
        this.priorities = priorityConfig.priorities;
        /* Pair up the new child configs with the corresponding address lists, and
         * update all existing children with their new configs */
        for (const [childName, childConfig] of priorityConfig.children) {
            const chosenChildConfig = load_balancer_1.getFirstUsableConfig(childConfig.config);
            if (chosenChildConfig !== null) {
                const childAddresses = (_a = childAddressMap.get(childName)) !== null && _a !== void 0 ? _a : [];
                this.latestUpdates.set(childName, {
                    subchannelAddress: childAddresses,
                    lbConfig: chosenChildConfig,
                });
                const existingChild = this.children.get(childName);
                if (existingChild !== undefined) {
                    existingChild.updateAddressList(childAddresses, chosenChildConfig, attributes);
                }
            }
        }
        // Deactivate all children that are no longer in the priority list
        for (const [childName, child] of this.children) {
            if (this.priorities.indexOf(childName) < 0) {
                child.deactivate();
            }
        }
        // Only report connecting if there are no existing children
        this.tryNextPriority(this.children.size === 0);
    }
    exitIdle() {
        var _a;
        if (this.currentPriority !== null) {
            (_a = this.children.get(this.priorities[this.currentPriority])) === null || _a === void 0 ? void 0 : _a.exitIdle();
        }
    }
    resetBackoff() {
        for (const child of this.children.values()) {
            child.resetBackoff();
        }
    }
    destroy() {
        var _a;
        for (const child of this.children.values()) {
            child.destroy();
        }
        this.children.clear();
        (_a = this.currentChildFromBeforeUpdate) === null || _a === void 0 ? void 0 : _a.destroy();
        this.currentChildFromBeforeUpdate = null;
    }
    getTypeName() {
        return TYPE_NAME;
    }
}
exports.PriorityLoadBalancer = PriorityLoadBalancer;
function setup() {
    load_balancer_1.registerLoadBalancerType(TYPE_NAME, PriorityLoadBalancer);
}
exports.setup = setup;
//# sourceMappingURL=load-balancer-priority.js.map