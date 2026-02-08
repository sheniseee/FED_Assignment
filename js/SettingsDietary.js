// ========================================
// DIETARY RESTRICTIONS FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  
  // Get all dietary toggle checkboxes
  const dietaryToggles = document.querySelectorAll('[data-dietary]');

  // ========================================
  // DIETARY LOGIC & VALIDATION
  // ========================================
  
  // Add change event listener to each toggle
  dietaryToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      const dietaryType = toggle.getAttribute('data-dietary');
      
      // Apply dietary logic
      applyDietaryLogic(dietaryType, toggle.checked);
      
      // Save settings
      saveDietarySettings();
    });
  });

  // ========================================
  // DIETARY LOGIC RULES
  // ========================================
  
  function applyDietaryLogic(type, isChecked) {
    const vegetarianToggle = document.querySelector('[data-dietary="vegetarian"]');
    const veganToggle = document.querySelector('[data-dietary="vegan"]');
    
    // Rule: If Vegan is checked, Vegetarian should also be checked
    // (because vegans are vegetarian)
    if (type === 'vegan' && isChecked) {
      if (vegetarianToggle && !vegetarianToggle.checked) {
        vegetarianToggle.checked = true;
      }
    }
    
    // Rule: If Vegetarian is unchecked, Vegan should also be unchecked
    // (because you can't be vegan without being vegetarian)
    if (type === 'vegetarian' && !isChecked) {
      if (veganToggle && veganToggle.checked) {
        veganToggle.checked = false;
      }
    }
  }

  // ========================================
  // SAVE SETTINGS (LocalStorage)
  // ========================================
  
  function saveDietarySettings() {
    const settings = {};
    
    // Collect all dietary preferences
    dietaryToggles.forEach(toggle => {
      const dietaryType = toggle.getAttribute('data-dietary');
      settings[dietaryType] = toggle.checked;
    });
    
    // Add metadata
    settings.lastUpdated = new Date().toISOString();
    
    try {
      localStorage.setItem('dietaryRestrictions', JSON.stringify(settings));
      console.log('Dietary restrictions saved:', settings);
      
      // Optional: Show a brief save confirmation
      showSaveConfirmation();
    } catch (error) {
      console.error('Error saving dietary restrictions:', error);
    }
  }

  // ========================================
  // LOAD SETTINGS (LocalStorage)
  // ========================================
  
  function loadDietarySettings() {
    try {
      const savedSettings = localStorage.getItem('dietaryRestrictions');
      
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // Apply saved settings to toggles
        dietaryToggles.forEach(toggle => {
          const dietaryType = toggle.getAttribute('data-dietary');
          if (settings.hasOwnProperty(dietaryType)) {
            toggle.checked = settings[dietaryType];
          }
        });
        
        console.log('Dietary restrictions loaded:', settings);
      }
    } catch (error) {
      console.error('Error loading dietary restrictions:', error);
    }
  }

  // ========================================
  // SAVE CONFIRMATION (Optional)
  // ========================================
  
  function showSaveConfirmation() {
    // Check if confirmation element already exists
    let confirmation = document.querySelector('.save-confirmation');
    
    if (!confirmation) {
      // Create confirmation element
      confirmation = document.createElement('div');
      confirmation.className = 'save-confirmation';
      confirmation.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
        <span>Saved</span>
      `;
      
      // Add styles
      confirmation.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        color: white;
        padding: 12px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        font-size: 14px;
        box-shadow: 0 4px 16px rgba(76, 175, 80, 0.4);
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        pointer-events: none;
      `;
      
      // Style the SVG
      const svg = confirmation.querySelector('svg');
      svg.style.cssText = `
        width: 18px;
        height: 18px;
      `;
      
      document.body.appendChild(confirmation);
    }
    
    // Show confirmation
    setTimeout(() => {
      confirmation.style.opacity = '1';
      confirmation.style.transform = 'translateY(0)';
    }, 10);
    
    // Hide after 2 seconds
    setTimeout(() => {
      confirmation.style.opacity = '0';
      confirmation.style.transform = 'translateY(20px)';
    }, 2000);
  }

  // ========================================
  // GET DIETARY RESTRICTIONS (for other pages)
  // ========================================
  
  // This function can be called from other pages to get user's dietary restrictions
  window.getDietaryRestrictions = function() {
    try {
      const savedSettings = localStorage.getItem('dietaryRestrictions');
      return savedSettings ? JSON.parse(savedSettings) : {};
    } catch (error) {
      console.error('Error getting dietary restrictions:', error);
      return {};
    }
  };

  // ========================================
  // GET ACTIVE RESTRICTIONS (filtered list)
  // ========================================
  
  // Returns only the restrictions that are enabled
  window.getActiveDietaryRestrictions = function() {
    const all = window.getDietaryRestrictions();
    const active = [];
    
    for (const [key, value] of Object.entries(all)) {
      if (value === true && key !== 'lastUpdated') {
        // Convert camelCase to readable format
        const readable = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase());
        active.push(readable);
      }
    }
    
    return active;
  };

  // ========================================
  // INITIALIZE
  // ========================================
  
  // Load saved settings on page load
  loadDietarySettings();

  // Log available dietary functions
  console.log('Dietary Restrictions API available:');
  console.log('- getDietaryRestrictions()');
  console.log('- getActiveDietaryRestrictions()');

});