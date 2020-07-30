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
import { DataSnapshot } from '../api/DataSnapshot';
import { Path } from './util/Path';
/**
 * @enum {number}
 */
export declare enum TransactionStatus {
    RUN = 0,
    SENT = 1,
    COMPLETED = 2,
    SENT_NEEDS_ABORT = 3,
    NEEDS_ABORT = 4
}
declare module './Repo' {
    interface Repo {
        startTransaction(path: Path, transactionUpdate: (a: unknown) => void, onComplete: ((a: Error, b: boolean, c: DataSnapshot) => void) | null, applyLocally: boolean): void;
    }
}
