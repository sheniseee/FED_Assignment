function parsePrice(text) {
  if (!text) return 0;
  const cleaned = String(text).replace(/[^\d.]/g, '');
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : 0;
}

function formatMoney(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num.toFixed(2) : '0.00';
}

document.addEventListener('DOMContentLoaded', () => {
  const overlayEl = document.querySelector('.overlay');
  const popupEl = document.querySelector('.popup');
  const popupCardEl = document.querySelector('.popup-card');

  const popupImgEl = popupEl?.querySelector('img');
  const popupTitleEl = popupEl?.querySelector('.popup-info h4');
  const popupDescEl = popupEl?.querySelector('.popup-info > p');
  const popupScrollEl = popupEl?.querySelector('.popup-scroll');

  const qtyEl = popupEl?.querySelector('.quantity span');
  const qtyButtons = popupEl?.querySelectorAll('.quantity .qty-btn') ?? [];
  const addCartBtn = popupEl?.querySelector('.add-cart');

  const cartItemsEl = document.querySelector('.cart-items');
  const cartEmptyEl = document.querySelector('.cart-empty');
  const totalPriceEl = document.getElementById('totalPrice');

  if (!overlayEl || !popupEl || !popupCardEl || !popupScrollEl || !cartItemsEl || !cartEmptyEl || !totalPriceEl) {
    console.warn('order-customisation.js: missing required elements');
    return;
  }

  let currentItem = null;
  let currentQty = 1;
  /** @type {Array<{ name: string, unitPrice: number, qty: number, addons: Array<{ label: string, price: number }> }>} */
  const cart = [];

  function setQty(nextQty) {
    currentQty = Math.max(1, Number(nextQty) || 1);
    if (qtyEl) qtyEl.textContent = String(currentQty);
  }

  /** Get selected add-on checkboxes from popup scroll area; parse price from label text like "(+$2.50)" */
  function getSelectedAddons(container) {
    if (!container) return [];
    const addons = [];
    container.querySelectorAll('input[type="checkbox"]:checked').forEach((cb) => {
      const label = cb.closest('label');
      const text = label ? label.textContent || '' : '';
      const price = parsePrice(text);
      const labelOnly = text.replace(/\s*\(\+\$[\d.]+\)\s*$/i, '').trim() || text.trim();
      addons.push({ label: labelOnly, price });
    });
    return addons;
  }

  function buildCustomisationHtml(itemName) {
    const name = (itemName || '').toLowerCase();

    if (name.includes('chicken rice')) {
      return `
        <div class="option-group">
          <h5>Choice of Preparation</h5>
          <p class="sub">Choose 1 option</p>
          <label><input type="radio" name="prep"> Steamed</label>
          <label><input type="radio" name="prep"> Roasted</label>
          <label><input type="radio" name="prep"> Mixed (Steamed & Roasted)</label>
        </div>
        <div class="option-group">
          <h5>Choice of Extras</h5>
          <p class="sub">Optional</p>
          <label><input type="checkbox"> Extra Chicken Wing (+$2.50)</label>
          <label><input type="checkbox"> Extra Drumstick (+$3.00)</label>
          <label><input type="checkbox"> Additional Rice (+$1.50)</label>
          <label><input type="checkbox"> Extra Chilli & Ginger (+$0.50)</label>
        </div>
        <div class="option-group">
          <h5>Special Requests</h5>
          <textarea placeholder="No chilli, more sauce, boneless, etc."></textarea>
        </div>
      `;
    }

    if (name.includes('char siew')) {
      return `
        <div class="option-group">
          <h5>Choice of Cut</h5>
          <p class="sub">Choose 1 option</p>
          <label><input type="radio" name="prep"> Lean</label>
          <label><input type="radio" name="prep"> Half Lean, Half Fat</label>
          <label><input type="radio" name="prep"> More Fatty</label>
        </div>
        <div class="option-group">
          <h5>Choice of Base</h5>
          <p class="sub">Choose 1 option</p>
          <label><input type="radio" name="base"> Rice</label>
          <label><input type="radio" name="base"> Noodles</label>
          <label><input type="radio" name="base"> No Carbs (meat only)</label>
        </div>
        <div class="option-group">
          <h5>Extras</h5>
          <p class="sub">Optional</p>
          <label><input type="checkbox"> Extra Char Siew (+$2.00)</label>
          <label><input type="checkbox"> Add Roasted Pork Belly (+$2.50)</label>
          <label><input type="checkbox"> Braised Egg (+$1.00)</label>
        </div>
        <div class="option-group">
          <h5>Special Requests</h5>
          <textarea placeholder="More char siew sauce, less fat, etc."></textarea>
        </div>
      `;
    }

    if (name.includes('hor fun')) {
      return `
        <div class="option-group">
          <h5>Noodle Texture</h5>
          <p class="sub">Choose 1 option</p>
          <label><input type="radio" name="prep"> Softer</label>
          <label><input type="radio" name="prep"> Normal</label>
          <label><input type="radio" name="prep"> Extra Wok-Hei (more char)</label>
        </div>
        <div class="option-group">
          <h5>Gravy Level</h5>
          <p class="sub">Choose 1 option</p>
          <label><input type="radio" name="gravy"> Less Gravy</label>
          <label><input type="radio" name="gravy"> Normal</label>
          <label><input type="radio" name="gravy"> Extra Gravy</label>
        </div>
        <div class="option-group">
          <h5>Extras</h5>
          <p class="sub">Optional</p>
          <label><input type="checkbox"> Extra Chicken (+$2.00)</label>
          <label><input type="checkbox"> Add Prawns (+$3.00)</label>
          <label><input type="checkbox"> Add Vegetables (+$1.20)</label>
        </div>
        <div class="option-group">
          <h5>Special Requests</h5>
          <textarea placeholder="Less oily, no beansprouts, etc."></textarea>
        </div>
      `;
    }

    if (name.includes('pork belly')) {
      return `
        <div class="option-group">
          <h5>Cut Preference</h5>
          <p class="sub">Choose 1 option</p>
          <label><input type="radio" name="prep"> More Lean</label>
          <label><input type="radio" name="prep"> Balanced Lean/Fat</label>
          <label><input type="radio" name="prep"> Extra Crispy Skin</label>
        </div>
        <div class="option-group">
          <h5>Choice of Base</h5>
          <p class="sub">Choose 1 option</p>
          <label><input type="radio" name="base"> White Rice</label>
          <label><input type="radio" name="base"> Chicken Rice</label>
          <label><input type="radio" name="base"> No Rice (meat only)</label>
        </div>
        <div class="option-group">
          <h5>Extras</h5>
          <p class="sub">Optional</p>
          <label><input type="checkbox"> Extra Pork Belly (+$3.00)</label>
          <label><input type="checkbox"> Braised Egg (+$1.00)</label>
          <label><input type="checkbox"> Pickled Vegetables (+$1.20)</label>
        </div>
        <div class="option-group">
          <h5>Special Requests</h5>
          <textarea placeholder="More crispy parts, less fat, etc."></textarea>
        </div>
      `;
    }

    // Fallback for any other future items
    return `
      <div class="option-group">
        <h5>Customisation</h5>
        <p class="sub">Add any extras at the stall</p>
        <label><input type="checkbox"> Extra meat</label>
        <label><input type="checkbox"> Extra vegetables</label>
        <label><input type="checkbox"> Extra sauce/gravy</label>
      </div>
      <div class="option-group">
        <h5>Special Requests</h5>
        <textarea placeholder="No chilli, allergies, cooking preference, etc."></textarea>
      </div>
    `;
  }

  function openPopup(item) {
    currentItem = item;
    setQty(1);

    if (popupImgEl && item.imageSrc) popupImgEl.src = item.imageSrc;
    if (popupImgEl && item.imageAlt) popupImgEl.alt = item.imageAlt;
    if (popupTitleEl) popupTitleEl.textContent = item.name || 'Menu Item';
    if (popupDescEl) popupDescEl.textContent = item.desc || '';
    if (popupScrollEl) popupScrollEl.innerHTML = buildCustomisationHtml(item.name);

    overlayEl.classList.add('active');
    popupEl.classList.add('active');
    overlayEl.setAttribute('aria-hidden', 'false');
    popupEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup-open');
  }

  function closePopup() {
    overlayEl.classList.remove('active');
    popupEl.classList.remove('active');
    overlayEl.setAttribute('aria-hidden', 'true');
    popupEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
    currentItem = null;
  }

  function renderCart() {
    cartItemsEl.innerHTML = '';

    let total = 0;
    let totalQty = 0;

    for (const line of cart) {
      const addonsTotal = (line.addons || []).reduce((sum, a) => sum + a.price, 0);
      const unitTotal = (line.unitPrice || 0) + addonsTotal;
      const lineTotal = unitTotal * line.qty;
      total += lineTotal;
      totalQty += line.qty;

      const addonsHtml = (line.addons && line.addons.length > 0)
        ? line.addons.map(a => `<div class="cart-item-addon">+ ${a.label} (+$${formatMoney(a.price)})</div>`).join('')
        : '';

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item-left">
          <div class="cart-item-name">${line.name}</div>
          ${addonsHtml}
          <div class="cart-item-meta">x${line.qty}</div>
        </div>
        <span>$${formatMoney(lineTotal)}</span>
      `;
      cartItemsEl.appendChild(row);
    }

    cartEmptyEl.style.display = totalQty > 0 ? 'none' : '';
    totalPriceEl.textContent = formatMoney(total);
  }

  // Open popup from + buttons on stall cards
  document.querySelectorAll('.stall-card .add').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.stall-card');
      if (!card) return;

      const name = card.querySelector('.stall-info h4')?.textContent?.trim() || 'Menu Item';
      const desc = card.querySelector('.stall-info p')?.textContent?.trim() || '';
      const priceText = card.querySelector('.stall-price p')?.textContent || '';
      const unitPrice = parsePrice(priceText);

      const img = card.querySelector('img');
      const imageSrc = img?.getAttribute('src') || '';
      const imageAlt = img?.getAttribute('alt') || name;

      openPopup({ name, desc, unitPrice, imageSrc, imageAlt });
    });
  });

  // Close popup when clicking overlay or pressing ESC
  overlayEl.addEventListener('click', closePopup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupEl.classList.contains('active')) {
      closePopup();
    }
  });

  // Prevent clicks inside modal from closing it
  popupCardEl.addEventListener('click', (e) => e.stopPropagation());
  popupEl.addEventListener('click', closePopup);

  // Quantity buttons
  qtyButtons.forEach((b) => {
    b.addEventListener('click', () => {
      const label = (b.textContent || '').trim();
      if (label === '+') setQty(currentQty + 1);
      else setQty(currentQty - 1);
    });
  });

  // Add to cart (include selected add-ons and their prices)
  addCartBtn?.addEventListener('click', () => {
    if (!currentItem) return;

    const addons = getSelectedAddons(popupScrollEl);
    cart.push({
      name: currentItem.name,
      unitPrice: currentItem.unitPrice || 0,
      qty: currentQty,
      addons
    });

    renderCart();
    closePopup();
  });

  // Checkout: go to order confirmation only if cart has items
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

  // Initial state
  closePopup();
  renderCart();

  // If we came from stall-menu (add button): open popup with that item and overlay
  try {
    var stored = sessionStorage.getItem('pendingCustomisationItem');
    if (stored) {
      var item = JSON.parse(stored);
      sessionStorage.removeItem('pendingCustomisationItem');
      if (item && item.name) openPopup(item);
    }
  } catch (e) {}
});

