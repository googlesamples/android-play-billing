/**
 * Copyright 2020 Google LLC. All Rights Reserved.
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

import * as functions from 'firebase-functions';

import { getPlayDeveloperApiClient } from '../../utils/PlayDevelopperApi';
import { unityManager } from '../shared'

const SUCCESSFUL_CODE: number = 200;

export const register_user = functions.https.onRequest(async (request, response) => {
  response.send(await unityManager.registerUser(request.body.userId));
});

export const save_game_data = functions.https.onRequest(async (request, response) => {
  response.send(await unityManager.saveGameData(request.body.userId, request.body.gameData));
});

export const get_game_data = functions.https.onRequest(async (request, response) => {
  response.send(await unityManager.getGameData(request.body.userId));
});
