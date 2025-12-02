// Get necessary DOM elements
const form = document.getElementById('multi-step-form');
const stepElements = form.querySelectorAll('.form-step');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

let currentStep = 1;

/**
 * Validates the input fields based on the current step.
 * @returns {boolean} True if validation passes, false otherwise.
 */
function validateStep() {
    let isValid = true;
    
    // Clear previous errors
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    if (currentStep === 1) {
        if (nameInput.value.trim() === '') {
            document.getElementById('name-error').textContent = 'Name is required.';
            isValid = false;
        }
    } else if (currentStep === 2) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            isValid = false;
        }
    } else if (currentStep === 3) {
        if (passwordInput.value.length < 6) {
            document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
            isValid = false;
        }
    }

    return isValid;
}

/**
 * Updates the summary section with form data.
 */
function updateSummary() {
    document.getElementById('summary-name').textContent = nameInput.value;
    document.getElementById('summary-email').textContent = emailInput.value;
    // Password is intentionally hidden
}

/**
 * Shows the target step and hides all others.
 * @param {number} stepNumber - The step number to show.
 */
function showStep(stepNumber) {
    stepElements.forEach(step => {
        const stepAttribute = parseInt(step.getAttribute('data-step'));
        
        // Hide all steps
        step.classList.remove('active');

        // Show the target step
        if (stepAttribute === stepNumber) {
            step.classList.add('active');
            currentStep = stepNumber; // Update current step tracker
        }
    });

    if (stepNumber === 4) {
        updateSummary();
    }
}

/**
 * Handles the click event for Next/Back buttons.
 * @param {Event} event - The click event object.
 */
function handleButtonClick(event) {
    const target = event.target;
    const targetStep = parseInt(target.getAttribute('data-target-step'));
    
    if (isNaN(targetStep)) return;

    if (target.classList.contains('next-btn') || target.classList.contains('submit-btn')) {
        // Validation check for Next/Submit
        if (validateStep()) {
            showStep(targetStep);
        }
    } else if (target.classList.contains('back-btn')) {
        // No validation needed for Back
        showStep(targetStep);
    }
}

// Event Listener on the form using delegation for Next/Back/Submit buttons
form.addEventListener('click', handleButtonClick);

// Initial check on page load to ensure only the first step is visible
showStep(currentStep);