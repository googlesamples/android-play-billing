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
import { NodeFilter } from './filter/NodeFilter';
import { Index } from '../snap/indexes/Index';
/**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 * @constructor
 */
export declare class QueryParams {
    private limitSet_;
    private startSet_;
    private startNameSet_;
    private endSet_;
    private endNameSet_;
    private limit_;
    private viewFrom_;
    private indexStartValue_;
    private indexStartName_;
    private indexEndValue_;
    private indexEndName_;
    private index_;
    /**
     * Wire Protocol Constants
     * @const
     * @enum {string}
     * @private
     */
    private static readonly WIRE_PROTOCOL_CONSTANTS_;
    /**
     * REST Query Constants
     * @const
     * @enum {string}
     * @private
     */
    private static readonly REST_QUERY_CONSTANTS_;
    /**
     * Default, empty query parameters
     * @type {!QueryParams}
     * @const
     */
    static readonly DEFAULT: QueryParams;
    /**
     * @return {boolean}
     */
    hasStart(): boolean;
    /**
     * @return {boolean} True if it would return from left.
     */
    isViewFromLeft(): boolean;
    /**
     * Only valid to call if hasStart() returns true
     * @return {*}
     */
    getIndexStartValue(): unknown;
    /**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     * @return {!string}
     */
    getIndexStartName(): string;
    /**
     * @return {boolean}
     */
    hasEnd(): boolean;
    /**
     * Only valid to call if hasEnd() returns true.
     * @return {*}
     */
    getIndexEndValue(): unknown;
    /**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     * @return {!string}
     */
    getIndexEndName(): string;
    /**
     * @return {boolean}
     */
    hasLimit(): boolean;
    /**
     * @return {boolean} True if a limit has been set and it has been explicitly anchored
     */
    hasAnchoredLimit(): boolean;
    /**
     * Only valid to call if hasLimit() returns true
     * @return {!number}
     */
    getLimit(): number;
    /**
     * @return {!Index}
     */
    getIndex(): Index;
    /**
     * @return {!QueryParams}
     * @private
     */
    private copy_;
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    limit(newLimit: number): QueryParams;
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    limitToFirst(newLimit: number): QueryParams;
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    limitToLast(newLimit: number): QueryParams;
    /**
     * @param {*} indexValue
     * @param {?string=} key
     * @return {!QueryParams}
     */
    startAt(indexValue: unknown, key?: string | null): QueryParams;
    /**
     * @param {*} indexValue
     * @param {?string=} key
     * @return {!QueryParams}
     */
    endAt(indexValue: unknown, key?: string | null): QueryParams;
    /**
     * @param {!Index} index
     * @return {!QueryParams}
     */
    orderBy(index: Index): QueryParams;
    /**
     * @return {!Object}
     */
    getQueryObject(): {};
    /**
     * @return {boolean}
     */
    loadsAllData(): boolean;
    /**
     * @return {boolean}
     */
    isDefault(): boolean;
    /**
     * @return {!NodeFilter}
     */
    getNodeFilter(): NodeFilter;
    /**
     * Returns a set of REST query string parameters representing this query.
     *
     * @return {!Object.<string,*>} query string parameters
     */
    toRestQueryStringParameters(): {
        [k: string]: string | number;
    };
}
