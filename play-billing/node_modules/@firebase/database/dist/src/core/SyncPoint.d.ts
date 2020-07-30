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
import { View } from './view/View';
import { Operation } from './operation/Operation';
import { WriteTreeRef } from './WriteTree';
import { Query } from '../api/Query';
import { EventRegistration } from './view/EventRegistration';
import { Node } from './snap/Node';
import { Path } from './util/Path';
import { Event } from './view/Event';
import { ReferenceConstructor } from '../api/Reference';
/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */
export declare class SyncPoint {
    static set __referenceConstructor(val: ReferenceConstructor);
    static get __referenceConstructor(): ReferenceConstructor;
    /**
     * The Views being tracked at this location in the tree, stored as a map where the key is a
     * queryId and the value is the View for that query.
     *
     * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
     */
    private readonly views;
    isEmpty(): boolean;
    applyOperation(operation: Operation, writesCache: WriteTreeRef, optCompleteServerCache: Node | null): Event[];
    /**
     * Add an event callback for the specified query.
     *
     * @param {!Query} query
     * @param {!EventRegistration} eventRegistration
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} serverCache Complete server cache, if we have it.
     * @param {boolean} serverCacheComplete
     * @return {!Array.<!Event>} Events to raise.
     */
    addEventRegistration(query: Query, eventRegistration: EventRegistration, writesCache: WriteTreeRef, serverCache: Node | null, serverCacheComplete: boolean): Event[];
    /**
     * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
     *
     * If query is the default query, we'll check all views for the specified eventRegistration.
     * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
     *
     * @param {!Query} query
     * @param {?EventRegistration} eventRegistration If null, remove all callbacks.
     * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return {{removed:!Array.<!Query>, events:!Array.<!Event>}} removed queries and any cancel events
     */
    removeEventRegistration(query: Query, eventRegistration: EventRegistration | null, cancelError?: Error): {
        removed: Query[];
        events: Event[];
    };
    getQueryViews(): View[];
    /**
     * @param path The path to the desired complete snapshot
     * @return A complete cache, if it exists
     */
    getCompleteServerCache(path: Path): Node | null;
    viewForQuery(query: Query): View | null;
    viewExistsForQuery(query: Query): boolean;
    hasCompleteView(): boolean;
    getCompleteView(): View | null;
}
