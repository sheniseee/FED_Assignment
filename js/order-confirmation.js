document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('orderDateTime');
  if (el) {
    el.textContent = new Date().toLocaleString('en-SG', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  }
});
