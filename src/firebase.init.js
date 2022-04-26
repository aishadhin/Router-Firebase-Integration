// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADrR3gtFAg7WVa6j8WaYffZdBGdGHvqsU",
  authDomain: "router-firebase-integrat-e8c5e.firebaseapp.com",
  projectId: "router-firebase-integrat-e8c5e",
  storageBucket: "router-firebase-integrat-e8c5e.appspot.com",
  messagingSenderId: "658639348671",
  appId: "1:658639348671:web:c43909b860b9485d62f70a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;