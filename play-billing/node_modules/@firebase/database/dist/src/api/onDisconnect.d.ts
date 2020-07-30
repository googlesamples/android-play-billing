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
import { Repo } from '../core/Repo';
import { Path } from '../core/util/Path';
import { Indexable } from '../core/util/misc';
/**
 * @constructor
 */
export declare class OnDisconnect {
    private repo_;
    private path_;
    /**
     * @param {!Repo} repo_
     * @param {!Path} path_
     */
    constructor(repo_: Repo, path_: Path);
    /**
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    cancel(onComplete?: (a: Error | null) => void): Promise<void>;
    /**
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    remove(onComplete?: (a: Error | null) => void): Promise<void>;
    /**
     * @param {*} value
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    set(value: unknown, onComplete?: (a: Error | null) => void): Promise<void>;
    /**
     * @param {*} value
     * @param {number|string|null} priority
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    setWithPriority(value: unknown, priority: number | string | null, onComplete?: (a: Error | null) => void): Promise<void>;
    /**
     * @param {!Object} objectToMerge
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    update(objectToMerge: Indexable, onComplete?: (a: Error | null) => void): Promise<void>;
}
