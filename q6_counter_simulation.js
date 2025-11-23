// Q6. Event-Based Counter Simulation
// Simulates click events that increment/decrement a counter

console.log("=== Event-Based Counter Simulation ===\n");

// Global counter variable
let count = 0;

// Function to increment counter
function increment() {
  count++;
  console.log(`➕ Incremented: ${count}`);
  return count;
}

// Function to decrement counter
function decrement() {
  count--;
  console.log(`➖ Decremented: ${count}`);
  return count;
}

// Simulate clicks
console.log("Simulating button clicks:");
console.log("Initial count:", count);

increment(); // count = 1
increment(); // count = 2
decrement(); // count = 1
increment(); // count = 2
increment(); // count = 3
decrement(); // count = 2

console.log(`\nFinal count: ${count}`);

// Nested function to demonstrate function scope
console.log("\n=== Function Scope with Nested Functions ===");

function createCounter() {
  let counter = 0; // Local to createCounter

  // Nested function: increment
  function add(value = 1) {
    counter += value;
    console.log(`Add ${value}: counter = ${counter}`);
    return counter;
  }

  // Nested function: decrement
  function subtract(value = 1) {
    counter -= value;
    console.log(`Subtract ${value}: counter = ${counter}`);
    return counter;
  }

  // Nested function: display
  function display() {
    console.log(`Current Count: ${counter}`);
    return counter;
  }

  // Nested function: reset
  function reset() {
    counter = 0;
    console.log(`Reset: counter = ${counter}`);
    return counter;
  }

  // Return object with methods (closure pattern)
  return { add, subtract, display, reset };
}

// Create counter instance
const counter1 = createCounter();

console.log("Using counter1 (nested functions):");
counter1.add(5); // counter = 5
counter1.add(3); // counter = 8
counter1.subtract(2); // counter = 6
counter1.display(); // displays 6

console.log("\nUsing counter1 after reset:");
counter1.reset();
counter1.display();

// Multiple counter instances (each has its own scope)
console.log("\n--- Multiple Counter Instances ---");
const counter2 = createCounter();
const counter3 = createCounter();

console.log("Counter1:");
counter1.add(10);
counter1.display();

console.log("\nCounter2:");
counter2.add(5);
counter2.display();

console.log("\nCounter3:");
counter3.add(20);
counter3.display();

console.log(
  "\n(Each counter maintains its own independent count)"
);

// Simulating rapid clicks
console.log("\n=== Simulating Rapid Clicks ---");
let globalCount = 0;

function rapidClickSimulation(clickCount) {
  for (let i = 0; i < clickCount; i++) {
    globalCount++;
  }
  console.log(`After ${clickCount} rapid clicks: ${globalCount}`);
}

rapidClickSimulation(5); // 5 clicks
rapidClickSimulation(3); // 3 more clicks
console.log(`Total clicks processed: ${globalCount}`);
