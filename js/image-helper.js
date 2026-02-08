// Image Helper Utilities for Menu Management
// Handles auto-download with timestamp + menu name formatting

/**
 * Sanitize menu name for use in filename
 * Removes special characters, converts to lowercase, replaces spaces with hyphens
 */
function sanitizeFileName(menuName) {
    return menuName
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')          // Replace spaces with hyphens
        .replace(/-+/g, '-')           // Remove consecutive hyphens
        .trim();
}

/**
 * Generate formatted filename: {timestamp}_{menu-name}.{ext}
 */
function generateFileName(menuName, originalFileName) {
    const timestamp = Date.now();
    const sanitized = sanitizeFileName(menuName);
    const extension = originalFileName.split('.').pop().toLowerCase();
    return `${timestamp}_${sanitized}.${extension}`;
}

/**
 * Auto-download image file with formatted name
 * User will be prompted to save to images/ folder
 */
function downloadImageWithRename(file, menuName, callback) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const newFileName = generateFileName(menuName, file.name);
        const imagePath = `../images/${newFileName}`;

        // Create download link
        const link = document.createElement('a');
        link.href = e.target.result;
        link.download = newFileName;

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Return the path to be stored in Firestore
        if (callback) {
            callback(imagePath, newFileName);
        }
    };

    reader.readAsDataURL(file);
}

/**
 * Handle image file selection with auto-download and path update
 * @param {string} mode - 'add' or 'edit'
 * @param {HTMLInputElement} fileInput - The file input element
 */
function handleImageUpload(mode, fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file (jpg, png, webp, etc.)');
        return;
    }

    // Get menu name from the appropriate input field
    const menuNameInput = document.getElementById(mode === 'add' ? 'addName' : 'editName');
    const menuName = menuNameInput.value.trim();

    if (!menuName) {
        alert('Please enter a menu name first before uploading an image.');
        menuNameInput.focus();
        return;
    }

    // Show loading indicator
    const imageInput = document.getElementById(mode === 'add' ? 'addImage' : 'editImage');
    const originalPlaceholder = imageInput.placeholder;
    imageInput.placeholder = 'Processing image...';
    imageInput.disabled = true;

    // Download image with new name and update path
    downloadImageWithRename(file, menuName, (imagePath, fileName) => {
        imageInput.value = imagePath;
        imageInput.placeholder = originalPlaceholder;
        imageInput.disabled = false;

        // Show success message
        showImageUploadSuccess(fileName);
    });
}

/**
 * Show success notification for image upload
 */
function showImageUploadSuccess(fileName) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-family: 'Outfit', sans-serif;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <ion-icon name="checkmark-circle" style="font-size: 24px;"></ion-icon>
            <div>
                <div style="font-size: 0.9rem; margin-bottom: 4px;">Image Downloaded!</div>
                <div style="font-size: 0.75rem; opacity: 0.9;">Save as: <strong>${fileName}</strong></div>
                <div style="font-size: 0.7rem; opacity: 0.8; margin-top: 2px;">to <code>images/</code> folder</div>
            </div>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
