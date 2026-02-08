document.addEventListener('DOMContentLoaded', () => {
    // Login Form Handling
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput ? emailInput.value.toLowerCase() : '';
            const btn = loginForm.querySelector('button[type="submit"]');

            if (btn) {
                const originalText = btn.innerText;
                btn.innerText = "Signing in...";
                btn.disabled = true;

                setTimeout(() => {
                    // Vendor Flow (supports 'vendor' or 'seller')
                    if (email.includes('vendor') || email.includes('seller')) {
                        sessionStorage.setItem('userType', 'vendor');
                        sessionStorage.setItem('userName', 'Golden Grain');
                        window.location.href = 'vendor/dashboard.html';
                    }
                    // Inspector Flow
                    else if (email.includes('inspector') || email.includes('admin') || email.includes('officer')) {
                        sessionStorage.setItem('userType', 'inspector');
                        sessionStorage.setItem('userName', 'NEA Officer');
                        window.location.href = 'inspector/inspector-dashboard.html';
                    }
                    // Customer Flow
                    else {
                        sessionStorage.setItem('userType', 'customer');
                        sessionStorage.setItem('userName', 'John Doe');
                        window.location.href = 'customer/home.html';
                    }
                }, 1000);
            }
        });
    }

    // Toggle Auth Mode (Login <-> Sign Up)
    const toggleAuthBtn = document.getElementById('toggleAuth');
    const loginFormTitle = document.querySelector('.logo-area p'); // "Manage your stall..."
    const submitBtn = document.getElementById('submitBtn');
    const accountTypeGroup = document.getElementById('accountTypeGroup');
    const loginActions = document.getElementById('loginActions');

    let isSignup = false;

    if (toggleAuthBtn) {
        toggleAuthBtn.addEventListener('click', (e) => {
            e.preventDefault();
            isSignup = !isSignup;

            // Update UI
            if (isSignup) {
                // Switch to Sign Up
                loginFormTitle.textContent = "Create your account";
                acc5ountTypeGroup.style.display = 'block';
                loginActions.style.display = 'none';
                submitBtn.textContent = "Create Account";
                submitBtn.innerText = "Create Account"; // Force update
                toggleAuthBtn.textContent = "Log In";
                toggleAuthBtn.parentElement.innerHTML = 'Already have an account? <a href="#" id="toggleAuth">Log In</a>';

                // Re-bind listener for the new toggle button
                const newToggle = document.getElementById('toggleAuth');
                if (newToggle) {
                    newToggle.addEventListener('click', (ev) => {
                        ev.preventDefault();
                        window.location.reload();
                    });
                }
            } else {
                // Switch to Login
                loginFormTitle.textContent = "Manage your stall with ease.";
                accountTypeGroup.style.display = 'none';
                loginActions.style.display = 'flex';
                submitBtn.textContent = "Log In";
                toggleAuthBtn.textContent = "Sign Up";
            }
        });
    }

    // Better Toggle Logic
    const footerText = document.querySelector('.auth-footer');
    if (footerText) {
        footerText.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                isSignup = !isSignup;

                if (isSignup) {
                    loginFormTitle.textContent = "Create an account";
                    accountTypeGroup.style.display = 'block';
                    loginActions.style.display = 'none';
                    submitBtn.textContent = "Create Account";
                    footerText.innerHTML = 'Already have an account? <a href="#">Log In</a>';
                } else {
                    loginFormTitle.textContent = "Manage your stall with ease.";
                    accountTypeGroup.style.display = 'none';
                    loginActions.style.display = 'flex';
                    submitBtn.textContent = "Log In";
                    footerText.innerHTML = 'Don\'t have an account? <a href="#">Sign Up</a>';
                }
            }
        });
    }

    // Modal Handling (Global)
    window.showModal = function (id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.add('active');
    }

    window.closeModal = function (id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.remove('active');
    }
});
