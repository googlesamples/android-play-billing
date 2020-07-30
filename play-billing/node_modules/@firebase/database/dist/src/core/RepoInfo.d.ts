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
 * A class that holds metadata about a Repo object
 *
 * @constructor
 */
export declare class RepoInfo {
    secure: boolean;
    namespace: string;
    webSocketOnly: boolean;
    persistenceKey: string;
    includeNamespaceInQueryParams: boolean;
    host: string;
    domain: string;
    internalHost: string;
    /**
     * @param {string} host Hostname portion of the url for the repo
     * @param {boolean} secure Whether or not this repo is accessed over ssl
     * @param {string} namespace The namespace represented by the repo
     * @param {boolean} webSocketOnly Whether to prefer websockets over all other transports (used by Nest).
     * @param {string=} persistenceKey Override the default session persistence storage key
     */
    constructor(host: string, secure: boolean, namespace: string, webSocketOnly: boolean, persistenceKey?: string, includeNamespaceInQueryParams?: boolean);
    needsQueryParam(): boolean;
    isCacheableHost(): boolean;
    isDemoHost(): boolean;
    isCustomHost(): boolean;
    updateHost(newHost: string): void;
    /**
     * Returns the websocket URL for this repo
     * @param {string} type of connection
     * @param {Object} params list
     * @return {string} The URL for this repo
     */
    connectionURL(type: string, params: {
        [k: string]: string;
    }): string;
    /** @return {string} */
    toString(): string;
    /** @return {string} */
    toURLString(): string;
}
