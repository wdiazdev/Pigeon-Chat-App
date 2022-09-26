import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC9of5c1L6W_ADiWVqeZ7I6vJkC20IZFdA",
    authDomain: "pigeon-chat-b0897.firebaseapp.com",
    projectId: "pigeon-chat-b0897",
    storageBucket: "pigeon-chat-b0897.appspot.com",
    messagingSenderId: "623270989707",
    appId: "1:623270989707:web:4db709efb9c3ea4392298e",
    measurementId: "G-SMWVCJQ4KL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
