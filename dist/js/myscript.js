// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcI_ZXUaJBhHw_x78_3ZpH1R3CZOJEqrY",
  authDomain: "user-kucingku.firebaseapp.com",
  projectId: "user-kucingku",
  storageBucket: "user-kucingku.appspot.com",
  messagingSenderId: "676085758005",
  appId: "1:676085758005:web:8268ac3dc19bc7f517197c",
  measurementId: "G-M3EJJF58KK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Sign up function
document.getElementById("button_signup").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email_signup").value;
  const password = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User signed up:", user);
      alert("Sign up successful! Welcome, " + user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
      alert(`Sign up failed: ${errorMessage}`);
    });
});

// Sign in function
document.getElementById("button_signin").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email_signin").value;
  const password = document.getElementById("psw_signin").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
      alert("Sign in successful! Welcome , " + user.email);
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
      alert(`Sign in failed: ${errorMessage}`);
    });
});
