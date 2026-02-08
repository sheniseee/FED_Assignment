
// Firebase config (Digital Hawker)

console.log("firebase.js loaded");

const firebaseConfig = {
  apiKey: "AIzaSyBtB5-SjjekUXiAl80c5AQ7cx2VMrXusJw",
  authDomain: "digital-hawker-web.firebaseapp.com",
  projectId: "digital-hawker-web",
  storageBucket: "digital-hawker-web.appspot.com",
  messagingSenderId: "135976498248",
  appId: "1:135976498248:web:0209fb615ccba6810d547d",
  measurementId: "G-L04BJHVL0P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();

// db.enablePersistence().catch((err) => {
  // console.warn("Persistence error:", err.code);
// });


window.db = db;
window.auth = auth;

auth.signInAnonymously()
  .then(() => console.log("Signed in anonymously!", auth.currentUser?.uid))
  .catch((e) => console.error("Anonymous sign-in failed:", e.code, e.message));

console.log("Firebase connected");
