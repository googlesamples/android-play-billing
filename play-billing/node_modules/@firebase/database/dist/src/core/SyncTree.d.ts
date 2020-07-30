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
import { Path } from './util/Path';
import { Query } from '../api/Query';
import { Node } from './snap/Node';
import { Event } from './view/Event';
import { EventRegistration } from './view/EventRegistration';
/**
 * @typedef {{
 *   startListening: function(
 *     !Query,
 *     ?number,
 *     function():string,
 *     function(!string, *):!Array.<!Event>
 *   ):!Array.<!Event>,
 *
 *   stopListening: function(!Query, ?number)
 * }}
 */
export interface ListenProvider {
    startListening(query: Query, tag: number | null, hashFn: () => string, onComplete: (a: string, b?: unknown) => Event[]): Event[];
    stopListening(a: Query, b: number | null): void;
}
/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 * @constructor
 */
export declare class SyncTree {
    private listenProvider_;
    /**
     * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
     */
    private syncPointTree_;
    /**
     * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
     */
    private pendingWriteTree_;
    private readonly tagToQueryMap;
    private readonly queryToTagMap;
    /**
     * @param {!ListenProvider} listenProvider_ Used by SyncTree to start / stop listening
     *   to server data.
     */
    constructor(listenProvider_: ListenProvider);
    /**
     * Apply the data changes for a user-generated set() or transaction() call.
     *
     * @return Events to raise.
     */
    applyUserOverwrite(path: Path, newData: Node, writeId: number, visible?: boolean): Event[];
    /**
     * Apply the data from a user-generated update() call
     *
     * @return Events to raise.
     */
    applyUserMerge(path: Path, changedChildren: {
        [k: string]: Node;
    }, writeId: number): Event[];
    /**
     * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
     *
     * @param revert True if the given write failed and needs to be reverted
     * @return Events to raise.
     */
    ackUserWrite(writeId: number, revert?: boolean): Event[];
    /**
     * Apply new server data for the specified path..
     *
     * @return Events to raise.
     */
    applyServerOverwrite(path: Path, newData: Node): Event[];
    /**
     * Apply new server data to be merged in at the specified path.
     *
     * @return Events to raise.
     */
    applyServerMerge(path: Path, changedChildren: {
        [k: string]: Node;
    }): Event[];
    /**
     * Apply a listen complete for a query
     *
     * @return Events to raise.
     */
    applyListenComplete(path: Path): Event[];
    /**
     * Apply new server data for the specified tagged query.
     *
     * @return Events to raise.
     */
    applyTaggedQueryOverwrite(path: Path, snap: Node, tag: number): Event[];
    /**
     * Apply server data to be merged in for the specified tagged query.
     *
     * @return Events to raise.
     */
    applyTaggedQueryMerge(path: Path, changedChildren: {
        [k: string]: Node;
    }, tag: number): Event[];
    /**
     * Apply a listen complete for a tagged query
     *
     * @return Events to raise.
     */
    applyTaggedListenComplete(path: Path, tag: number): Event[];
    /**
     * Add an event callback for the specified query.
     *
     * @return Events to raise.
     */
    addEventRegistration(query: Query, eventRegistration: EventRegistration): Event[];
    /**
     * Remove event callback(s).
     *
     * If query is the default query, we'll check all queries for the specified eventRegistration.
     * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
     *
     * @param eventRegistration If null, all callbacks are removed.
     * @param cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return Cancel events, if cancelError was provided.
     */
    removeEventRegistration(query: Query, eventRegistration: EventRegistration | null, cancelError?: Error): Event[];
    /**
     * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
     * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
     * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
     *     <incremented total> as the write is applied locally and then acknowledged at the server.
     *
     * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
     *
     * @param path The path to the data we want
     * @param writeIdsToExclude A specific set to be excluded
     */
    calcCompleteEventCache(path: Path, writeIdsToExclude?: number[]): Node;
    /**
     * This collapses multiple unfiltered views into a single view, since we only need a single
     * listener for them.
     */
    private collectDistinctViewsForSubTree_;
    private removeTags_;
    /**
     * Normalizes a query to a query we send the server for listening
     *
     * @return The normalized query
     */
    private static queryForListening_;
    /**
     * For a given new listen, manage the de-duplication of outstanding subscriptions.
     *
     * @return This method can return events to support synchronous data sources
     */
    private setupListener_;
    private createListenerForView_;
    /**
     * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
     */
    private static makeQueryKey_;
    /**
     * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
     */
    private static parseQueryKey_;
    /**
     * Return the query associated with the given tag, if we have one
     */
    private queryKeyForTag_;
    /**
     * Return the tag associated with the given query.
     */
    private tagForQuery_;
    /**
     * Static tracker for next query tag.
     */
    private static nextQueryTag_;
    /**
     * Static accessor for query tags.
     */
    private static getNextQueryTag_;
    /**
     * A helper method to apply tagged operations
     */
    private applyTaggedOperation_;
    /**
     * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
     *
     * NOTES:
     * - Descendant SyncPoints will be visited first (since we raise events depth-first).
     *
     * - We call applyOperation() on each SyncPoint passing three things:
     *   1. A version of the Operation that has been made relative to the SyncPoint location.
     *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
     *   3. A snapshot Node with cached server data, if we have it.
     *
     * - We concatenate all of the events returned by each SyncPoint and return the result.
     */
    private applyOperationToSyncPoints_;
    /**
     * Recursive helper for applyOperationToSyncPoints_
     */
    private applyOperationHelper_;
    /**
     * Recursive helper for applyOperationToSyncPoints_
     */
    private applyOperationDescendantsHelper_;
}
