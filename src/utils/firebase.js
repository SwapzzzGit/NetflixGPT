// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhzFPuZ5tu_vJzu1ZHb27T9OWOL1AdBI4",
  authDomain: "netflixgptt.firebaseapp.com",
  projectId: "netflixgptt",
  storageBucket: "netflixgptt.appspot.com",
  messagingSenderId: "898744160932",
  appId: "1:898744160932:web:0a937598ad1c57500ccc31",
  measurementId: "G-4EC50BD1P1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
