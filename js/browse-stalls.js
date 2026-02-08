document.addEventListener('DOMContentLoaded', function () {
  var stallsSection = document.querySelector('section.stalls');
  var searchInput = document.querySelector('.search-bar input');
  var cartBtn = document.querySelector('.cart');

  function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderStalls(stalls) {
    if (!stallsSection) return;
    stallsSection.innerHTML = '';
    if (!Array.isArray(stalls) || stalls.length === 0) return;

    stalls.forEach(function (stall) {
      var name = stall.stallName || 'Stall';
      var time = stall.stallTime || '';
      var rating = stall.stallRating || '';
      var desc = stall.stallDesc || '';
      var imgSrc = stall.image || '';
      var stallID = stall.stallID || '';

      var card = document.createElement('div');
      card.className = 'stall-card';
      card.setAttribute('data-stall-url', stallID ? '../customer/stall-menu.html?stall=' + encodeURIComponent(stallID) : '');
      card.setAttribute('data-stall-id', stallID);
      card.style.cursor = stallID ? 'pointer' : '';

      var imgAlt = escapeHtml(name);
      var imgTag = '<img src="' + (imgSrc || '').replace(/"/g, '&quot;') + '" alt="' + imgAlt + '" onerror="this.style.display=\'none\'">';
      card.innerHTML =
        imgTag +
        '<div class="stall-info">' +
        '<h4>' + escapeHtml(name) + '</h4>' +
        (time ? '<p>' + escapeHtml(time) + '</p>' : '') +
        (rating ? '<p>' + escapeHtml(rating) + '</p>' : '') +
        '</div>';

      stallsSection.appendChild(card);
    });
  }

  // Load stalls from Firestore and render
  if (typeof StallsDB !== 'undefined') {
    StallsDB.getAll()
      .then(function (stalls) {
        console.log('Stalls:', stalls);
        renderStalls(stalls);
      })
      .catch(function (err) {
        console.error('Failed to load stalls:', err);
      });
  }

  // Search: show stalls whose name contains the search term (works with dynamic cards)
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var keyword = searchInput.value.toLowerCase().trim();
      var cards = document.querySelectorAll('section.stalls .stall-card');
      cards.forEach(function (card) {
        var nameEl = card.querySelector('h4');
        var name = nameEl ? nameEl.textContent.toLowerCase() : '';
        var show = keyword === '' || name.indexOf(keyword) !== -1;
        card.style.display = show ? '' : 'none';
      });
    });
  }

  // Click stall card (delegated): go to stall menu if data-stall-url is set
  if (stallsSection) {
    stallsSection.addEventListener('click', function (e) {
      var card = e.target.closest('.stall-card');
      if (!card) return;
      var url = card.getAttribute('data-stall-url');
      if (url) {
        window.location.href = url;
      } else {
        var stallName = card.querySelector('h4');
        alert('You selected: ' + (stallName ? stallName.textContent : 'this stall') + '. Menu coming soon!');
      }
    });
  }

  if (cartBtn) {
    cartBtn.addEventListener('click', function () {
      alert('Cart page coming soon!');
    });
  }
});
