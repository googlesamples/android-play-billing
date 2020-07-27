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
import { getPlayDeveloperApiClient } from "../utils/PlayDevelopperApi";

const FIRESTORE_USERS_COLLECTION = 'users';
const FIRESTORE_USERS_PURCHASES_COLLECTION = 'purchases';
const SUCCESSFUL_CODE: number = 200;

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

    return this.usersCollectionReference.doc(userId).set(valuesToSave, { merge: true })
      .then(() => {
        return new UnityStatus(true);
      }).catch(error => {
        return new UnityStatus(false, error);
      });
  }

  async saveGameData(userId: string, gameData: string): Promise<UnityStatus> {
    const valuesToSave = {
      gameData: gameData
    };

    return this.usersCollectionReference.doc(userId).set(valuesToSave, { merge: true })
      .then(() => {
        return new UnityStatus(true);
      }).catch(error => {
        return new UnityStatus(false, error);
      });
  }

  async getGameData(userId: string): Promise<UnityStatus> {
    return this.usersCollectionReference.doc(userId).get()
      .then(doc => {
        if (doc.exists && doc.data().gameData !== undefined && doc.data().gameData !== "") {
          return new UnityStatus(true, "", doc.data().gameData);
        }
        return new UnityStatus(false, "User is not registered in the database");
      }).catch(error => {
        return new UnityStatus(false, error);
      });
  }

  async verifyAndSavePurchaseToken(userId: string, jsonReceipt: string): Promise<UnityStatus> {
    const receipt = JSON.parse(this.getReceiptData(jsonReceipt));

    return this.verifyWithDeveloperApi(receipt.packageName, receipt.productId, receipt.purchaseToken)
      .then(() => {
        const result = this.VerifyInDatabaseAndSave(userId, receipt);
        if (result) {
          return new UnityStatus(true, "Token is valid and is saved");
        }
        return new UnityStatus(false, "Token was not saved");
      }).catch(error => {
        return new UnityStatus(false, error);
      });
  }

  private async VerifyInDatabaseAndSave(userId: string, receipt: any) {
    receipt.userId = userId;
    const tokenCall = this.usersPurchasesCollectionReference.doc(receipt.purchaseToken);

    console.log(receipt);

    tokenCall.get()
      .then(purchaseToken => {
        if (!purchaseToken.exists) {
          return tokenCall.set(receipt)
            .then(() => {
              return true;
            }).catch(() => {
              return false;
            });
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  }

  private async  verifyWithDeveloperApi(packageName: string, productId: string, purchaseToken: string) {
    if (productId.includes('subscription')) {
      return this.verifyPurchase(packageName, productId, purchaseToken);
    }
    else {
      return this.verifySubscription(packageName, productId, purchaseToken);
    }
  }


  private async verifyPurchase(packageName: string, productId: string, purchaseToken: string) {
    try {
      const playDeveloperApiClient = await getPlayDeveloperApiClient();
      const result = await playDeveloperApiClient.purchases.products.get({
        // The package name of the application the inapp product was sold in (for
        // example, 'com.some.thing').
        packageName: packageName,
        // The inapp product SKU (for example, 'com.some.thing.inapp1').
        productId: productId,
        // The token provided to the user's device when the inapp product was
        // purchased.
        token: purchaseToken,
      });

      if (result.status === SUCCESSFUL_CODE) {
        console.log("Play developer api call to get product is successful");
        return true;
      }
    } catch (error) {
      throw error;
    }
    throw Error('Error in play developer api call');
  }

  private async verifySubscription(packageName: string, productId: string, purchaseToken: string) {
    try {
      const playDeveloperApiClient = await getPlayDeveloperApiClient();
      const result = await playDeveloperApiClient.purchases.subscriptions.get({

        // The package name of the application the inapp product was sold in (for
        // example, 'com.some.thing').
        packageName: packageName,
        // The inapp product SKU (for example, 'com.some.thing.inapp1').
        subscriptionId: productId,
        // The token provided to the user's device when the inapp product was
        // purchased.
        token: purchaseToken,
      });

      if (result.status === SUCCESSFUL_CODE) {
        console.log("Play developer api call to get subscription is successful");
        return true;
      }
    } catch (error) {
      throw error;
    }
    throw Error('Error in play developer api call');
  }

  private getReceiptData(receipt: string) {
    let receiptInfo = receipt;
    receiptInfo = receiptInfo.replace('\\', '');
    return receiptInfo.slice(receiptInfo.search("orderId") - 2, receiptInfo.search("signature") - 3);
  }
}
