// Get necessary DOM elements
const searchInput = document.getElementById('search-input');
const tableBody = document.getElementById('student-table-body');
const noResultsMessage = document.getElementById('no-results');

// Get all student rows once
const rows = Array.from(tableBody.querySelectorAll('tr'));

/**
 * Filters the table rows based on the search term.
 */
function filterTable() {
    // Get the search term and convert to lowercase for case-insensitive matching
    const filterText = searchInput.value.toLowerCase().trim();
    let resultsFound = 0;

    rows.forEach(row => {
        // Concatenate all text content in the row for broad search, and convert to lowercase
        // Using data attributes or specific cell content is often more robust, 
        // but textContent works well for a simple table.
        const rowText = row.textContent.toLowerCase();

        // Check if the row text includes the filter term
        if (rowText.includes(filterText)) {
            // Show the row if it matches
            row.style.display = ''; 
            resultsFound++;
        } else {
            // Hide the row if it doesn't match
            row.style.display = 'none';
        }
    });

    // --- No Results Found Logic ---
    if (resultsFound === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
}

// Event Listener
// Use the 'input' event for real-time filtering as the user types
searchInput.addEventListener('input', filterTable);

// Optional: Initial call to handle case where the input might have initial value
filterTable();