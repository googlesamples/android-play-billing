/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ComponentContainer } from './component_container';
import { Name, NameServiceMapping } from './types';
import { Component } from './component';
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
export declare class Provider<T extends Name> {
    private readonly name;
    private readonly container;
    private component;
    private readonly instances;
    private readonly instancesDeferred;
    constructor(name: T, container: ComponentContainer);
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier?: string): Promise<NameServiceMapping[T]>;
    /**
     *
     * @param options.identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     * @param options.optional If optional is false or not provided, the method throws an error when
     * the service is not immediately available.
     * If optional is true, the method returns null if the service is not immediately available.
     */
    getImmediate(options: {
        identifier?: string;
        optional: true;
    }): NameServiceMapping[T] | null;
    getImmediate(options?: {
        identifier?: string;
        optional?: false;
    }): NameServiceMapping[T];
    getComponent(): Component<T> | null;
    setComponent(component: Component<T>): void;
    clearInstance(identifier?: string): void;
    delete(): Promise<void>;
    isComponentSet(): boolean;
    private getOrInitializeService;
    private normalizeInstanceIdentifier;
}
