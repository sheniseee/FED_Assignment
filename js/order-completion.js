document.addEventListener('DOMContentLoaded', function () {
  var stars = document.querySelectorAll('.stars .star');
  var starsContainer = document.querySelector('.stars');
  var submitBtn = document.querySelector('.submit-btn');
  var textarea = document.querySelector('textarea');
  var reportLink = document.querySelector('.report');

  var rating = 0; // 0 = none selected, 1-5 = stars filled

  function setStars(highlightUpTo) {
    stars.forEach(function (star, i) {
      star.classList.toggle('active', i < highlightUpTo);
    });
  }

  function applyRating() {
    setStars(rating);
  }

  // Click: set rating and keep stars yellow up to that star
  stars.forEach(function (star, i) {
    star.addEventListener('click', function () {
      rating = i + 1;
      applyRating();
    });
  });

  // Hover: preview rating (show yellow up to hovered star), restore on leave
  stars.forEach(function (star, i) {
    star.addEventListener('mouseenter', function () {
      setStars(i + 1);
    });
  });
  if (starsContainer) {
    starsContainer.addEventListener('mouseleave', function () {
      applyRating();
    });
  }

  // Submit: show thank you and redirect (or just alert)
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      if (rating === 0) {
        alert('Please select a star rating first.');
        return;
      }
      var feedback = textarea ? textarea.value.trim() : '';
      alert('Thank you for your ' + rating + '-star rating!' + (feedback ? '\nWe received your feedback.' : ''));
      window.location.href = '../customer/order-summary.html';
    });
  }

  // Report an issue: e.g. go to contact page
  if (reportLink) {
    reportLink.style.cursor = 'pointer';
    reportLink.addEventListener('click', function () {
      window.location.href = '../customer/contact.html';
    });
  }
});
