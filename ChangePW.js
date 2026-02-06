function isStrongPassword(pw) {
  const hasMinLen = pw.length >= 8;
  const hasUpper = /[A-Z]/.test(pw);
  const hasLower = /[a-z]/.test(pw);
  const hasNumber = /[0-9]/.test(pw);
  return hasMinLen && hasUpper && hasLower && hasNumber;
}

function toggleInputType(inputEl, btnEl) {
  const isHidden = inputEl.type === "password";
  inputEl.type = isHidden ? "text" : "password";

  btnEl.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".cp-form");
  const currentInput = document.getElementById("current");
  const newInput = document.getElementById("new");
  const confirmInput = document.getElementById("confirm");

  document.querySelectorAll(".eye-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;
      toggleInputType(input, btn);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const currentPw = currentInput.value.trim();
    const newPw = newInput.value.trim();
    const confirmPw = confirmInput.value.trim();

    if (!currentPw || !newPw || !confirmPw) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPw !== confirmPw) {
      alert("New password and confirm password do not match.");
      return;
    }

    if (!isStrongPassword(newPw)) {
      alert("Password must be at least 8 characters and include upper, lower, and a number.");
      return;
    }

    alert("Password updated successfully! (Demo)");

    currentInput.value = "";
    newInput.value = "";
    confirmInput.value = "";

    [currentInput, newInput, confirmInput].forEach((inp) => (inp.type = "password"));
    document.querySelectorAll(".eye-btn").forEach((btn) =>
      btn.setAttribute("aria-label", "Show password")
    );
  });
});
