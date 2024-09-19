// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_WEB_API_KEY,
  authDomain: "netflixgpt-92f76.firebaseapp.com",
  projectId: "netflixgpt-92f76",
  storageBucket: "netflixgpt-92f76.appspot.com",
  messagingSenderId: "618420694384",
  appId: "1:618420694384:web:74e74257428edf956a73b5",
  measurementId: "G-Q53KLE3JW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
