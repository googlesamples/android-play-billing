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

// Possile errors when attempt to query a purchase using Play Developer API and purchase records stored in Firestore
export enum PurchaseQueryError {
  INVALID_TOKEN = 'InvalidToken',
  OTHER_ERROR = 'OtherError'
}

// Possile errors when attempt to register / transfer a purchase to an user
export enum PurchaseUpdateError {
  INVALID_TOKEN = 'InvalidToken',
  CONFLICT = 'Conflict', // happens when attempt to register a purchase that has been registered before
  OTHER_ERROR = 'OtherError'
}