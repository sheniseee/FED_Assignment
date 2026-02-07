document.addEventListener('DOMContentLoaded', function () {
  var stallCards = document.querySelectorAll('.stall-card');
  var searchInput = document.querySelector('.search-bar input');
  var cartBtn = document.querySelector('.cart');

  // Search: show stalls whose name contains the search term (e.g. "chicken rice")
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var keyword = searchInput.value.toLowerCase().trim();
      stallCards.forEach(function (card) {
        var nameEl = card.querySelector('h4');
        var name = nameEl ? nameEl.textContent.toLowerCase() : '';
        var show = keyword === '' || name.indexOf(keyword) !== -1;
        card.style.display = show ? '' : 'none';
      });
    });
  }

  // Click stall card: go to stall menu if data-stall-url is set (e.g. Golden Grain -> stall-menu.html)
  stallCards.forEach(function (card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function () {
      var url = card.getAttribute('data-stall-url');
      if (url) {
        window.location.href = url;
      } else {
        var stallName = card.querySelector('h4');
        alert('You selected: ' + (stallName ? stallName.textContent : 'this stall') + '. Menu coming soon!');
      }
    });
  });

  if (cartBtn) {
    cartBtn.addEventListener('click', function () {
      alert('Cart page coming soon!');
    });
  }
});
