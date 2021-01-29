Classy Taxi: Google Play Billing Subscriptions Server Sample
=====================================================

This is the Node.js server that manages subscriptions for the ClassyTaxi
[Android](https://github.com/android/play-billing-samples/tree/master/ClassyTaxiAppKotlin) and
[web](https://github.com/android/play-billing-samples/tree/master/ClassyTaxiAppWeb) app.

![Classy Taxi animation GIF showing subscription features of Google Play Billing](../ClassyTaxiAppKotlin/classy_taxi_animation.gif)

# Deploy Backend Server

**Before deploying the backend server, you should make sure you've completed the steps to
[setup the Play Developer Console](https://github.com/android/play-billing-samples/tree/master/ClassyTaxiAppKotlin#play-developer-console-setup).**

1. Make sure you have installed Node.js, npm, and Firebase CLI

    * [https://firebase.google.com/docs/cli/](https://firebase.google.com/docs/cli/)

1. Run `npm install` to install dependencies

1. Configure Cloud Functions for Firebase with your Android app and subscription products

    ```
       firebase use --add {your_firebase_project_id}

       firebase functions:config:set app.package_name="your_android_application_id"

       firebase functions:config:set app.basic_plan_sku="basic_subscription"

       firebase functions:config:set app.premium_plan_sku="premium_subscription"
    ```

1. Install Node packages

    ```
        cd {project_folder}/ClassyTaxiServer
        npm install
    ```

1. Run `firebase deploy` to deploy your backend to Cloud Functions for Firebase
