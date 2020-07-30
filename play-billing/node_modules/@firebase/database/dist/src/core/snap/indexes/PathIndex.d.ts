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
import { Index } from './Index';
import { NamedNode, Node } from '../Node';
import { Path } from '../../util/Path';
/**
 * @param {!Path} indexPath
 * @constructor
 * @extends {Index}
 */
export declare class PathIndex extends Index {
    private indexPath_;
    constructor(indexPath_: Path);
    /**
     * @param {!Node} snap
     * @return {!Node}
     * @protected
     */
    protected extractChild(snap: Node): Node;
    /**
     * @inheritDoc
     */
    isDefinedOn(node: Node): boolean;
    /**
     * @inheritDoc
     */
    compare(a: NamedNode, b: NamedNode): number;
    /**
     * @inheritDoc
     */
    makePost(indexValue: object, name: string): NamedNode;
    /**
     * @inheritDoc
     */
    maxPost(): NamedNode;
    /**
     * @inheritDoc
     */
    toString(): string;
}
