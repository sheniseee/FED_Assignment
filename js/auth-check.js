/**
 * auth-check.js
 * Simulates a "firewall" by checking if the user is logged in as a Vendor.
 * Should be included in the <head> of all /vendor/ pages.
 */
(function () {
    // Check if we are in a browser environment
    if (typeof window === 'undefined') return;

    const userType = sessionStorage.getItem('userType');

    // BYPASS LOGIN CHECK for development/request
    // Instead of redirecting, we ensure the user is "logged in" as a vendor automatically.

    if (userType !== 'vendor') {
        console.log('Auto-logging in as Vendor (Login Feature Disabled)');
        sessionStorage.setItem('userType', 'vendor');
    }
})();
