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
import { Node } from '../../snap/Node';
import { NodeFilter } from './NodeFilter';
import { Index } from '../../snap/indexes/Index';
import { IndexedFilter } from './IndexedFilter';
import { QueryParams } from '../QueryParams';
import { Path } from '../../util/Path';
import { CompleteChildSource } from '../CompleteChildSource';
import { ChildChangeAccumulator } from '../ChildChangeAccumulator';
/**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 *
 * @constructor
 * @implements {NodeFilter}
 */
export declare class LimitedFilter implements NodeFilter {
    /**
     * @const
     * @type {RangedFilter}
     * @private
     */
    private readonly rangedFilter_;
    /**
     * @const
     * @type {!Index}
     * @private
     */
    private readonly index_;
    /**
     * @const
     * @type {number}
     * @private
     */
    private readonly limit_;
    /**
     * @const
     * @type {boolean}
     * @private
     */
    private readonly reverse_;
    /**
     * @param {!QueryParams} params
     */
    constructor(params: QueryParams);
    /**
     * @inheritDoc
     */
    updateChild(snap: Node, key: string, newChild: Node, affectedPath: Path, source: CompleteChildSource, optChangeAccumulator: ChildChangeAccumulator | null): Node;
    /**
     * @inheritDoc
     */
    updateFullNode(oldSnap: Node, newSnap: Node, optChangeAccumulator: ChildChangeAccumulator | null): Node;
    /**
     * @inheritDoc
     */
    updatePriority(oldSnap: Node, newPriority: Node): Node;
    /**
     * @inheritDoc
     */
    filtersNodes(): boolean;
    /**
     * @inheritDoc
     */
    getIndexedFilter(): IndexedFilter;
    /**
     * @inheritDoc
     */
    getIndex(): Index;
    /**
     * @param {!Node} snap
     * @param {string} childKey
     * @param {!Node} childSnap
     * @param {!CompleteChildSource} source
     * @param {?ChildChangeAccumulator} changeAccumulator
     * @return {!Node}
     * @private
     */
    private fullLimitUpdateChild_;
}
