// Import the functions you need from the SDKs you need
import  { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn741uJ2LyqXfRVx9mBgC8dVQO-komYuE",
  authDomain: "nest-study.firebaseapp.com",
  projectId: "nest-study",
  storageBucket: "nest-study.appspot.com",
  messagingSenderId: "682610857830",
  appId: "1:682610857830:web:6deac25826f19b2b0e5aa7",
  measurementId: "G-53782NS2S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();  

export { db };