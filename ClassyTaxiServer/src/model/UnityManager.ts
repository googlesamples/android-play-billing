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

import * as firebase from "firebase-admin";
import { UnityStatus } from "./UnityStatus";

const FIRESTORE_USERS_COLLECTION = 'users'
const FIRESTORE_USERS_PURCHASES_COLLECTION = 'purchases'

/* UnityManager is part of Model layer.
 * It manages request of users from the unity sample game.
 */
export class UnityManager {
  private usersCollectionReference: FirebaseFirestore.CollectionReference;
  private usersPurchasesCollectionReference: FirebaseFirestore.CollectionReference;

  constructor(firebaseApp: firebase.app.App) {
    this.usersCollectionReference = firebaseApp.firestore().collection(FIRESTORE_USERS_COLLECTION)
    this.usersPurchasesCollectionReference = firebaseApp.firestore().collection(FIRESTORE_USERS_PURCHASES_COLLECTION)
  }

  async registerUser(userId: string): Promise<UnityStatus> {
    const valuesToSave = {
      registered: true
    };

    let result = this.usersCollectionReference.doc(userId).set(valuesToSave, { merge: true })
      .then(() => {
        return new UnityStatus(true, "", "");
      }).catch(error => {
        return new UnityStatus(false, error, "");
      });
    return result;
  }

  async saveGameData(userId: string, gameData: string): Promise<UnityStatus> {
    const valuesToSave = {
      gameData: gameData
    };

    let result = this.usersCollectionReference.doc(userId).set(valuesToSave, { merge: true })
      .then(() => {
        return new UnityStatus(true, "", "");
      }).catch(error => {
        return new UnityStatus(false, error, "");
      });
    return result;
  }

  async getGameData(userId: string): Promise<UnityStatus> {
    let result = this.usersCollectionReference.doc(userId).get()
      .then(doc => {
        if (doc.exists && doc.data().gameData !== undefined && doc.data().gameData !== "") {
          return new UnityStatus(true, "", doc.data().gameData);
        }
        return new UnityStatus(false, "User is not registered in the database", "");
      }).catch(error => {
        return new UnityStatus(false, error, "");
      });
    return result;
  }


}
