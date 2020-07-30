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
import { Path } from '../util/Path';
import { EventRegistration } from './EventRegistration';
import { DataSnapshot } from '../../api/DataSnapshot';
/**
 * Encapsulates the data needed to raise an event
 * @interface
 */
export interface Event {
    /**
     * @return {!Path}
     */
    getPath(): Path;
    /**
     * @return {!string}
     */
    getEventType(): string;
    /**
     * @return {!function()}
     */
    getEventRunner(): () => void;
    /**
     * @return {!string}
     */
    toString(): string;
}
export declare type EventType = 'value' | ' child_added' | ' child_changed' | ' child_moved' | ' child_removed';
/**
 * Encapsulates the data needed to raise an event
 * @implements {Event}
 */
export declare class DataEvent implements Event {
    eventType: EventType;
    eventRegistration: EventRegistration;
    snapshot: DataSnapshot;
    prevName?: string | null;
    /**
     * @param {!string} eventType One of: value, child_added, child_changed, child_moved, child_removed
     * @param {!EventRegistration} eventRegistration The function to call to with the event data. User provided
     * @param {!DataSnapshot} snapshot The data backing the event
     * @param {?string=} prevName Optional, the name of the previous child for child_* events.
     */
    constructor(eventType: EventType, eventRegistration: EventRegistration, snapshot: DataSnapshot, prevName?: string | null);
    /**
     * @inheritDoc
     */
    getPath(): Path;
    /**
     * @inheritDoc
     */
    getEventType(): string;
    /**
     * @inheritDoc
     */
    getEventRunner(): () => void;
    /**
     * @inheritDoc
     */
    toString(): string;
}
export declare class CancelEvent implements Event {
    eventRegistration: EventRegistration;
    error: Error;
    path: Path;
    /**
     * @param {EventRegistration} eventRegistration
     * @param {Error} error
     * @param {!Path} path
     */
    constructor(eventRegistration: EventRegistration, error: Error, path: Path);
    /**
     * @inheritDoc
     */
    getPath(): Path;
    /**
     * @inheritDoc
     */
    getEventType(): string;
    /**
     * @inheritDoc
     */
    getEventRunner(): () => void;
    /**
     * @inheritDoc
     */
    toString(): string;
}
