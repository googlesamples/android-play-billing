import { google } from 'googleapis';
import * as key from '../keys/lastKey.json'; // JSON key file

const authClient = new google.auth.JWT({
  email: "key.client_email",
  key: "key.private_key",
  scopes: ["https://www.googleapis.com/auth/androidpublisher"]
});

const androidpublisher =  google.androidpublisher({
  version: 'v3',
  auth: authClient
});

export async function getPlayDeveloperApiClient(){
  await authClient.authorize();
  return androidpublisher;
}
