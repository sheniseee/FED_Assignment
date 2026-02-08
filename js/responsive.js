function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileMenu = document.querySelector('.mobile-nav-menu');

    if (navLinks) {
        // Toggle for standard desktop-hidden navs if reused
        navLinks.classList.toggle('active');
    }

    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }

    if (mobileOverlay) {
        mobileOverlay.classList.toggle('active');
    }
}

// Add event listeners when DOM is loaded to ensure elements exist
document.addEventListener('DOMContentLoaded', () => {
    // Close menu when clicking overlay
    const overlay = document.querySelector('.mobile-nav-overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleMobileMenu);
    }
});

// Sidebar Toggle for Mobile (Used in Vendor Dashboard Pages)
window.toggleMobileNav = function () {
    const nav = document.getElementById('navLinksContainer');
    if (nav) {
        // Toggle display flex/none logic or class
        // Providing a robust toggle
        if (window.getComputedStyle(nav).display === 'none') {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
        nav.classList.toggle('show');
    }
};
