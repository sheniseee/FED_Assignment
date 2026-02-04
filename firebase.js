
  // firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyCUF_O-KK0fJQimCvLYMCbgJRCLlCdFBcw",
  authDomain: "fed-assignment-92d6a.firebaseapp.com",
  databaseURL: "https://fed-assignment-92d6a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "fed-assignment-92d6a",
  storageBucket: "fed-assignment-92d6a.firebasestorage.app",
  messagingSenderId: "121213569352",
  appId: "1:121213569352:web:9dfd3f4100638b36e50b7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
