// Get necessary DOM elements
const body = document.body;
const themeButtons = document.querySelectorAll('.theme-buttons button');

/**
 * Applies a specified theme by setting the data-theme attribute on the body.
 * @param {string} themeName - The name of the theme ('light', 'dark', 'blue').
 */
function switchTheme(themeName) {
    // Instruction 1: Save current theme in a custom attribute: data-theme="..."
    // Instruction 2: All themes must be applied using setAttribute()
    body.setAttribute('data-theme', themeName);
}

/**
 * Handles the click event on theme buttons using event delegation pattern 
 * (though direct listeners are also fine for a small fixed list).
 * It extracts the desired theme name from the button's data attribute.
 * @param {Event} event - The click event object.
 */
function handleThemeChange(event) {
    const target = event.target;
    
    // Check if the clicked element is a button with a theme name
    if (target.matches('button[data-theme-name]')) {
        const selectedTheme = target.getAttribute('data-theme-name');
        switchTheme(selectedTheme);
    }
}

// Attach a single listener to the button container for simplicity/delegation
document.querySelector('.theme-buttons').addEventListener('click', handleThemeChange);

// Optional: Initialize based on the current attribute (already set in HTML for default)
// console.log("Initial theme:", body.getAttribute('data-theme'));