// src/lib/firebase.js
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH2ArRPc9o7QZ9Q42MNcNlQZ2g_Z9Ot1E",
  authDomain: "b2m-business.firebaseapp.com",
  databaseURL: "https://b2m-business-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "b2m-business",
  messagingSenderId: "951763166839",
  appId: "1:951763166839:web:4f2d47bc0f7e9c6264c872",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
