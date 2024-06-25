const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Mengatur event listener untuk mendeteksi perubahan dalam posisi scroll
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");

  // Memeriksa posisi scroll
  if (window.scrollY > 50) {
    // Ubah angka 50 sesuai dengan tinggi navbar yang diinginkan
    navbar.classList.add("scrolling-active");
  } else {
    navbar.classList.remove("scrolling-active");
  }
});
