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

import { google } from 'googleapis'
import PurchaseManager from './PurchasesManager';

/*
 * This is the main class exposing features of the library to its consumers.
 */
export default class PlayBilling {
  private purchaseManager: PurchaseManager;

  /*
   * The library needs two things to be initialized:
   *  - A Play Developer API client, which will be used to access Play Developer API
   *  - A Firebase app, of which its Firestore database will be used to store purchase records
   * The library is capable of handling multiple Android apps' purchases from a single backend.
   */
  private constructor(private playDeveloperApiClient: any) {
    //Initialize our own PurchaseManager and UserManager
    this.purchaseManager = new PurchaseManager(this.playDeveloperApiClient);
  }

  /*
   * A class to access user-purchase linking features
   */
  purchases(): PurchaseManager {
    return this.purchaseManager;
  }


  /*
   * Library initialization with a service account to access Play Developer API and an initialized FirebaseApp.
   * Library consumer should use this method to initialize the library.
   */
  static fromServiceAccount(playApiServiceAccount: any): PlayBilling {
    // Initialize Google Play Developer API client
    const jwtClient = new google.auth.JWT(
      playApiServiceAccount.client_email,
      undefined,
      playApiServiceAccount.private_key,
      ['https://www.googleapis.com/auth/androidpublisher'], // Auth scope for Play Developer API
      undefined
    );
    const playDeveloperApiClient = google.androidpublisher({
      version: 'v3',
      auth: jwtClient
    });

    return this.fromApiClient(playDeveloperApiClient);
  }

  /*
   * Library initialization with a Play Developer API client object, and an initialized FirebaseApp.
   * This method is mainly to provide a convenient way to stub Play Developer API client for automated testing.
   * Library consumer shouldn't use this method, unless they understand what they are doing.
   */
  static fromApiClient(playDeveloperApiClient: any): PlayBilling {
    return new PlayBilling(playDeveloperApiClient);
  }
}
