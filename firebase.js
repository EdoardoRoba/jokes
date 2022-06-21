// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqofw3WItOEN7g4nT33cbRMF42rlbQZ0w",
    authDomain: "menace-tracker.firebaseapp.com",
    projectId: "menace-tracker",
    storageBucket: "menace-tracker.appspot.com",
    messagingSenderId: "108826919897",
    appId: "1:108826919897:web:756d8841e7efa3668f4fc8",
    measurementId: "G-JKDECFVQKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore()