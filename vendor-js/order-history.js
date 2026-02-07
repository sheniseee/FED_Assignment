document.addEventListener('DOMContentLoaded', function () {
  // Reorder buttons can be wired here (e.g. go to stall menu or order page)
  document.querySelectorAll('.btn-reorder').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Example: window.location.href = 'browse-stalls.html';
    });
  });
});