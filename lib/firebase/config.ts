// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhj9-BvQAwoq4G_T3DA4ElU_Ej_pCmBJ0",
  authDomain: "symptolink.firebaseapp.com",
  projectId: "symptolink",
  storageBucket: "symptolink.firebasestorage.app",
  messagingSenderId: "526254188163",
  appId: "1:526254188163:web:5dfcabdeb47fdaca935db6",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
