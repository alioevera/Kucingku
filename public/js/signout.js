import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const auth = getAuth();
document.getElementById("sign-out-btn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      history.pushState(null, null, "login.html");
      history.go(0);
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
});
