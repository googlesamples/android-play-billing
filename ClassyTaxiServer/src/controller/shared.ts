/**
 * Copyright 2018 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as firebase from 'firebase-admin'
import * as functions from 'firebase-functions';
import { PlayBilling } from "../play-billing";

import * as serviceAccountPlay from '../service-account.json'
import { InstanceIdManager } from '../model/InstanceIdManager';
import { ContentManager } from '../model/ContentManager';

/*
 * This file defines shared resources that are used in functions
 */

// Shared config
export const PACKAGE_NAME = functions.config().app.package_name;

// Shared Managers
export const playBilling = PlayBilling.fromServiceAccount(serviceAccountPlay, firebase.app());
export const instanceIdManager = new InstanceIdManager(firebase.app());
export const contentManager = new ContentManager();

// Shared verification functions
// Verify if the user making the call has signed in
export function verifyAuthentication(context: functions.https.CallableContext) {
  if (!context.auth)
    throw new functions.https.HttpsError('unauthenticated', 'Unauthorized Access');
}

// Verify if the user making the call has a valid instanceId token
export function verifyInstanceIdToken(context: functions.https.CallableContext) {
  if (!context.instanceIdToken) {
    throw new functions.https.HttpsError('invalid-argument', 'No Instance Id specified')
  }
}
