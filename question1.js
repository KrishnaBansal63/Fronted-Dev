// Get necessary DOM elements
const productList = document.getElementById('product-list');
const newProductInput = document.getElementById('new-product-input');
const addProductBtn = document.getElementById('add-product-btn');

let currentlyEditing = null; // Stores the <li> element currently in edit mode

/**
 * Creates a new <li> element for a product.
 * @param {string} productName - The name of the product.
 * @returns {HTMLLIElement} The created list item element.
 */
function createProductListItem(productName) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="product-name" contenteditable="false">${productName}</span>
        <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    return li;
}

/**
 * Adds a new product to the list.
 */
function addProduct() {
    const productName = newProductInput.value.trim();

    if (productName) {
        const newProduct = createProductListItem(productName);
        productList.appendChild(newProduct);
        newProductInput.value = ''; // Clear the input
    }
}

/**
 * Saves the edited item by turning off contenteditable mode.
 * @param {HTMLLIElement} itemToSave - The list item to save.
 */
function saveEdit(itemToSave) {
    if (itemToSave) {
        const productNameSpan = itemToSave.querySelector('.product-name');
        productNameSpan.contentEditable = 'false';
        productNameSpan.classList.remove('editable');
        currentlyEditing = null;
    }
}

/**
 * Handles clicks on the product list using event delegation.
 * @param {Event} event - The click event object.
 */
function handleListClick(event) {
    const target = event.target;
    const listItem = target.closest('li'); // Find the nearest parent <li>

    if (!listItem) return; // Not a product item

    // --- Delete Logic ---
    if (target.classList.contains('delete-btn')) {
        // Stop any ongoing edit before deleting
        if (currentlyEditing === listItem) {
            currentlyEditing = null;
        }
        productList.removeChild(listItem);
    } 
    // --- Edit Logic ---
    else if (target.classList.contains('edit-btn')) {
        // If another item is being edited, save it first
        if (currentlyEditing && currentlyEditing !== listItem) {
            saveEdit(currentlyEditing);
        }
        
        const productNameSpan = listItem.querySelector('.product-name');
        
        if (productNameSpan.contentEditable === 'true') {
            // If already in edit mode, save the changes (Edit button acts as Save)
            saveEdit(listItem);
        } else {
            // Enter edit mode
            productNameSpan.contentEditable = 'true';
            productNameSpan.classList.add('editable');
            productNameSpan.focus(); // Focus on the editable area
            currentlyEditing = listItem;
        }
    }
}

/**
 * Handles clicks outside the currently edited item for auto-save.
 * @param {Event} event - The click event object.
 */
function handleOutsideClick(event) {
    if (currentlyEditing && !currentlyEditing.contains(event.target)) {
        // If there is an item being edited and the click is outside of it, auto-save.
        saveEdit(currentlyEditing);
    }
}

// Event Listeners
addProductBtn.addEventListener('click', addProduct);
// Allow pressing Enter in the input to add product
newProductInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addProduct();
    }
});

// Use EVENT DELEGATION on the parent <ul>
productList.addEventListener('click', handleListClick);

// Handle auto-save on outside click
document.addEventListener('click', handleOutsideClick);