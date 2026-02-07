document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────
     1. USER DROPDOWN TOGGLE (logged-in only)
     ────────────────────────────────────────────── */
  const userDropdown = document.querySelector('.user-dropdown');
  const userToggle   = document.querySelector('.user-toggle');

  if (userDropdown && userToggle) {
    userToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('open');
    });
  }

  /* ──────────────────────────────────────────────
     3. CLOSE DROPDOWNS ON OUTSIDE CLICK
     ────────────────────────────────────────────── */
  document.addEventListener('click', (e) => {
    // Close user dropdown
    if (userDropdown && !userDropdown.contains(e.target)) {
      userDropdown.classList.remove('open');
    }

    // Close mobile menu when clicking a link
    if (mobileMenu && e.target.closest('.mobile-menu a')) {
      navbar.classList.remove('menu-open');
      mobileMenu.classList.remove('open');
    }
  });

  /* ──────────────────────────────────────────────
     4. CLOSE ON ESCAPE KEY
     ────────────────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (userDropdown) userDropdown.classList.remove('open');
      if (mobileMenu) {
        navbar.classList.remove('menu-open');
        mobileMenu.classList.remove('open');
      }
    }
  });

  /* ──────────────────────────────────────────────
     5. TOGGLE MOBILE MENU
     ────────────────────────────────────────────── */
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('.navbar');
  const mobileMenu = createMobileMenu();

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      navbar.classList.toggle('menu-open');
      mobileMenu.classList.toggle('open');
    });
  }

  /* ──────────────────────────────────────────────
     HELPER: Create Mobile Menu
     ────────────────────────────────────────────── */
  function createMobileMenu() {
    const menu = document.createElement('div');
    menu.className = 'mobile-menu';

    // Determine if logged in
    const isLoggedIn = document.body.classList.contains('logged-in');
    const homeLink = isLoggedIn ? 'index-logged-in.html' : 'index.html';

    menu.innerHTML = `
      <ul>
        <li><a href="${homeLink}" class="active">Home</a></li>
        <li><a href="order.html">Order</a></li>
        <li><a href="order-history.html">Order History</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
      ${!isLoggedIn ? `
        <div class="mobile-auth">
          <a href="login.html" class="btn-login">Log In</a>
          <a href="signup.html" class="btn-signup">Sign Up</a>
        </div>
      ` : `
        <div class="mobile-auth">
          <a href="profile.html" class="btn-login">My Profile</a>
          <a href="index.html" class="btn-signup">Log Out</a>
        </div>
      `}
    `;
    document.body.appendChild(menu);
    return menu;
  }

  /* ──────────────────────────────────────────────
     6. NOTIFICATION BUTTON (demo interaction)
     ────────────────────────────────────────────── */
  const notificationBtn = document.querySelector('.btn-notification');

  if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
      // Demo: remove badge on click
      const badge = notificationBtn.querySelector('.notification-badge');
      if (badge) {
        badge.style.display = 'none';
      }
      // In a real app, this would open a notifications panel
      alert('Notifications panel coming soon!');
    });
  }

});
