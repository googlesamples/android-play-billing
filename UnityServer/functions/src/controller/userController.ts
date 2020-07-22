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
import * as admin from 'firebase-admin';
import { getPlayDeveloperApiClient } from '../utils/PlayDevelopperApi';

const db = admin.firestore();
const SUCCESSFUL_CODE: number = 200;

export const register_user = functions.https.onRequest(async (request, response) => {
  const confirmation = {
    registered: true
  };

  db.collection("users").doc(request.body.userId).set(confirmation, { merge: true })
    .then(() => {
      response.send({ success: true, reason: "" });
    }).catch(error => {
      response.send({ success: false, reason: error });
    });
});

export const save_game_data = functions.https.onRequest(async (request, response) => {
  const gameData = {
    gameData: request.body.gameData
  };

  db.collection("users").doc(request.body.userId).set(gameData, { merge: true })
    .then(() => {
      response.send({ success: true, reason: "" });
    }).catch(error => {
      response.send({ success: false, reason: error });
    });
});

export const get_game_data = functions.https.onRequest(async (request, response) => {
  db.collection("users").doc(request.body.userId).get()
    .then(doc => {
      if (doc.exists && doc.data() ?.gameData !== undefined && doc.data() ?.gameData !== "") {
        response.send({ success: true, reason: "", result: doc.data() ?.gameData });
      } else {
        response.send({ success: false, reason: "User is not registered in the database" });
      }
    }).catch(error => {
      response.send({ success: false, reason: error });
    });
});

export const verify_and_save_purchase_token = functions.https.onRequest(async (request, response) => {
  const receipt = JSON.parse(request.body.receipt);

  verify_with_developer_api(receipt.packageName, receipt.productId, receipt.purchaseToken, request.body.isSubscription)
    .then(() => {
      const result = verify_in_database_and_save(request.body.userId, receipt)
      if (result) {
        response.send({ success: true, reason: "Token is valid and is saved" });
      } else {
        response.send({ success: false, reason: "Token was not saved" });
      }
    }).catch(error => {
      console.log(error);
      response.send({ success: true, reason: error });
    });
});

async function verify_in_database_and_save(userId: string, receipt: any) {
  receipt.userId = userId;
  const tokenCall = db.collection("purchases").doc(receipt.purchaseToken);

  console.log(receipt);

  tokenCall.get()
    .then(purchaseToken => {
      if (!purchaseToken.exists) {
        tokenCall.set(receipt)
          .then(() => {
            return true;
          }).catch(() => {
            return false;
          });
        return;
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
}

async function verify_with_developer_api(packageName: string, productId: string, purchaseToken: string, isSubscription: boolean) {
  if (isSubscription) {
    return verify_purchase(packageName, productId, purchaseToken);
  }
  else {
    return verify_subscriptions(packageName, productId, purchaseToken);
  }
}


async function verify_purchase(packageName: string, productId: string, purchaseToken: string) {
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

    if (result.status === 200) {
      console.log("Play developer api call to get product is successful");
      return true;
    }
  } catch (error) {
    throw error;
  }
  throw Error('Error in play developer api call');
}

async function verify_subscriptions(packageName: string, productId: string, purchaseToken: string) {
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
