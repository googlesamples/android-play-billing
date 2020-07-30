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
import { Node } from './Node';
import { Path } from '../util/Path';
import { Index } from './indexes/Index';
import { ChildrenNodeConstructor } from './ChildrenNode';
import { Indexable } from '../util/misc';
/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */
export declare class LeafNode implements Node {
    private readonly value_;
    private priorityNode_;
    static set __childrenNodeConstructor(val: ChildrenNodeConstructor);
    static get __childrenNodeConstructor(): ChildrenNodeConstructor;
    /**
     * The sort order for comparing leaf nodes of different types. If two leaf nodes have
     * the same type, the comparison falls back to their value
     * @type {Array.<!string>}
     * @const
     */
    static VALUE_TYPE_ORDER: string[];
    private lazyHash_;
    /**
     * @implements {Node}
     * @param {!(string|number|boolean|Object)} value_ The value to store in this leaf node.
     *                                         The object type is possible in the event of a deferred value
     * @param {!Node=} priorityNode_ The priority of this node.
     */
    constructor(value_: string | number | boolean | Indexable, priorityNode_?: Node);
    /** @inheritDoc */
    isLeafNode(): boolean;
    /** @inheritDoc */
    getPriority(): Node;
    /** @inheritDoc */
    updatePriority(newPriorityNode: Node): Node;
    /** @inheritDoc */
    getImmediateChild(childName: string): Node;
    /** @inheritDoc */
    getChild(path: Path): Node;
    /**
     * @inheritDoc
     */
    hasChild(): boolean;
    /** @inheritDoc */
    getPredecessorChildName(childName: string, childNode: Node): null;
    /** @inheritDoc */
    updateImmediateChild(childName: string, newChildNode: Node): Node;
    /** @inheritDoc */
    updateChild(path: Path, newChildNode: Node): Node;
    /** @inheritDoc */
    isEmpty(): boolean;
    /** @inheritDoc */
    numChildren(): number;
    /** @inheritDoc */
    forEachChild(index: Index, action: (s: string, n: Node) => void): boolean;
    /**
     * @inheritDoc
     */
    val(exportFormat?: boolean): {};
    /** @inheritDoc */
    hash(): string;
    /**
     * Returns the value of the leaf node.
     * @return {Object|string|number|boolean} The value of the node.
     */
    getValue(): Indexable | string | number | boolean;
    /**
     * @inheritDoc
     */
    compareTo(other: Node): number;
    /**
     * Comparison specifically for two leaf nodes
     * @param {!LeafNode} otherLeaf
     * @return {!number}
     * @private
     */
    private compareToLeafNode_;
    /**
     * @inheritDoc
     */
    withIndex(): Node;
    /**
     * @inheritDoc
     */
    isIndexed(): boolean;
    /**
     * @inheritDoc
     */
    equals(other: Node): boolean;
}
