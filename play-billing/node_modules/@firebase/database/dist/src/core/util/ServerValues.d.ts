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
import { Path } from './Path';
import { Node } from '../snap/Node';
import { SyncTree } from '../SyncTree';
import { Indexable } from './misc';
interface ValueProvider {
    getImmediateChild(childName: string): ValueProvider;
    node(): Node;
}
/**
 * Generate placeholders for deferred values.
 * @param {?Object} values
 * @return {!Object}
 */
export declare const generateWithValues: (values: {
    [k: string]: unknown;
}) => {
    [k: string]: unknown;
};
/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 * @param {(Object|string|number|boolean)} value
 * @param {!Object} serverValues
 * @return {!(string|number|boolean)}
 */
export declare const resolveDeferredLeafValue: (value: string | number | boolean | {
    [k: string]: unknown;
}, existingVal: ValueProvider, serverValues: {
    [k: string]: unknown;
}) => string | number | boolean;
/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param {!Path} path path to which write is relative
 * @param {!Node} node new data written at path
 * @param {!SyncTree} syncTree current data
 * @param {!Object} serverValues
 * @return {!SparseSnapshotTree}
 */
export declare const resolveDeferredValueTree: (path: Path, node: Node, syncTree: SyncTree, serverValues: Indexable) => Node;
/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 * @param {!Node} node
 * @param {!Object} serverValues
 * @return {!Node}
 */
export declare const resolveDeferredValueSnapshot: (node: Node, existing: Node, serverValues: Indexable) => Node;
export {};
