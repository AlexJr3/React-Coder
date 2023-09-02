// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5dOTKLnrlnkrQMsYBcaTv6iqysRnKdjk",
  authDomain: "proyectofinalreact-3c900.firebaseapp.com",
  projectId: "proyectofinalreact-3c900",
  storageBucket: "proyectofinalreact-3c900.appspot.com",
  messagingSenderId: "283186783931",
  appId: "1:283186783931:web:6b3109e0bb3363468b2b9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
