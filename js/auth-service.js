import { auth } from './firebase-config.js';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

/**
 * Log in a user with email and password
 * @param {string} email 
 * @param {string} password 
 */
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("Login Error:", error);
        return { success: false, error: error.message };
    }
}

/**
 * Register a new user
 * @param {string} email 
 * @param {string} password 
 */
export async function registerUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("Registration Error:", error);
        return { success: false, error: error.message };
    }
}

/**
 * Log out the current user
 */
export async function logoutUser() {
    try {
        await signOut(auth);
        sessionStorage.removeItem('userType'); // Clear local hack
        window.location.href = '../login.html'; // Adjust path if needed
    } catch (error) {
        console.error("Logout Error:", error);
    }
}

/**
 * Monitor Auth State
 * @param {function} callback - Function to run when auth state changes
 */
export function monitorAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is signed in:", user.uid);
            callback(user);
        } else {
            console.log("User is signed out");
            callback(null);
        }
    });
}
