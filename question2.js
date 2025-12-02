// Constants
const MAX_CHARS = 100;
const WARNING_YELLOW_THRESHOLD = 20;

// Get necessary DOM elements
const textInput = document.getElementById('text-input');
const charCounter = document.getElementById('char-counter');
const resetButton = document.getElementById('reset-btn');

/**
 * Updates the character counter and applies warning colors.
 */
function updateCounterAndWarnings() {
    const currentLength = textInput.value.length;
    const remainingChars = MAX_CHARS - currentLength;

    // Update the counter text
    charCounter.textContent = `${remainingChars} characters remaining`;

    // Reset classes
    charCounter.classList.remove('warning-yellow', 'warning-red');

    // Apply color warnings
    if (remainingChars <= 0) {
        charCounter.classList.add('warning-red');
    } else if (remainingChars <= WARNING_YELLOW_THRESHOLD) {
        charCounter.classList.add('warning-yellow');
    }
}

/**
 * Prevents further typing if the max limit is reached.
 * @param {InputEvent} event - The input event object.
 */
function checkLimitAndPreventTyping(event) {
    const currentLength = textInput.value.length;

    if (currentLength >= MAX_CHARS) {
        // Prevent default action (typing) if at the limit
        event.preventDefault();
    }

    // Call update to ensure the counter is always correct
    updateCounterAndWarnings();
}

/**
 * Resets the textarea and the counter.
 */
function resetForm() {
    textInput.value = '';
    updateCounterAndWarnings(); // Recalculate and reset warnings
    textInput.focus(); // Set focus back to the textarea
}

// Event Listeners
// Use the 'input' event for real-time tracking of changes
textInput.addEventListener('input', updateCounterAndWarnings); 

// Use 'keypress' event to block the *next* character from being added
textInput.addEventListener('keypress', checkLimitAndPreventTyping); 

// 'keyup' and 'keydown' are also used to handle special keys like backspace/delete 
// which should update the counter but not be prevented.
textInput.addEventListener('keyup', updateCounterAndWarnings);
textInput.addEventListener('keydown', updateCounterAndWarnings);

resetButton.addEventListener('click', resetForm);

// Initial call to set the counter on page load
updateCounterAndWarnings();