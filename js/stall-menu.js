// Stall ID from URL (e.g. ?stall=01) or default '01'
function getStallIdFromUrl() {
  var params = new URLSearchParams(window.location.search);
  return params.get('stall') || '01';
}
const STALL_ID = getStallIdFromUrl();

// Load stall name and description from StallsDB for banner
if (typeof StallsDB !== 'undefined') {
  StallsDB.getByStallId(STALL_ID)
    .then(function (stall) {
      var nameEl = document.getElementById('stallName');
      var descEl = document.getElementById('stallDesc');
      if (nameEl) nameEl.textContent = stall ? (stall.stallName || 'Stall') : 'Stall';
      if (descEl) descEl.textContent = stall ? (stall.stallDesc || '') : '';
    })
    .catch(function () {
      var nameEl = document.getElementById('stallName');
      var descEl = document.getElementById('stallDesc');
      if (nameEl) nameEl.textContent = 'Stall';
      if (descEl) descEl.textContent = '';
    });
}

function formatPrice(value) {
  var n = Number(value);
  if (!Number.isFinite(n)) return '$0.00';
  return '$' + (n % 1 === 0 ? n : n.toFixed(2));
}

function parsePrice(text) {
  if (!text) return 0;
  var cleaned = String(text).replace(/[^\d.]/g, '');
  var value = Number(cleaned);
  return Number.isFinite(value) ? value : 0;
}

function formatMoney(value) {
  var num = Number(value);
  return Number.isFinite(num) ? num.toFixed(2) : '0.00';
}

document.addEventListener('DOMContentLoaded', function () {
  var overlayEl = document.querySelector('.overlay');
  var popupEl = document.querySelector('.popup');
  var popupCardEl = document.querySelector('.popup-card');
  var popupImgEl = popupEl ? popupEl.querySelector('img') : null;
  var popupTitleEl = popupEl ? popupEl.querySelector('.popup-info h4') : null;
  var popupDescEl = popupEl ? popupEl.querySelector('.popup-info > p') : null;
  var popupScrollEl = popupEl ? popupEl.querySelector('.popup-scroll') : null;
  var qtyEl = popupEl ? popupEl.querySelector('.quantity span') : null;
  var qtyButtons = popupEl ? popupEl.querySelectorAll('.quantity .qty-btn') : [];
  var addCartBtn = popupEl ? popupEl.querySelector('.add-cart') : null;
  var cartItemsEl = document.querySelector('.cart-items');
  var cartEmptyEl = document.querySelector('.cart-empty');
  var totalPriceEl = document.getElementById('totalPrice');

  var currentItem = null;
  var currentQty = 1;
  var cart = [];
  var allMenuItems = [];
  var selectedCategory = 'All';

  function setQty(nextQty) {
    currentQty = Math.max(1, Number(nextQty) || 1);
    if (qtyEl) qtyEl.textContent = String(currentQty);
  }

  function getSelectedAddons(container) {
    if (!container) return [];
    var addons = [];
    container.querySelectorAll('input[type="checkbox"]:checked').forEach(function (cb) {
      var label = cb.closest('label');
      var text = label ? label.textContent || '' : '';
      var price = parsePrice(text);
      var labelOnly = text.replace(/\s*\(\+\$[\d.]+\)\s*$/i, '').trim() || text.trim();
      addons.push({ label: labelOnly, price: price });
    });
    return addons;
  }

  function buildCustomisationHtml(itemName) {
    var name = (itemName || '').toLowerCase();
    if (name.indexOf('chicken rice') !== -1) {
      return '<div class="option-group"><h5>Choice of Preparation</h5><p class="sub">Choose 1 option</p><label><input type="radio" name="prep"> Steamed</label><label><input type="radio" name="prep"> Roasted</label><label><input type="radio" name="prep"> Mixed (Steamed & Roasted)</label></div><div class="option-group"><h5>Choice of Extras</h5><p class="sub">Optional</p><label><input type="checkbox"> Extra Chicken Wing (+$2.50)</label><label><input type="checkbox"> Extra Drumstick (+$3.00)</label><label><input type="checkbox"> Additional Rice (+$1.50)</label><label><input type="checkbox"> Extra Chilli & Ginger (+$0.50)</label></div><div class="option-group"><h5>Special Requests</h5><textarea placeholder="No chilli, more sauce, boneless, etc."></textarea></div>';
    }
    if (name.indexOf('char siew') !== -1) {
      return '<div class="option-group"><h5>Choice of Cut</h5><p class="sub">Choose 1 option</p><label><input type="radio" name="prep"> Lean</label><label><input type="radio" name="prep"> Half Lean, Half Fat</label><label><input type="radio" name="prep"> More Fatty</label></div><div class="option-group"><h5>Choice of Base</h5><p class="sub">Choose 1 option</p><label><input type="radio" name="base"> Rice</label><label><input type="radio" name="base"> Noodles</label><label><input type="radio" name="base"> No Carbs (meat only)</label></div><div class="option-group"><h5>Extras</h5><p class="sub">Optional</p><label><input type="checkbox"> Extra Char Siew (+$2.00)</label><label><input type="checkbox"> Add Roasted Pork Belly (+$2.50)</label><label><input type="checkbox"> Braised Egg (+$1.00)</label></div><div class="option-group"><h5>Special Requests</h5><textarea placeholder="More char siew sauce, less fat, etc."></textarea></div>';
    }
    if (name.indexOf('hor fun') !== -1) {
      return '<div class="option-group"><h5>Noodle Texture</h5><p class="sub">Choose 1 option</p><label><input type="radio" name="prep"> Softer</label><label><input type="radio" name="prep"> Normal</label><label><input type="radio" name="prep"> Extra Wok-Hei (more char)</label></div><div class="option-group"><h5>Gravy Level</h5><p class="sub">Choose 1 option</p><label><input type="radio" name="gravy"> Less Gravy</label><label><input type="radio" name="gravy"> Normal</label><label><input type="radio" name="gravy"> Extra Gravy</label></div><div class="option-group"><h5>Extras</h5><p class="sub">Optional</p><label><input type="checkbox"> Extra Chicken (+$2.00)</label><label><input type="checkbox"> Add Prawns (+$3.00)</label><label><input type="checkbox"> Add Vegetables (+$1.20)</label></div><div class="option-group"><h5>Special Requests</h5><textarea placeholder="Less oily, no beansprouts, etc."></textarea></div>';
    }
    if (name.indexOf('pork belly') !== -1) {
      return '<div class="option-group"><h5>Cut Preference</h5><p class="sub">Choose 1 option</p><label><input type="radio" name="prep"> More Lean</label><label><input type="radio" name="prep"> Balanced Lean/Fat</label><label><input type="radio" name="prep"> Extra Crispy Skin</label></div><div class="option-group"><h5>Choice of Base</h5><p class="sub">Choose 1 option</p><label><input type="radio" name="base"> White Rice</label><label><input type="radio" name="base"> Chicken Rice</label><label><input type="radio" name="base"> No Rice (meat only)</label></div><div class="option-group"><h5>Extras</h5><p class="sub">Optional</p><label><input type="checkbox"> Extra Pork Belly (+$3.00)</label><label><input type="checkbox"> Braised Egg (+$1.00)</label><label><input type="checkbox"> Pickled Vegetables (+$1.20)</label></div><div class="option-group"><h5>Special Requests</h5><textarea placeholder="More crispy parts, less fat, etc."></textarea></div>';
    }
    return '<div class="option-group"><h5>Customisation</h5><p class="sub">Add any extras at the stall</p><label><input type="checkbox"> Extra meat</label><label><input type="checkbox"> Extra vegetables</label><label><input type="checkbox"> Extra sauce/gravy</label></div><div class="option-group"><h5>Special Requests</h5><textarea placeholder="No chilli, allergies, cooking preference, etc."></textarea></div>';
  }

  function openPopup(item) {
    currentItem = item;
    setQty(1);
    if (popupImgEl && item.imageSrc) popupImgEl.src = item.imageSrc;
    if (popupImgEl && item.imageAlt) popupImgEl.alt = item.imageAlt;
    if (popupTitleEl) popupTitleEl.textContent = item.name || 'Menu Item';
    if (popupDescEl) popupDescEl.textContent = item.desc || '';
    if (popupScrollEl) popupScrollEl.innerHTML = buildCustomisationHtml(item.name);
    if (overlayEl) overlayEl.classList.add('active');
    if (popupEl) popupEl.classList.add('active');
    if (overlayEl) overlayEl.setAttribute('aria-hidden', 'false');
    if (popupEl) popupEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup-open');
  }

  function closePopup() {
    if (overlayEl) overlayEl.classList.remove('active');
    if (popupEl) popupEl.classList.remove('active');
    if (overlayEl) overlayEl.setAttribute('aria-hidden', 'true');
    if (popupEl) popupEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
    currentItem = null;
  }

  function renderCart() {
    if (!cartItemsEl || !cartEmptyEl || !totalPriceEl) return;
    cartItemsEl.innerHTML = '';
    var total = 0;
    var totalQty = 0;
    for (var i = 0; i < cart.length; i++) {
      var line = cart[i];
      var addonsTotal = (line.addons || []).reduce(function (sum, a) { return sum + a.price; }, 0);
      var unitTotal = (line.unitPrice || 0) + addonsTotal;
      var lineTotal = unitTotal * line.qty;
      total += lineTotal;
      totalQty += line.qty;
      var addonsHtml = (line.addons && line.addons.length > 0)
        ? line.addons.map(function (a) { return '<div class="cart-item-addon">+ ' + a.label + ' (+$' + formatMoney(a.price) + ')</div>'; }).join('')
        : '';
      var row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = '<div class="cart-item-left"><div class="cart-item-name">' + line.name + '</div>' + addonsHtml + '<div class="cart-item-meta">x' + line.qty + '</div></div><span>$' + formatMoney(lineTotal) + '</span>';
      cartItemsEl.appendChild(row);
    }
    cartEmptyEl.style.display = totalQty > 0 ? 'none' : '';
    totalPriceEl.textContent = formatMoney(total);
  }

  /** Get unique category strings from menu items (itemCategory can be array or string) */
  function getCategoriesFromItems(items) {
    var set = {};
    if (!Array.isArray(items)) return [];
    items.forEach(function (item) {
      var cat = item.itemCategory;
      if (Array.isArray(cat)) {
        cat.forEach(function (c) {
          if (c && String(c).trim()) set[String(c).trim()] = true;
        });
      } else if (cat && String(cat).trim()) {
        set[String(cat).trim()] = true;
      }
    });
    return Object.keys(set).sort();
  }

  function renderCategoryButtons(items) {
    var container = document.getElementById('categoryButtons');
    if (!container) return;
    container.innerHTML = '';
    var categories = getCategoriesFromItems(items);
    var allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.textContent = 'All';
    allBtn.classList.toggle('active', selectedCategory === 'All');
    allBtn.addEventListener('click', function () {
      selectedCategory = 'All';
      container.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
      allBtn.classList.add('active');
      renderMenu(allMenuItems);
    });
    container.appendChild(allBtn);
    categories.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = cat;
      btn.classList.toggle('active', selectedCategory === cat);
      btn.addEventListener('click', function () {
        selectedCategory = cat;
        container.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderMenu(allMenuItems);
      });
      container.appendChild(btn);
    });
  }

  /** Filter items by selectedCategory (itemCategory is array or string), then render cards */
  function renderMenu(items) {
    var container = document.querySelector('.stalls');
    if (!container) return;
    container.innerHTML = '';
    if (!Array.isArray(items) || items.length === 0) {
      container.innerHTML = '<p class="menu-empty">Menu coming soon!</p>';
      return;
    }
    var filtered = items.filter(function (item) {
      if (selectedCategory === 'All') return true;
      var cat = item.itemCategory;
      if (Array.isArray(cat)) return cat.indexOf(selectedCategory) !== -1;
      return cat === selectedCategory;
    });
    if (filtered.length === 0) {
      container.innerHTML = '<p class="menu-empty">No items in this category.</p>';
      return;
    }
    filtered.forEach(function (item) {
      var name = item.itemName || 'Menu Item';
      var desc = item.itemDesc || '';
      var price = item.itemPrice != null ? item.itemPrice : 0;
      var imgSrc = item.image || '';
      var card = document.createElement('div');
      card.className = 'stall-card';
      card.innerHTML =
        '<img src="' + (imgSrc || '').replace(/"/g, '&quot;') + '" alt="' + (name.replace(/</g, '&lt;').replace(/"/g, '&quot;')) + '">' +
        '<div class="stall-info">' +
        '<h4>' + (name.replace(/</g, '&lt;')) + '</h4>' +
        '<p>' + (desc.replace(/</g, '&lt;')) + '</p>' +
        '<div class="stall-price"><p>' + formatPrice(price) + '</p></div>' +
        '<button class="add" type="button">+</button>' +
        '</div>';
      var addBtn = card.querySelector('.add');
      if (addBtn) {
        addBtn.addEventListener('click', function () {
          openPopup({
            name: name,
            desc: desc,
            unitPrice: price,
            imageSrc: imgSrc,
            imageAlt: name
          });
        });
      }
      container.appendChild(card);
    });
  }

  if (overlayEl) overlayEl.addEventListener('click', closePopup);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popupEl && popupEl.classList.contains('active')) closePopup();
  });
  if (popupCardEl) popupCardEl.addEventListener('click', function (e) { e.stopPropagation(); });
  if (popupEl) popupEl.addEventListener('click', closePopup);

  for (var b = 0; b < qtyButtons.length; b++) {
    qtyButtons[b].addEventListener('click', function () {
      var label = (this.textContent || '').trim();
      if (label === '+') setQty(currentQty + 1);
      else setQty(currentQty - 1);
    });
  }

  if (addCartBtn) {
    addCartBtn.addEventListener('click', function () {
      if (!currentItem) return;
      var addons = getSelectedAddons(popupScrollEl);
      cart.push({
        name: currentItem.name,
        unitPrice: currentItem.unitPrice || 0,
        qty: currentQty,
        addons: addons
      });
      renderCart();
      closePopup();
    });
  }

  var checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function () {
      if (cart.length > 0) {
        window.location.href = '../customer/order-confirmation.html';
      } else {
        alert('Your cart is empty. Add some items first!');
      }
    });
  }

  closePopup();
  renderCart();

  if (typeof MenuDB !== 'undefined') {
    MenuDB.onSnapshotByStall(STALL_ID, function (items) {
      allMenuItems = items || [];
      renderCategoryButtons(allMenuItems);
      renderMenu(allMenuItems);
    });
  }
});
