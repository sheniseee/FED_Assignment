// ==========================================
// LOGIN & SIGNUP TOGGLE FUNCTIONALITY
// ==========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const loginForm = document.getElementById('loginForm');
    const toggleAuthLink = document.getElementById('toggleAuth');
    const submitBtn = document.getElementById('submitBtn');
    const accountTypeGroup = document.getElementById('accountTypeGroup');
    const loginActions = document.getElementById('loginActions');
    const passwordInput = document.getElementById('password');
    const passwordError = passwordInput.nextElementSibling;
    
    // Track current mode (true = login, false = signup)
    let isLoginMode = true;
    
    // ==========================================
    // TOGGLE BETWEEN LOGIN & SIGNUP
    // ==========================================
    
    toggleAuthLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Toggle mode
        isLoginMode = !isLoginMode;
        
        if (isLoginMode) {
            // Switch to LOGIN mode
            switchToLoginMode();
        } else {
            // Switch to SIGNUP mode
            switchToSignupMode();
        }
        
        // Clear form
        loginForm.reset();
        hideAllErrors();
    });
    
    function switchToLoginMode() {
        // Hide account type dropdown
        accountTypeGroup.style.display = 'none';
        
        // Show "Remember me" and "Forget Password"
        loginActions.style.display = 'flex';
        
        // Change button text
        submitBtn.textContent = 'Log In';
        
        // Update logo subtitle
        const subtitle = document.querySelector('.logo-area p');
        subtitle.textContent = 'Login to your account';
        
        // Update toggle link
        const authFooter = document.querySelector('.auth-footer');
        authFooter.innerHTML = 'Don\'t have an account? <a href="#" id="toggleAuth">Sign Up</a>';
        
        // Re-attach event listener to new link
        const newToggleLink = document.getElementById('toggleAuth');
        newToggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            isLoginMode = false;
            switchToSignupMode();
            loginForm.reset();
            hideAllErrors();
        });
    }
    
    function switchToSignupMode() {
        // Show account type dropdown
        accountTypeGroup.style.display = 'block';
        
        // Hide "Remember me" and "Forget Password"
        loginActions.style.display = 'none';
        
        // Change button text
        submitBtn.textContent = 'Sign Up';
        
        // Update logo subtitle
        const subtitle = document.querySelector('.logo-area p');
        subtitle.textContent = 'Create your account';
        
        // Update toggle link
        const authFooter = document.querySelector('.auth-footer');
        authFooter.innerHTML = 'Already have an account? <a href="#" id="toggleAuth">Log In</a>';
        
        // Re-attach event listener to new link
        const newToggleLink = document.getElementById('toggleAuth');
        newToggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            isLoginMode = true;
            switchToLoginMode();
            loginForm.reset();
            hideAllErrors();
        });
    }
    
    // ==========================================
    // FORM VALIDATION
    // ==========================================
    
    // Real-time password validation
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        
        if (password.length > 0 && password.length < 8) {
            passwordError.style.display = 'block';
            passwordInput.style.borderColor = 'red';
        } else {
            passwordError.style.display = 'none';
            passwordInput.style.borderColor = '#d4d4d4';
        }
    });
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show error message
    function showError(message) {
        // Remove existing error if any
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = 'background: #f8d7da; color: #721c24; padding: 12px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #f5c6cb; font-size: 14px;';
        errorDiv.textContent = message;
        
        // Insert at top of form
        loginForm.insertBefore(errorDiv, loginForm.firstChild);
        
        // Remove after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
    
    // Show success message
    function showSuccess(message) {
        // Remove existing messages
        const existingMessage = document.querySelector('.error-message, .success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = 'background: #d4edda; color: #155724; padding: 12px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #c3e6cb; font-size: 14px;';
        successDiv.textContent = message;
        
        // Insert at top of form
        loginForm.insertBefore(successDiv, loginForm.firstChild);
        
        // Remove after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    // Hide all error messages
    function hideAllErrors() {
        const messages = document.querySelectorAll('.error-message, .success-message');
        messages.forEach(msg => msg.remove());
        passwordError.style.display = 'none';
        passwordInput.style.borderColor = '#d4d4d4';
    }
    
    // ==========================================
    // FORM SUBMISSION
    // ==========================================
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const accountType = document.getElementById('accountType').value;
        
        // Validate email
        if (!email) {
            showError('Please enter your email address');
            return;
        }
        
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        // Validate password
        if (!password) {
            showError('Please enter your password');
            return;
        }
        
        if (password.length < 8) {
            showError('Password must be at least 8 characters long');
            return;
        }
        
        // Handle LOGIN
        if (isLoginMode) {
            console.log('Login attempt:', { email, password });
            
            // Simulate API call
            showSuccess('Login successful! Redirecting...');
            
            // Simulate redirect after 2 seconds
            setTimeout(() => {
                alert('Login successful! In a real app, you would be redirected to the dashboard.');
                // window.location.href = '/dashboard.html';
            }, 2000);
        } 
        // Handle SIGNUP
        else {
            console.log('Signup attempt:', { email, password, accountType });
            
            // Simulate API call
            showSuccess('Account created successfully! Redirecting to login...');
            
            // Switch to login mode after 2 seconds
            setTimeout(() => {
                loginForm.reset();
                switchToLoginMode();
                isLoginMode = true;
                showSuccess('Welcome! Please log in with your new account.');
            }, 2000);
        }
    });
    
    // ==========================================
    // GOOGLE SIGN-IN BUTTON
    // ==========================================
    
    const googleBtn = document.querySelector('.google-btn');
    
    googleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Google Sign-In clicked');
        
        // In a real app, this would trigger Google OAuth
        alert('Google Sign-In integration coming soon!\n\nIn a real application, this would redirect you to Google\'s OAuth page.');
        
        // Simulate Google OAuth flow
        // window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?...';
    });
    
    // ==========================================
    // FORGOT PASSWORD LINK
    // ==========================================
    
    const forgotPassLink = document.querySelector('.forgot-pass');
    
    if (forgotPassLink) {
        forgotPassLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            
            if (!email) {
                showError('Please enter your email address first');
                return;
            }
            
            if (!isValidEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }
            
            // Simulate password reset
            console.log('Password reset requested for:', email);
            showSuccess('Password reset link sent to ' + email);
            
            // In a real app, send password reset email
            // fetch('/api/password-reset', { method: 'POST', body: JSON.stringify({ email }) })
        });
    }
    
    // ==========================================
    // REMEMBER ME FUNCTIONALITY
    // ==========================================
    
    const rememberCheckbox = document.querySelector('input[type="checkbox"]');
    
    // Load saved email on page load
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }
    
    // Save email when form is submitted
    loginForm.addEventListener('submit', function() {
        if (isLoginMode && rememberCheckbox && rememberCheckbox.checked) {
            const email = document.getElementById('email').value;
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    });
    
    // ==========================================
    // KEYBOARD SHORTCUTS
    // ==========================================
    
    // Press Enter to submit form
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && document.activeElement.tagName !== 'BUTTON') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
    
    // ==========================================
    // SMOOTH TRANSITIONS
    // ==========================================
    
    // Add transition to account type group
    accountTypeGroup.style.transition = 'all 0.3s ease';
    loginActions.style.transition = 'all 0.3s ease';
    
    console.log('Auth system initialized successfully! 🚀');
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// You can add more utility functions here as needed
// For example: form validation, API calls, etc.