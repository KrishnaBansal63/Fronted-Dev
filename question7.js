// Get necessary DOM elements
const mouseBox = document.getElementById('mouse-box');
const coordinatesDisplay = document.getElementById('coordinates');

/**
 * Tracks mouse movement and updates the live coordinates display.
 * @param {MouseEvent} event - The mousemove event object.
 */
function trackMouseMove(event) {
    // clientX and clientY provide the coordinates relative to the viewport
    const x = event.clientX;
    const y = event.clientY;

    coordinatesDisplay.innerHTML = `Mouse Position: **X: ${x}, Y: ${y}**`;
}

/**
 * Creates and places a red dot at the double-click position.
 * @param {MouseEvent} event - The dblclick event object.
 */
function dropRedDot(event) {
    // event.clientX and event.clientY are relative to the viewport.
    
    // To position the dot relative to the mouseBox, we need to know the box's position.
    const rect = mouseBox.getBoundingClientRect();

    // Calculate position relative to the box
    // Subtract the box's top/left coordinates from the mouse's viewport coordinates
    const xInsideBox = event.clientX - rect.left;
    const yInsideBox = event.clientY - rect.top;

    // Create the red dot element
    const dot = document.createElement('div');
    dot.classList.add('red-dot');
    
    // Set absolute position inside the mouse box
    dot.style.left = `${xInsideBox}px`;
    dot.style.top = `${yInsideBox}px`;

    // Append the dot to the box
    mouseBox.appendChild(dot);
}

// Event Listeners
// Track mouse movement inside the box
mouseBox.addEventListener('mousemove', trackMouseMove);

// Drop dot on double-click
mouseBox.addEventListener('dblclick', dropRedDot);

// Optional: Clear coordinates when mouse leaves the box
mouseBox.addEventListener('mouseleave', () => {
    coordinatesDisplay.innerHTML = `Mouse Position: **X: 0, Y: 0** (Move mouse inside the box)`;
});