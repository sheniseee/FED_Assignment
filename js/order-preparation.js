document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('orderDateTime');
  if (el) {
    el.textContent = new Date().toLocaleString('en-SG', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  }

  // Progress bar: step messages and line colour
  var steps = document.querySelectorAll('.progress .step');
  var lines = document.querySelectorAll('.progress .line');
  var statusEl = document.getElementById('statusText');
  var messages = [
    'The stall is preparing your order',
    'Your order is nearly done! Head to the stall now',
    'Your order is done! Please collect it'
  ];
  var delayMs = 3500;

  function setStep(index) {
    steps.forEach(function (s, i) {
      s.classList.toggle('active', i <= index);
    });
    lines.forEach(function (line, i) {
      line.classList.toggle('active', i < index);
    });
    if (statusEl) statusEl.textContent = messages[index];
  }

  setStep(0);
  setTimeout(function () { setStep(1); }, delayMs);
  setTimeout(function () { setStep(2); }, delayMs * 2);

  // Collected button: go to order completion
  var collectedBtn = document.querySelector('.collected-btn');
  if (collectedBtn) {
    collectedBtn.addEventListener('click', function () {
      window.location.href = '../customer/order-completion.html';
    });
  }
});
