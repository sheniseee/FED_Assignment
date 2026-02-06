function onlyDigits(str) {
  return str.replace(/\D/g, "");
}

function formatCardNumber(value) {
  const digits = onlyDigits(value).slice(0, 16); // max 16 digits
  // group into 4s
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value) {
  const digits = onlyDigits(value).slice(0, 4); // MMYY
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + "/" + digits.slice(2);
}

function isValidExpiry(mmYY) {
  // Expect MM/YY
  if (!/^\d{2}\/\d{2}$/.test(mmYY)) return false;

  const [mmStr, yyStr] = mmYY.split("/");
  const mm = parseInt(mmStr, 10);
  const yy = parseInt(yyStr, 10);

  if (mm < 1 || mm > 12) return false;

  // Convert YY to 20YY 
  const fullYear = 2000 + yy;

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (fullYear < currentYear) return false;
  if (fullYear === currentYear && mm < currentMonth) return false;

  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".card-form");
  const cardNumberEl = document.getElementById("cardNumber");
  const expiryEl = document.getElementById("expiry");
  const cvcEl = document.getElementById("cvc");

  cardNumberEl.addEventListener("input", () => {
    const formatted = formatCardNumber(cardNumberEl.value);
    cardNumberEl.value = formatted;
  });

  expiryEl.addEventListener("input", () => {
    expiryEl.value = formatExpiry(expiryEl.value);
  });

  cvcEl.addEventListener("input", () => {
    cvcEl.value = onlyDigits(cvcEl.value).slice(0, 3);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cardNumberDigits = onlyDigits(cardNumberEl.value);
    const expiry = expiryEl.value.trim();
    const cvc = cvcEl.value.trim();

    if (!cardNumberDigits || !expiry || !cvc) {
      alert("Please fill in all fields.");
      return;
    }

    if (cardNumberDigits.length !== 16) {
      alert("Card number must be 16 digits.");
      return;
    }

    if (!isValidExpiry(expiry)) {
      alert("Expiry date must be valid and not in the past (MM/YY).");
      return;
    }

    if (!/^\d{3}$/.test(cvc)) {
      alert("CVC/CVV must be 3 digits.");
      return;
    }

    alert("Card saved successfully! (Demo)");

    cardNumberEl.value = "";
    expiryEl.value = "";
    cvcEl.value = "";
  });
});
