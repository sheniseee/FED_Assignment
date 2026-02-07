/* js file for login, sign up and forget password*/

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────
     LOGIN BUTTON HANDLER (login page)
     ────────────────────────────────────────────── */
  const loginBtn = document.getElementById('login-btn');
  
  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      
      // Validation
      let valid = true;
      
      if (!email || !email.value.trim()) {
        if (email) email.classList.add('input-error');
        valid = false;
      } else {
        email.classList.remove('input-error');
      }
      
      if (!password || !password.value.trim()) {
        if (password) password.classList.add('input-error');
        valid = false;
      } else {
        password.classList.remove('input-error');
      }
      
      if (!valid) return;
      
      // Show processing state
      const originalText = loginBtn.textContent;
      loginBtn.textContent = 'Logging in...';
      loginBtn.disabled = true;
      
      try {
        await login(email.value, password.value);
      } catch (error) {
        // Reset button on error
        loginBtn.textContent = originalText;
        loginBtn.disabled = false;
      }
    });
  }

  /* ──────────────────────────────────────────────
     GOOGLE LOGIN BUTTON (login page)
     ────────────────────────────────────────────── */
  const googleLoginBtn = document.getElementById('google-login-btn');
  
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', async () => {
      const originalText = googleLoginBtn.textContent;
      googleLoginBtn.textContent = 'Signing in...';
      googleLoginBtn.disabled = true;
      
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        console.log('Google sign-in successful, UID:', user.uid);
        
        // Retrieve user data from Firestore
        const userDoc = await db.collection('users').doc(user.uid).get();
        
        if (userDoc.exists) {
          const userData = userDoc.data();
          console.log('User data found:', userData);
          
          // Check if role exists
          if (userData.role) {
            console.log('Redirecting user with role:', userData.role);
            redirectUserByRole(userData.role);
          } else {
            // User exists but no role set - show role modal
            console.log('User exists but no role found, showing role modal');
            showRoleModal(user);
          }
        } else {
          // New user - show role selection modal
          console.log('New user, showing role modal');
          showRoleModal(user);
        }
        
      } catch (error) {
        console.error('Google login error:', error);
        alert('Google login failed: ' + error.message);
        googleLoginBtn.textContent = originalText;
        googleLoginBtn.disabled = false;
      }
    });
  }

  /* ──────────────────────────────────────────────
     PASSWORD VISIBILITY TOGGLE  (login & signup)
     ────────────────────────────────────────────── */
  const toggleButtons = document.querySelectorAll('.toggle-password');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const inputWrap = button.closest('.input-wrap');
      const input = inputWrap.querySelector('input');

      if (input.type === 'password') {
        // Show password
        input.type = 'text';
        input.classList.add('password-visible');
        button.classList.add('showing');
      } else {
        // Hide password
        input.type = 'password';
        input.classList.remove('password-visible');
        button.classList.remove('showing');
      }
    });
  });

  /* ──────────────────────────────────────────────
    PASSWORD MATCH  (signup only)
     ────────────────────────────────────────────── */
  const pwInput      = document.getElementById('password');
  const confirmInput = document.getElementById('confirm-password');
  const confirmError = document.getElementById('confirm-error');

  if (pwInput && confirmInput && confirmError) {

    const checkMatch = () => {
      /* Stay silent until the user has started typing in confirm */
      if (!confirmInput.value) {
        confirmInput.classList.remove('input-error');
        confirmError.classList.remove('visible');
        return;
      }

      const mismatch = pwInput.value !== confirmInput.value;
      confirmInput.classList.toggle('input-error', mismatch);
      confirmError.classList.toggle('visible',    mismatch);
    };

    pwInput.addEventListener('input',      checkMatch);
    confirmInput.addEventListener('input', checkMatch);
  }

  /* ──────────────────────────────────────────────
     SIGN UP BUTTON
     ────────────────────────────────────────────── */
  const signupBtn = document.getElementById('signup-btn');
  
  if (signupBtn) {
    signupBtn.addEventListener('click', async () => {
      // Get form values
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirm-password');
      const roleElement = document.querySelector('input[name="account-type"]:checked');
      
      // Validation
      let valid = true;
      
      if (!name || !name.value.trim()) {
        if (name) name.classList.add('input-error');
        valid = false;
      } else {
        name.classList.remove('input-error');
      }
      
      if (!email || !email.value.trim()) {
        if (email) email.classList.add('input-error');
        valid = false;
      } else {
        email.classList.remove('input-error');
      }
      
      if (!password || !password.value.trim()) {
        if (password) password.classList.add('input-error');
        valid = false;
      } else {
        password.classList.remove('input-error');
      }
      
      if (!confirmPassword || !confirmPassword.value.trim()) {
        if (confirmPassword) confirmPassword.classList.add('input-error');
        valid = false;
      } else {
        confirmPassword.classList.remove('input-error');
      }
      
      // Check password match
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.classList.add('input-error');
        document.getElementById('confirm-error').classList.add('visible');
        valid = false;
      }
      
      if (!roleElement) {
        alert("Please select an account type");
        valid = false;
      }
      
      if (!valid) return;
      
      // Show processing state
      const originalText = signupBtn.textContent;
      signupBtn.textContent = 'Creating Account...';
      signupBtn.disabled = true;
      
      try {
        // Call signup function
        await signUp(email.value, password.value, roleElement.value, name.value);
      } catch (error) {
        // Reset button on error
        signupBtn.textContent = originalText;
        signupBtn.disabled = false;
      }
    });
  }
  
  /* ──────────────────────────────────────────────
   GOOGLE SIGN UP BUTTON (with role modal)
   ────────────────────────────────────────────── */
  const googleSignupBtn = document.getElementById('google-signup-btn');

  if (googleSignupBtn) {
    googleSignupBtn.addEventListener('click', async () => {
      const originalText = googleSignupBtn.textContent;
      googleSignupBtn.textContent = 'Signing in...';
      googleSignupBtn.disabled = true;
      
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        console.log('Google sign-in successful, UID:', user.uid);
        
        // Check if user already exists
        const userDoc = await db.collection('users').doc(user.uid).get();
        
        if (userDoc.exists) {
          const userData = userDoc.data();
          console.log('Existing user found:', userData);
          
          // Check if role exists
          if (userData.role) {
            console.log('Redirecting user with role:', userData.role);
            redirectUserByRole(userData.role);
          } else {
            // User exists but no role set - show role modal
            console.log('User exists but no role found, showing role modal');
            showRoleModal(user);
          }
        } else {
          // New user - show role selection modal
          console.log('New user, showing role modal');
          showRoleModal(user);
        }
        
      } catch (error) {
        console.error('Google sign in error:', error);
        alert('Google sign in failed: ' + error.message);
        googleSignupBtn.textContent = originalText;
        googleSignupBtn.disabled = false;
      }
    });
  }

  /* ──────────────────────────────────────────────
     FORGOT PASSWORD HANDLER  (forgot-password only)
     ────────────────────────────────────────────── */
  const resetBtn     = document.getElementById('reset-btn');
  const resetForm    = document.getElementById('reset-form');
  const resetSuccess = document.getElementById('reset-success');
  const sentEmailEl  = document.getElementById('sent-email');
  const resendBtn    = document.getElementById('resend-btn');

  if (resetBtn && resetForm && resetSuccess) {
    const emailInput = resetForm.querySelector('#email');

    resetBtn.addEventListener('click', async () => {
      let valid = true;

      /* -- validate email field -- */
      if (!emailInput.value.trim()) {
        emailInput.classList.add('input-error');
        valid = false;
        return;
      } else {
        emailInput.classList.remove('input-error');
      }

      /* -- basic email format check -- */
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        alert('Please enter a valid email address');
        valid = false;
        return;
      }

      if (!valid) return;

      /* -- show processing state -- */
      const originalLabel    = resetBtn.textContent;
      resetBtn.textContent   = 'Checking…';
      resetBtn.style.opacity = '0.7';
      resetBtn.disabled      = true;

      const email = emailInput.value.trim();
      console.log('=== PASSWORD RESET DEBUG ===');
      console.log('Email entered:', email);

      try {
        // Try to check sign-in methods
        let methods = [];
        try {
          console.log('Attempting to fetch sign-in methods...');
          methods = await firebase.auth().fetchSignInMethodsForEmail(email);
          console.log('✅ Sign-in methods found:', methods);
        } catch (fetchError) {
          console.warn('⚠️ fetchSignInMethodsForEmail failed:', fetchError.code, fetchError.message);
          console.log('Proceeding with direct password reset attempt...');
          // If fetchSignInMethodsForEmail fails, just try sending the reset email
          // Firebase will handle if the email doesn't exist
        }
        
        // If we got methods and found it's a Google-only user
        if (methods.length > 0) {
          console.log('Account exists with methods:', methods);
          
          if (methods.includes('google.com') && !methods.includes('password')) {
            console.log('❌ Google-only user detected');
            resetBtn.textContent   = originalLabel;
            resetBtn.style.opacity = '';
            resetBtn.disabled      = false;
            alert('This account uses Google Sign-In and has no password to reset.\n\nTo change your Google password, visit:\nhttps://accounts.google.com/signin/recovery');
            return;
          }
          
          console.log('✅ User has password-based authentication');
        }
        
        // Proceed with sending reset email
        console.log('Attempting to send password reset email...');
        resetBtn.textContent = 'Sending…';
        
        await firebase.auth().sendPasswordResetEmail(email);
        
        console.log('✅ Password reset email sent successfully');
        
        /* -- show success state -- */
        resetForm.style.display    = 'none';
        resetSuccess.style.display = 'block';
        
        /* -- display the email address -- */
        if (sentEmailEl) {
          sentEmailEl.textContent = email;
        }
        
      } catch (error) {
        console.error('Password reset error:', error);
        
        /* -- reset button state -- */
        resetBtn.textContent   = originalLabel;
        resetBtn.style.opacity = '';
        resetBtn.disabled      = false;
        
        /* -- handle different error types -- */
        if (error.code === 'auth/user-not-found') {
          alert('No account found with this email address.');
        } else if (error.code === 'auth/invalid-email') {
          alert('Invalid email address.');
        } else if (error.code === 'auth/too-many-requests') {
          alert('Too many reset attempts. Please try again later.');
        } else {
          alert('Failed to send reset email: ' + error.message);
        }
      }
    });

    /* -- resend link handler -- */
    if (resendBtn) {
      resendBtn.addEventListener('click', async () => {
        const email = sentEmailEl ? sentEmailEl.textContent : '';
        
        if (!email) {
          alert('Email address not found. Please refresh and try again.');
          return;
        }
        
        resendBtn.textContent = 'Sending…';
        resendBtn.disabled    = true;

        try {
          await auth.sendPasswordResetEmail(email);
          
          resendBtn.textContent = 'Link sent!';
          
          setTimeout(() => {
            resendBtn.textContent = 'resend the link';
            resendBtn.disabled    = false;
          }, 2000);
          
        } catch (error) {
          console.error('Resend error:', error);
          alert('Failed to resend email: ' + error.message);
          resendBtn.textContent = 'resend the link';
          resendBtn.disabled    = false;
        }
      });
    }
  }

}); // ← END OF DOMContentLoaded


/* ──────────────────────────────────────────────
   HELPER FUNCTIONS (defined outside DOMContentLoaded)
   ────────────────────────────────────────────── */

// Function to show role selection modal
function showRoleModal(user) {
  console.log('showRoleModal called for user:', user.email);
  
  const modal = document.getElementById('role-modal');
  const confirmBtn = document.getElementById('confirm-role-btn');
  
  if (!modal || !confirmBtn) {
    console.error('Role modal elements not found!');
    alert('Error: Role selection modal not available. Please try signing up with email instead.');
    return;
  }
  
  modal.style.display = 'flex';
  console.log('Role modal displayed');
  
  // Handle role confirmation
  confirmBtn.onclick = async () => {
    const selectedRole = document.querySelector('input[name="modal-account-type"]:checked');
    
    if (!selectedRole) {
      alert('Please select an account type');
      return;
    }
    
    console.log('Selected role:', selectedRole.value);
    
    confirmBtn.textContent = 'Creating account...';
    confirmBtn.disabled = true;
    
    try {
      // Save user data with selected role
      await db.collection('users').doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: selectedRole.value,
        createdAt: new Date().toISOString(),
        profileComplete: false
      });
      
      console.log('User data saved to Firestore successfully');
      
      // Redirect to homepage based on role
      alert('Account created successfully!');
      redirectUserByRole(selectedRole.value);
      
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to create account. Please try again.');
      confirmBtn.textContent = 'Continue';
      confirmBtn.disabled = false;
    }
  };
}


/* ──────────────────────────────────────────────
   Firebase Authentication Functions
   ────────────────────────────────────────────── */

// Sign Up Function
async function signUp(email, password, role, displayName) {
  try {
    // Create user account using namespaced SDK
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store additional user information in Firestore
    await db.collection('users').doc(user.uid).set({
      uid: user.uid,
      email: email,
      displayName: displayName,
      role: role,
      createdAt: new Date().toISOString(),
      profileComplete: false
    });

    console.log("User created and data stored successfully!");
    alert("Account created successfully! Please log in.");
    
    // Sign out the user and redirect to login
    await auth.signOut();
    window.location.href = 'login.html';
    
  } catch (error) {
    console.error("Error during sign up:", error.code, error.message);
    alert("Sign up failed: " + error.message);
    throw error;
  }
}

// Login Function
async function login(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Retrieve user data from Firestore
    const userDoc = await db.collection('users').doc(user.uid).get();
    
    if (userDoc.exists) {
      const userData = userDoc.data();
      console.log("User role:", userData.role);
      
      // Redirect based on role
      redirectUserByRole(userData.role);
    } else {
      console.log("No user data found in Firestore");
      alert("User data not found. Please contact support.");
    }
    
  } catch (error) {
    console.error("Error during login:", error.code, error.message);
    alert("Login failed: " + error.message);
    throw error;
  }
}

// Google Sign In
async function signInWithGoogle(role) {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    const user = result.user;

    // Check if user already exists in Firestore
    const userDoc = await db.collection('users').doc(user.uid).get();
    
    if (!userDoc.exists) {
      // New user - store their information with selected role
      await db.collection('users').doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: role,
        createdAt: new Date().toISOString(),
        profileComplete: false
      });
    }

    // Get user data and redirect
    const userData = userDoc.exists ? userDoc.data() : { role: role };
    redirectUserByRole(userData.role);
    
  } catch (error) {
    console.error("Error during Google sign in:", error.code, error.message);
    alert("Google sign in failed: " + error.message);
    throw error;
  }
}

// Redirect user based on role
function redirectUserByRole(role) {
  console.log('redirectUserByRole called with role:', role);
  
  if (role === 'customer' || role === 'stall-owner') {
    console.log('Redirecting to index.html');
    window.location.href = 'index.html';
  } else if (role === 'nea-officer') {
    console.log('Redirecting to nea-officer.html');
    window.location.href = 'nea-officer.html';
  } else {
    console.error('Unknown role:', role);
    alert('Error: Invalid user role. Please contact support.');
  }
}