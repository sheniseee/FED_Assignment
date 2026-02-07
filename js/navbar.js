document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────
     1. USER DROPDOWN TOGGLE (logged-in only)
     ────────────────────────────────────────────── */
  const userDropdown = document.querySelector('.user-dropdown');
  const userToggle = document.querySelector('.user-toggle');
  const navbar = document.querySelector('.navbar');
  const mobileMenu = document.querySelector('.mobile-menu') || document.querySelector('.mobile-nav-menu'); // Handling both references
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
        <li><a href="${isLoggedIn ? 'dashboard.html' : 'index.html'}" class="active">Home</a></li>
        <li><a href="orders.html">Order</a></li>
        <li><a href="incoming-orders.html">Order History</a></li>
        <li><a href="${isLoggedIn ? 'contact-us.html' : 'contact-us.html'}">Contact Us</a></li>
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

    return menu;
  }

  /* ──────────────────────────────────────────────
     5. NOTIFICATION BUTTON (demo interaction)
     ────────────────────────────────────────────── */
  const notificationBtn = document.querySelector('.btn-notification');

  if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
      window.location.href = 'notifications.html';
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
