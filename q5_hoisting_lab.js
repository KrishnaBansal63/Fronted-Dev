"use strict";

// Q5 – Hoisting Lab: The Sequence Trap
// Demonstrates how function and variable hoisting affects execution order
// Hoisting: function declarations are hoisted, var declarations partially hoisted

console.log("=== Q5: Hoisting Lab ===\n");

console.log("--- ORIGINAL CODE (with issues) ---\n");

// This demonstrates the hoisting trap
function hoistingDemo() {
  console.log("1. Value of score:", typeof score); // undefined (hoisted but not initialized)

  announce(); // This works - function is hoisted

  var score = 50;

  function announce() {
    console.log("2. announce() called - Game started");
  }

  let status = "ready";

  // This will throw error because startGame is called before function declaration
  // (in non-hoisted context due to let/const block scope)
  try {
    startGame();
  } catch (error) {
    console.log(`3. ERROR: ${error.message}`);
  }

  function startGame() {
    // status is in Temporal Dead Zone (TDZ) before its declaration
    console.log(`4. startGame() called - status: ${status}`);
  }
}

console.log("Running hoisting demo:\n");
hoistingDemo();

console.log("\n--- WHAT HAPPENED (Hoisting Explanation) ---\n");

const explanation = `
1. var score:
   - Declaration IS hoisted (moved to top of function scope)
   - Initialization (=50) stays at original position
   - So at line 1, score exists but is undefined

2. function announce():
   - ENTIRE function is hoisted
   - So calling it before declaration works

3. let status:
   - NOT hoisted in the same way as var
   - Exists in Temporal Dead Zone (TDZ) until declaration is reached
   - Accessing before declaration throws ReferenceError

4. startGame() called after let status:
   - Function exists but let status is in TDZ
   - Inside function, accessing status throws ReferenceError
`;

console.log(explanation);

// FIXED VERSION
console.log("\n--- FIXED VERSION (Proper Order) ---\n");

function hoistingFixed() {
  // Declare all variables at top
  let status = "ready";
  var score = 50;

  console.log("1. score declared:", score);
  announce();
  console.log("2. status declared:", status);
  startGame();

  function announce() {
    console.log("2.1 Game started");
  }

  function startGame() {
    console.log("2.2 Game status:", status);
  }
}

console.log("Running fixed version:\n");
hoistingFixed();

// Arrow function comparison
console.log("\n--- ARROW FUNCTION HOISTING (Comparison) ---\n");

function arrowComparison() {
  console.log("1. Calling arrow function...");

  try {
    // Arrow function assigned to const is NOT hoisted
    announceArrow();
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
    console.log(`   (Arrow functions in const are NOT hoisted)`);
  }

  // This works - traditional function IS hoisted
  announceTrad();

  // Arrow function after declaration
  const announceArrow = () => {
    console.log("3. Arrow function called");
  };

  function announceTrad() {
    console.log("2. Traditional function called");
  }

  // Now call arrow function
  announceArrow();
}

console.log("Arrow vs Traditional Hoisting:\n");
arrowComparison();

// Summary table
console.log("\n=== HOISTING SUMMARY TABLE ===");
const hoistingTable = [
  {
    Type: "var declaration",
    Hoisted: "Yes (undefined)",
    AccessBefore: "undefined",
  },
  {
    Type: "let/const declaration",
    Hoisted: "Yes (TDZ)",
    AccessBefore: "ReferenceError",
  },
  {
    Type: "function declaration",
    Hoisted: "Yes (full)",
    AccessBefore: "Works",
  },
  {
    Type: "function expression (var)",
    Hoisted: "Partial (undefined)",
    AccessBefore: "TypeError",
  },
  {
    Type: "arrow function (const)",
    Hoisted: "No (TDZ)",
    AccessBefore: "ReferenceError",
  },
];

console.table(hoistingTable);
