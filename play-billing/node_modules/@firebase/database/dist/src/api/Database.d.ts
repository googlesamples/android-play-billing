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
import { Reference } from './Reference';
import { Repo } from '../core/Repo';
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseService } from '@firebase/app-types/private';
/**
 * Class representing a firebase database.
 * @implements {FirebaseService}
 */
export declare class Database implements FirebaseService {
    private repo_;
    INTERNAL: DatabaseInternals;
    private root_;
    static readonly ServerValue: {
        TIMESTAMP: {
            '.sv': string;
        };
        increment: (delta: number) => {
            '.sv': {
                increment: number;
            };
        };
    };
    /**
     * The constructor should not be called by users of our public API.
     * @param {!Repo} repo_
     */
    constructor(repo_: Repo);
    get app(): FirebaseApp;
    /**
     * Returns a reference to the root or to the path specified in the provided
     * argument.
     *
     * @param {string|Reference=} path The relative string path or an existing
     * Reference to a database location.
     * @throws If a Reference is provided, throws if it does not belong to the
     * same project.
     * @return {!Reference} Firebase reference.
     */
    ref(path?: string): Reference;
    ref(path?: Reference): Reference;
    /**
     * Returns a reference to the root or the path specified in url.
     * We throw a exception if the url is not in the same domain as the
     * current repo.
     * @param {string} url
     * @return {!Reference} Firebase reference.
     */
    refFromURL(url: string): Reference;
    /**
     * @param {string} apiName
     */
    private checkDeleted_;
    goOffline(): void;
    goOnline(): void;
}
export declare class DatabaseInternals {
    database: Database;
    /** @param {!Database} database */
    constructor(database: Database);
    /** @return {Promise<void>} */
    delete(): Promise<void>;
}
