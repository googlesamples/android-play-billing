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
import { FirebaseNamespace, FirebaseApp } from '@firebase/app-types';
import { Database } from './src/api/Database';
import { DataSnapshot } from './src/api/DataSnapshot';
import { Query } from './src/api/Query';
import { Reference } from './src/api/Reference';
import { enableLogging } from './src/core/util/util';
import * as INTERNAL from './src/api/internal';
import * as TEST_ACCESS from './src/api/test_access';
import * as types from '@firebase/database-types';
declare const ServerValue: {
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
 * A one off register function which returns a database based on the app and
 * passed database URL.
 *
 * @param app A valid FirebaseApp-like object
 * @param url A valid Firebase databaseURL
 * @param version custom version e.g. firebase-admin version
 */
export declare function initStandalone(app: FirebaseApp, url: string, version: string): {
    instance: Database;
    namespace: {
        Reference: typeof Reference;
        Query: typeof Query;
        Database: typeof Database;
        DataSnapshot: typeof DataSnapshot;
        enableLogging: (logger_?: boolean | ((a: string) => void), persistent?: boolean) => void;
        INTERNAL: typeof INTERNAL;
        ServerValue: {
            TIMESTAMP: {
                '.sv': string;
            };
            increment: (delta: number) => {
                '.sv': {
                    increment: number;
                };
            };
        };
        TEST_ACCESS: typeof TEST_ACCESS;
    };
};
export declare function registerDatabase(instance: FirebaseNamespace): void;
export { Database, Query, Reference, enableLogging, ServerValue };
export { DataSnapshot } from './src/api/DataSnapshot';
export { OnDisconnect } from './src/api/onDisconnect';
declare module '@firebase/app-types' {
    interface FirebaseNamespace {
        database?: {
            (app?: FirebaseApp): types.FirebaseDatabase;
            enableLogging: typeof types.enableLogging;
            ServerValue: types.ServerValue;
            Database: typeof types.FirebaseDatabase;
        };
    }
    interface FirebaseApp {
        database?(): types.FirebaseDatabase;
    }
}
