// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaOj3QOjksRZyvT3inYWFTbYkVmfSEdPI",
  authDomain: "memory-game-4e780.firebaseapp.com",
  projectId: "memory-game-4e780",
  storageBucket: "memory-game-4e780.appspot.com",
  messagingSenderId: "557302160716",
  appId: "1:557302160716:web:2f02d9a50a3cf46b1703e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
