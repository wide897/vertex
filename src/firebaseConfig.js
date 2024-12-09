import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBuT9IAzu_MzyHlEdow8H6NuP8-M8KvTTI",
  authDomain: "vertex-final.firebaseapp.com",
  projectId: "vertex-final",
  storageBucket: "vertex-final.firebasestorage.app",
  messagingSenderId: "211878149730",
  appId: "1:211878149730:web:4ec35bad1120bbb4311b3b",
  measurementId: "G-QW6QVK7Y7N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
