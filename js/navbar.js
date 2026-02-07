document.addEventListener('DOMContentLoaded', function () {
  var userToggle = document.querySelector('.user-toggle');
  var userDropdown = document.querySelector('.user-dropdown');
  if (userToggle && userDropdown) {
    userToggle.addEventListener('click', function () {
      userDropdown.classList.toggle('open');
    });
  }

  var navToggle = document.querySelector('.nav-toggle');
  var navbar = document.querySelector('.navbar');
  if (navToggle && navbar) {
    navToggle.addEventListener('click', function () {
      navbar.classList.toggle('open');
    });
  }
});