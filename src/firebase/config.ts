// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcZLnv9_zYovftDe3hKgeLJaUV_CL2Ij4",
  authDomain: "medabotsapp.firebaseapp.com",
  projectId: "medabotsapp",
  storageBucket: "medabotsapp.appspot.com",
  messagingSenderId: "393361048239",
  appId: "1:393361048239:web:801f2c88267f8fd7f58a5a",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
