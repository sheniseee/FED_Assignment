// ========================================
// NOTIFICATION SETTINGS FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  
  // Get elements
  const masterToggle = document.getElementById('masterNotification');
  const subToggles = document.querySelectorAll('.sub-notification');

  // ========================================
  // MASTER TOGGLE FUNCTIONALITY
  // ========================================
  
  // When master toggle is changed
  masterToggle?.addEventListener('change', () => {
    const isChecked = masterToggle.checked;
    
    // Enable/disable all sub-notifications based on master
    subToggles.forEach(toggle => {
      toggle.checked = isChecked;
      toggle.disabled = !isChecked;
      
      // Add visual indication when disabled
      const notifItem = toggle.closest('.notif-item');
      if (notifItem) {
        if (!isChecked) {
          notifItem.style.opacity = '0.5';
          notifItem.style.pointerEvents = 'none';
        } else {
          notifItem.style.opacity = '1';
          notifItem.style.pointerEvents = 'auto';
        }
      }
    });

    // Save to localStorage (optional - for persistence)
    saveNotificationSettings();
  });

  // ========================================
  // SUB-TOGGLE FUNCTIONALITY
  // ========================================
  
  // When any sub-notification is toggled
  subToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      
      // If any sub-notification is turned ON, turn master ON
      const anyChecked = Array.from(subToggles).some(t => t.checked);
      if (anyChecked && !masterToggle.checked) {
        masterToggle.checked = true;
      }
      
      // If all sub-notifications are turned OFF, suggest turning master OFF
      const allUnchecked = Array.from(subToggles).every(t => !t.checked);
      if (allUnchecked && masterToggle.checked) {
        masterToggle.checked = false;
      }

      // Save to localStorage
      saveNotificationSettings();
    });
  });

  // ========================================
  // SAVE SETTINGS (LocalStorage)
  // ========================================
  
  function saveNotificationSettings() {
    const settings = {
      master: masterToggle?.checked || false,
      promotions: subToggles[0]?.checked || false,
      newStalls: subToggles[1]?.checked || false,
      orderConfirmation: subToggles[2]?.checked || false,
      lastUpdated: new Date().toISOString()
    };
    
    try {
      localStorage.setItem('notificationSettings', JSON.stringify(settings));
      console.log('Notification settings saved:', settings);
    } catch (error) {
      console.error('Error saving notification settings:', error);
    }
  }

  // ========================================
  // LOAD SETTINGS (LocalStorage)
  // ========================================
  
  function loadNotificationSettings() {
    try {
      const savedSettings = localStorage.getItem('notificationSettings');
      
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // Apply saved settings
        if (masterToggle) {
          masterToggle.checked = settings.master;
        }
        
        if (subToggles.length >= 3) {
          subToggles[0].checked = settings.promotions;
          subToggles[1].checked = settings.newStalls;
          subToggles[2].checked = settings.orderConfirmation;
        }

        // Apply disabled state if master is off
        if (!settings.master) {
          subToggles.forEach(toggle => {
            toggle.disabled = true;
            const notifItem = toggle.closest('.notif-item');
            if (notifItem) {
              notifItem.style.opacity = '0.5';
              notifItem.style.pointerEvents = 'none';
            }
          });
        }
        
        console.log('Notification settings loaded:', settings);
      }
    } catch (error) {
      console.error('Error loading notification settings:', error);
    }
  }

  // ========================================
  // INITIALIZE
  // ========================================
  
  // Load saved settings on page load
  loadNotificationSettings();

  // Initial check: if master is off, disable sub-toggles
  if (masterToggle && !masterToggle.checked) {
    subToggles.forEach(toggle => {
      toggle.disabled = true;
      const notifItem = toggle.closest('.notif-item');
      if (notifItem) {
        notifItem.style.opacity = '0.5';
        notifItem.style.pointerEvents = 'none';
      }
    });
  }

});