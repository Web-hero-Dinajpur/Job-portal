// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_apiKey.import.meta.env.VITE_apiKey,
  authDomain: VITE_authDomain.import.meta.env.VITE_authDomain,
  projectId: VITE_projectId.import.meta.env.VITE_projectId,
  storageBucket: VITE_storageBucket.import.meta.env.VITE_storageBucket,
  messagingSenderId: VITE_messagingSenderId.import.meta.env.VITE_messagingSenderId,
  appId: VITE_appId.import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;