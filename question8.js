// Get necessary DOM elements
const dropdownContainer = document.getElementById('custom-dropdown');
const dropdownButton = document.getElementById('dropdown-button');
const dropdownOptions = document.getElementById('dropdown-options');

/**
 * Toggles the visibility of the dropdown options.
 */
function toggleDropdown() {
    dropdownOptions.classList.toggle('show');
}

/**
 * Handles clicks on the options list to update the button text.
 * @param {MouseEvent} event - The click event object.
 */
function handleOptionSelect(event) {
    const target = event.target;

    // Check if the clicked element is an option item
    if (target.classList.contains('option-item')) {
        // Update the button text
        dropdownButton.textContent = target.textContent;
        
        // Close the dropdown after selection
        dropdownOptions.classList.remove('show');
    }
}

/**
 * Handles clicks outside the dropdown to close it, using the CAPTURING phase.
 * @param {MouseEvent} event - The click event object.
 */
function closeDropdownOnOutsideClick(event) {
    // Check if the dropdown is open AND the clicked target is NOT inside the dropdown container
    if (dropdownOptions.classList.contains('show') && !dropdownContainer.contains(event.target)) {
        dropdownOptions.classList.remove('show');
        
        // Stop listener after closing to avoid unnecessary checks, then re-add it when opening
        document.removeEventListener('click', closeDropdownOnOutsideClick, true); 
    }
    // If the click IS inside the dropdown, the default action is to do nothing and let 
    // the button or options listener handle it during the bubbling phase.
}

/**
 * Handles the button click. It toggles the dropdown and manages the outside click listener.
 */
function handleButtonClick() {
    const isOpening = !dropdownOptions.classList.contains('show');
    
    toggleDropdown();

    // If opening, set the outside click listener using the CAPTURING phase (third argument is true)
    if (isOpening) {
        // This listener fires first (captures) before the click reaches the dropdown element itself.
        document.addEventListener('click', closeDropdownOnOutsideClick, true); 
    } else {
        // If closing, remove the listener
        document.removeEventListener('click', closeDropdownOnOutsideClick, true); 
    }
}

// Event Listeners
dropdownButton.addEventListener('click', handleButtonClick);
dropdownOptions.addEventListener('click', handleOptionSelect);