import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAriRv3BRff1Cv_9he533aseRbPHDqTHRU",
    authDomain: "fed-assignment-66836.firebaseapp.com",
    projectId: "fed-assignment-66836",
    storageBucket: "fed-assignment-66836.firebasestorage.app",
    messagingSenderId: "1002337470342",
    appId: "1:1002337470342:web:fa15df1372dbe7ca5c8e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication and Database instances
export const auth = getAuth(app);
export const db = getFirestore(app);