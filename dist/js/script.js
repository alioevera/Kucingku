const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBcI_ZXUaJBhHw_x78_3ZpH1R3CZOJEqrY",
  authDomain: "user-kucingku.firebaseapp.com",
  projectId: "user-kucingku",
  storageBucket: "user-kucingku.appspot.com",
  messagingSenderId: "676085758005",
  appId: "1:676085758005:web:8268ac3dc19bc7f517197c",
  measurementId: "G-M3EJJF58KK",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Select the navbar element
const navbar = document.querySelector(".navbar");

// Add event listener to handle scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Adjust the scroll position as needed
    navbar.classList.add("scrolling-active");
  } else {
    navbar.classList.remove("scrolling-active");
  }
});

// Select the "Daftar" button
const daftarButton = document.querySelector(".daftar button");

// Add event listener to handle button click
daftarButton.addEventListener("click", () => {
  // Redirect to login.html when "Daftar" button is clicked
  window.location.href = "login.html";
});

// Add event listener to handle authentication state change
auth.onAuthStateChanged((user) => {
  if (user) {
    // If user is logged in, hide the "Daftar" button
    daftarButton.style.display = "none";
  } else {
    // If user is not logged in, show the "Daftar" button
    daftarButton.style.display = "block";
  }
});
