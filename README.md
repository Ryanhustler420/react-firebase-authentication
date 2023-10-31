# React Firebase Authentication

Creating a simple React app with Firebase Authentication for login and registration, along with a protected page, is a common use case. Here's a step-by-step guide to build a minimal version of such an app:

1. Set Up a New React App

   ```bash
   npx create-react-app firebase-auth-demo
   cd firebase-auth-demo
   ```

2. Install Firebase

   ```bash
   npm install firebase
   ```

3. Set Up Firebase Configuration

   - In your Firebase project, go to Project settings, and under the "General" tab, scroll down to find your Firebase SDK snippet. Click on "Config" to reveal your Firebase configuration settings. Copy the configuration object.

   - Create a new file src/firebase.js and paste your Firebase configuration into it. It should look something like this:

   ```javascript
   import firebase from "firebase/app";
   import "firebase/auth";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   firebase.initializeApp(firebaseConfig);

   export default firebase;
   ```

   - Replace the placeholders with your actual Firebase project configuration.
