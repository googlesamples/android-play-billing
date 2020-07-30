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
import { NodeFilter } from './NodeFilter';
import { Index } from '../../snap/indexes/Index';
import { Path } from '../../util/Path';
import { CompleteChildSource } from '../CompleteChildSource';
import { ChildChangeAccumulator } from '../ChildChangeAccumulator';
import { Node } from '../../snap/Node';
/**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 *
 * @constructor
 * @implements {NodeFilter}
 * @param {!Index} index
 */
export declare class IndexedFilter implements NodeFilter {
    private readonly index_;
    constructor(index_: Index);
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
}
