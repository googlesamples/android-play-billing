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
import * as serviceAccountPlay from "../keys/dummyKey.json";
var Verifier = require('google-play-billing-validator');

const FIRESTORE_USERS_COLLECTION = 'users';
const FIRESTORE_PURCHASES_COLLECTION = 'purchases';

enum SkuType {
  ONE_TIME = 'inapp',
  SUBS = 'subs'
}
/* UnityManager is part of Model layer.
 * It manages request of users from the unity sample game.
 */
export class UnityManager {
  private usersCollectionReference: FirebaseFirestore.CollectionReference;
  private purchasesCollectionReference: FirebaseFirestore.CollectionReference;
  private verifier: any;


  constructor(firebaseApp: firebase.app.App) {
    this.usersCollectionReference = firebaseApp.firestore().collection(FIRESTORE_USERS_COLLECTION);
    this.purchasesCollectionReference = firebaseApp.firestore().collection(FIRESTORE_PURCHASES_COLLECTION);
    this.verifier = new Verifier({
      email: serviceAccountPlay.client_email,
      key: serviceAccountPlay.private_key
    });
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
        if (doc.exists && doc.data() ?.gameData !== undefined && doc.data() ?.gameData !== "") {
          return new UnityStatus(true, "", doc.data() ?.gameData);
        }
        return new UnityStatus(false, "User is not registered in the database");
      }).catch(error => {
        return new UnityStatus(false, error);
      });
  }

  async checkSubscriptionPriceChange(userId: string): Promise<UnityStatus> {
    return this.usersCollectionReference.doc(userId).collection("subscription").doc("receipt").get()
      .then(doc => {
        if (doc.exists) {
          const receipt = {
            packageName: doc.data() ?.packageName,
            productId: doc.data() ?.productId,
            purchaseToken: doc.data() ?.purchaseToken
          }

          return this.verifier.verifySub(receipt).then((result: any) => {
            console.log(result.payload);
            if (result.payload.priceChange !== undefined && result.payload.priceChange.state === 0) {
              return new UnityStatus(true, "Subscription price change and has not been accepted by user");
            } else {
              return new UnityStatus(false, "Subscription price has not change or has been accepted by user");
            }
          }).catch((error: any) => {
            return new UnityStatus(false, error);
          });
        } else {
          return new UnityStatus(false, "No active subscription");
        }
      }).catch(error => {
        return new UnityStatus(false, error);
      });
  }

  async verifyAndSavePurchase(userId: string, jsonReceipt: string): Promise<UnityStatus> {
    const purchaseInformation = this.getReceiptAndPurchaseType(jsonReceipt);

    if (purchaseInformation.purchaseType === SkuType.ONE_TIME) {
      return this.verifier.verifyINAPP(purchaseInformation.receipt).then(() => {
        return this.verifyPurchaseAndSaveInDB(userId, purchaseInformation.receipt);
      }).catch((error: any) => {
        return new UnityStatus(false, error.errorMessage);
      });
    } else {
      return this.verifier.verifySub(purchaseInformation.receipt).then(async () => {
        const unityStatus = await this.verifyPurchaseAndSaveInDB(userId, purchaseInformation.receipt);
        if (unityStatus.success) {
          return this.saveSubscriptionTokenInUsers(userId, purchaseInformation.receipt);
        }
        return unityStatus;
      }).catch((error: any) => {
        return new UnityStatus(false, error.errorMessage);
      });
    }
  }

  async saveSubscriptionTokenInUsers(userId: string, receipt: any): Promise<UnityStatus> {
    return this.usersCollectionReference.doc(userId).collection("subscription").doc("receipt").set(receipt).then(() => {
      return new UnityStatus(true, "Save in database");
    }).catch(error => {
      return new UnityStatus(false, error);
    });
  }

  async verifyPurchaseAndSaveInDB(userId: string, receipt: any): Promise<UnityStatus> {
    receipt.userId = userId;
    const tokenCall = this.purchasesCollectionReference.doc(receipt.purchaseToken);

    return tokenCall.get()
      .then(purchaseToken => {
        if (!purchaseToken.exists) {
          return tokenCall.set(receipt)
            .then(() => {
              return new UnityStatus(true, "Save in database");
            }).catch(error => {
              return new UnityStatus(false, error);
            });
        }
        return new UnityStatus(false, "Purchase token already exists in the database");
      })
      .catch(error => {
        return new UnityStatus(false, error);
      });
  }

  private getReceiptAndPurchaseType(jsonReceipt: string) {
    const receipt = JSON.parse(this.getReceiptData(jsonReceipt));
    return { receipt: receipt, purchaseType: this.getPurchaseType(receipt.productId) }
  }

  private getPurchaseType(productId: string) {
    if (productId.includes('subscription')) {
      return SkuType.SUBS;
    }
    else {
      return SkuType.ONE_TIME;
    }
  }

  private getReceiptData(receipt: string) {
    let receiptInfo = receipt;
    receiptInfo = receiptInfo.replace(/\\/g, '');
    return receiptInfo.slice(receiptInfo.search("orderId") - 2, receiptInfo.search("signature") - 3);
  }
}
