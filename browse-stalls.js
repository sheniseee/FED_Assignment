import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";



// Get all stall cards
const stallCards = document.querySelectorAll(".stall-card");

stallCards.forEach(card => {
  card.addEventListener("click", () => {
    const stallName = card.querySelector("h4").innerText;
    alert("You selected: " + stallName);
  });
});
const searchInput = document.querySelector(".search-bar input");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();

  stallCards.forEach(card => {
    const name = card.querySelector("h4").innerText.toLowerCase();

    if (name.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", () => {
  alert("Cart page coming soon!");
});
