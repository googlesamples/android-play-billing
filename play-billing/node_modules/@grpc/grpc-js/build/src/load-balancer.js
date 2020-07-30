"use strict";
/*
 * Copyright 2019 gRPC authors.
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
exports.registerAll = exports.getFirstUsableConfig = exports.isLoadBalancerNameRegistered = exports.createLoadBalancer = exports.registerLoadBalancerType = void 0;
const load_balancer_pick_first = require("./load-balancer-pick-first");
const load_balancer_round_robin = require("./load-balancer-round-robin");
const load_balancer_priority = require("./load-balancer-priority");
const load_balancer_weighted_target = require("./load-balancer-weighted-target");
const registeredLoadBalancerTypes = {};
function registerLoadBalancerType(typeName, loadBalancerType) {
    registeredLoadBalancerTypes[typeName] = loadBalancerType;
}
exports.registerLoadBalancerType = registerLoadBalancerType;
function createLoadBalancer(typeName, channelControlHelper) {
    if (typeName in registeredLoadBalancerTypes) {
        return new registeredLoadBalancerTypes[typeName](channelControlHelper);
    }
    else {
        return null;
    }
}
exports.createLoadBalancer = createLoadBalancer;
function isLoadBalancerNameRegistered(typeName) {
    return typeName in registeredLoadBalancerTypes;
}
exports.isLoadBalancerNameRegistered = isLoadBalancerNameRegistered;
function getFirstUsableConfig(configs) {
    for (const config of configs) {
        if (config.name in registeredLoadBalancerTypes) {
            return config;
        }
    }
    return null;
}
exports.getFirstUsableConfig = getFirstUsableConfig;
function registerAll() {
    load_balancer_pick_first.setup();
    load_balancer_round_robin.setup();
    load_balancer_priority.setup();
    load_balancer_weighted_target.setup();
}
exports.registerAll = registerAll;
//# sourceMappingURL=load-balancer.js.map