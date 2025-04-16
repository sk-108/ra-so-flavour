// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADwyrYP14H4GgH20TPdSGCX17uAWM44OI",
  authDomain: "raso-flavors.firebaseapp.com",
  projectId: "raso-flavors",
  storageBucket: "raso-flavors.firebasestorage.app",
  messagingSenderId: "725893361151",
  appId: "1:725893361151:web:5c45fc3b0b53b15aea0bca",
  measurementId: "G-52ZHE2Z1SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // ✅ This is what you're importing

const analytics = getAnalytics(app);

export { app, auth };