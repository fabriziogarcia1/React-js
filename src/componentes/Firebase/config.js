// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEo42FjZS_9aks_vCCiZLNF3PzaAtJ0lE",
  authDomain: "cineblack-d29fc.firebaseapp.com",
  projectId: "cineblack-d29fc",
  storageBucket: "cineblack-d29fc.appspot.com",
  messagingSenderId: "650885926145",
  appId: "1:650885926145:web:57abc130d27279f33d5f00",
  measurementId: "G-8PBR871YT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);