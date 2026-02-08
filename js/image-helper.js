// Image helper utilities for menu management
// Handles image uploads and path management

// Handle image file selection and update the path input
window.handleImageUpload = function(mode, input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const filename = file.name;
        
        // Update the corresponding text input with the path
        const targetInput = document.getElementById(mode === 'add' ? 'addImage' : 'editImage');
        if (targetInput) {
            targetInput.value = `../images/${filename}`;
        }
        
        console.log(`Image selected for ${mode}: ${filename}`);
    }
};

// Alternative function name for compatibility
window.updateImagePath = function(mode, input) {
    return window.handleImageUpload(mode, input);
};

console.log('Image helper loaded');
