// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq1Z2kZoDcuv-BXHrzim_NZqsnIB9fO3Q",
  authDomain: "ai-travel-buddy.firebaseapp.com",
  projectId: "ai-travel-buddy",
  storageBucket: "ai-travel-buddy.appspot.com",
  messagingSenderId: "1072381805018",
  appId: "1:1072381805018:web:5c6750af6e2152263a00e3",
  measurementId: "G-22KSXMTSWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);