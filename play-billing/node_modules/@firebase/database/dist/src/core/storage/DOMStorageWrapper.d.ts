/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 * @constructor
 */
export declare class DOMStorageWrapper {
    private domStorage_;
    private prefix_;
    /**
     * @param {Storage} domStorage_ The underlying storage object (e.g. localStorage or sessionStorage)
     */
    constructor(domStorage_: Storage);
    /**
     * @param {string} key The key to save the value under
     * @param {?Object} value The value being stored, or null to remove the key.
     */
    set(key: string, value: unknown | null): void;
    /**
     * @param {string} key
     * @return {*} The value that was stored under this key, or null
     */
    get(key: string): unknown;
    /**
     * @param {string} key
     */
    remove(key: string): void;
    isInMemoryStorage: boolean;
    /**
     * @param {string} name
     * @return {string}
     */
    prefixedName_(name: string): string;
    toString(): string;
}
