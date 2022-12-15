import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";

import { IFirebaseConfig } from "../interfaces";

const firebaseConfig: IFirebaseConfig = {
    apiKey: "AIzaSyCCjKri81PxTcVnIRf7kgM-Zs8euYx4a0g",
    authDomain: "electro-shop-68daa.firebaseapp.com",
    projectId: "electro-shop-68daa",
    storageBucket: "electro-shop-68daa.appspot.com",
    messagingSenderId: "532846954153",
    appId: "1:532846954153:web:baa8171b52ff5e729c0bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const firestoreCartDB = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();