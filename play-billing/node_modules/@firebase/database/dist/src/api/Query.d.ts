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
import { Path } from '../core/util/Path';
import { Repo } from '../core/Repo';
import { QueryParams } from '../core/view/QueryParams';
import { Reference } from './Reference';
import { DataSnapshot } from './DataSnapshot';
export interface SnapshotCallback {
    (a: DataSnapshot, b?: string | null): unknown;
}
/**
 * A Query represents a filter to be applied to a firebase location.  This object purely represents the
 * query expression (and exposes our public API to build the query).  The actual query logic is in ViewBase.js.
 *
 * Since every Firebase reference is a query, Firebase inherits from this object.
 */
export declare class Query {
    repo: Repo;
    path: Path;
    private queryParams_;
    private orderByCalled_;
    static set __referenceConstructor(val: new (repo: Repo, path: Path) => Query);
    static get __referenceConstructor(): new (repo: Repo, path: Path) => Query;
    constructor(repo: Repo, path: Path, queryParams_: QueryParams, orderByCalled_: boolean);
    /**
     * Validates start/end values for queries.
     * @param {!QueryParams} params
     * @private
     */
    private static validateQueryEndpoints_;
    /**
     * Validates that limit* has been called with the correct combination of parameters
     * @param {!QueryParams} params
     * @private
     */
    private static validateLimit_;
    /**
     * Validates that no other order by call has been made
     * @param {!string} fnName
     * @private
     */
    private validateNoPreviousOrderByCall_;
    /**
     * @return {!QueryParams}
     */
    getQueryParams(): QueryParams;
    /**
     * @return {!Reference}
     */
    getRef(): Reference;
    /**
     * @param {!string} eventType
     * @param {!function(DataSnapshot, string=)} callback
     * @param {(function(Error)|Object)=} cancelCallbackOrContext
     * @param {Object=} context
     * @return {!function(DataSnapshot, string=)}
     */
    on(eventType: string, callback: SnapshotCallback, cancelCallbackOrContext?: ((a: Error) => unknown) | object | null, context?: object | null): SnapshotCallback;
    /**
     * @param {!function(!DataSnapshot)} callback
     * @param {?function(Error)} cancelCallback
     * @param {?Object} context
     * @protected
     */
    protected onValueEvent(callback: (a: DataSnapshot) => void, cancelCallback: ((a: Error) => void) | null, context: object | null): void;
    /**
     * @param {!Object.<string, !function(!DataSnapshot, ?string)>} callbacks
     * @param {?function(Error)} cancelCallback
     * @param {?Object} context
     * @protected
     */
    onChildEvent(callbacks: {
        [k: string]: SnapshotCallback;
    }, cancelCallback: ((a: Error) => unknown) | null, context: object | null): void;
    /**
     * @param {string=} eventType
     * @param {(function(!DataSnapshot, ?string=))=} callback
     * @param {Object=} context
     */
    off(eventType?: string, callback?: SnapshotCallback, context?: object | null): void;
    /**
     * Attaches a listener, waits for the first event, and then removes the listener
     * @param {!string} eventType
     * @param {!function(!DataSnapshot, string=)} userCallback
     * @param failureCallbackOrContext
     * @param context
     * @return {!firebase.Promise}
     */
    once(eventType: string, userCallback?: SnapshotCallback, failureCallbackOrContext?: ((a: Error) => void) | object | null, context?: object | null): Promise<DataSnapshot>;
    /**
     * Set a limit and anchor it to the start of the window.
     * @param {!number} limit
     * @return {!Query}
     */
    limitToFirst(limit: number): Query;
    /**
     * Set a limit and anchor it to the end of the window.
     * @param {!number} limit
     * @return {!Query}
     */
    limitToLast(limit: number): Query;
    /**
     * Given a child path, return a new query ordered by the specified grandchild path.
     * @param {!string} path
     * @return {!Query}
     */
    orderByChild(path: string): Query;
    /**
     * Return a new query ordered by the KeyIndex
     * @return {!Query}
     */
    orderByKey(): Query;
    /**
     * Return a new query ordered by the PriorityIndex
     * @return {!Query}
     */
    orderByPriority(): Query;
    /**
     * Return a new query ordered by the ValueIndex
     * @return {!Query}
     */
    orderByValue(): Query;
    /**
     * @param {number|string|boolean|null} value
     * @param {?string=} name
     * @return {!Query}
     */
    startAt(value?: number | string | boolean | null, name?: string | null): Query;
    /**
     * @param {number|string|boolean|null} value
     * @param {?string=} name
     * @return {!Query}
     */
    endAt(value?: number | string | boolean | null, name?: string | null): Query;
    /**
     * Load the selection of children with exactly the specified value, and, optionally,
     * the specified name.
     * @param {number|string|boolean|null} value
     * @param {string=} name
     * @return {!Query}
     */
    equalTo(value: number | string | boolean | null, name?: string): Query;
    /**
     * @return {!string} URL for this location.
     */
    toString(): string;
    toJSON(): string;
    /**
     * An object representation of the query parameters used by this Query.
     * @return {!Object}
     */
    queryObject(): object;
    /**
     * @return {!string}
     */
    queryIdentifier(): string;
    /**
     * Return true if this query and the provided query are equivalent; otherwise, return false.
     * @param {Query} other
     * @return {boolean}
     */
    isEqual(other: Query): boolean;
    /**
     * Helper used by .on and .once to extract the context and or cancel arguments.
     * @param {!string} fnName The function name (on or once)
     * @param {(function(Error)|Object)=} cancelOrContext
     * @param {Object=} context
     * @return {{cancel: ?function(Error), context: ?Object}}
     * @private
     */
    private static getCancelAndContextArgs_;
    get ref(): Reference;
}
