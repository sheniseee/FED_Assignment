/* js file for login, sign up and forget password*/

document.addEventListener('DOMContentLoaded', () => {

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
     SIGN UP BUTTON - Replace old submit handler
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
     GOOGLE SIGN UP BUTTON
     ────────────────────────────────────────────── */
  const googleSignupBtn = document.getElementById('google-signup-btn');
  
  if (googleSignupBtn) {
    googleSignupBtn.addEventListener('click', async () => {
      const roleElement = document.querySelector('input[name="account-type"]:checked');
      
      if (!roleElement) {
        alert("Please select an account type first");
        return;
      }
      
      const originalText = googleSignupBtn.textContent;
      googleSignupBtn.textContent = 'Signing in...';
      googleSignupBtn.disabled = true;
      
      try {
        await signInWithGoogle(roleElement.value);
      } catch (error) {
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

    resetBtn.addEventListener('click', () => {
      let valid = true;

      /* -- validate email field -- */
      if (!emailInput.value.trim()) {
        emailInput.classList.add('input-error');
        valid = false;
      } else {
        emailInput.classList.remove('input-error');
      }

      /* -- basic email format check -- */
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        valid = false;
      }

      if (!valid) return;

      /* -- demo: brief "processing" state -- */
      const originalLabel    = resetBtn.textContent;
      resetBtn.textContent   = 'Sending…';
      resetBtn.style.opacity = '0.7';
      resetBtn.disabled      = true;

      setTimeout(() => {
        /* -- show success state -- */
        resetForm.style.display    = 'none';
        resetSuccess.style.display = 'block';
        
        /* -- display the email address -- */
        if (sentEmailEl) {
          sentEmailEl.textContent = emailInput.value.trim();
        }

        /* -- reset button state (in case user goes back) -- */
        resetBtn.textContent   = originalLabel;
        resetBtn.style.opacity = '';
        resetBtn.disabled      = false;
      }, 1500);
    });

    /* -- resend link handler -- */
    if (resendBtn) {
      resendBtn.addEventListener('click', () => {
        resendBtn.textContent = 'Sending…';
        resendBtn.disabled    = true;

        setTimeout(() => {
          resendBtn.textContent = 'Link sent!';
          
          setTimeout(() => {
            resendBtn.textContent = 'resend the link';
            resendBtn.disabled    = false;
          }, 2000);
        }, 1200);
      });
    }
  }

});




/* ──────────────────────────────────────────────
   Firebase Authentication (Sign Up & Login)
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
    alert("Account created successfully!");
    
    // Redirect based on role
    redirectUserByRole(role);
    
  } catch (error) {
    console.error("Error during sign up:", error.code, error.message);
    alert("Sign up failed: " + error.message);
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
  }
}

// Redirect user based on role
function redirectUserByRole(role) {
  if (role === 'customer' || role === 'stall-owner') {
    window.location.href = 'index.html';
  } else if (role === 'nea-officer') {
    window.location.href = 'nea-officer.html';
  }
}