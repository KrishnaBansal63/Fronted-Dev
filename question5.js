// Get necessary DOM elements
const gallery = document.getElementById('image-gallery');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalContent = document.querySelector('.modal-content');

/**
 * Opens the modal and displays the full-size image.
 * @param {string} imageSrc - The source URL of the full-size image.
 */
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.classList.add('open');
}

/**
 * Closes the modal.
 */
function closeModal() {
    modal.classList.remove('open');
    modalImage.src = ''; // Clear source for better performance/privacy
}

/**
 * Handles clicks on the image gallery.
 * @param {Event} event - The click event object.
 */
function handleGalleryClick(event) {
    const target = event.target;

    // Check if the clicked element is an image thumbnail
    if (target.classList.contains('thumbnail')) {
        const fullSrc = target.getAttribute('data-full-src');
        if (fullSrc) {
            openModal(fullSrc);
        }
    }
}

/**
 * Handles clicks on the modal overlay to close it.
 * @param {Event} event - The click event object.
 */
function handleModalClick(event) {
    // Instruction: Clicking outside modal closes the modal
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
}

/**
 * Prevents the modal from closing when clicking inside the content.
 * @param {Event} event - The click event object.
 */
function handleModalContentClick(event) {
    // Instruction: Use event.stopPropagation() so clicking inside modal does not close it
    event.stopPropagation();
}

// Event Listeners
gallery.addEventListener('click', handleGalleryClick);
modal.addEventListener('click', handleModalClick);
modalContent.addEventListener('click', handleModalContentClick); 

// Optional: Allow closing with the Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});