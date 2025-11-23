"use strict";

// Q6 – Pyramid Pattern Generator
// Demonstrates var vs let scoping, loop variable behavior
// Hoisting: var is function-scoped, let is block-scoped

console.log("=== Q6: Pyramid Pattern Generator ===\n");

// Function to generate pyramid with let
function pyramidWithLet(rows = 5) {
  console.log("--- Using LET (block-scoped) ---");

  for (let i = 1; i <= rows; i++) {
    // Each iteration has its own 'i' in block scope
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Function to generate pyramid with var (watch re-use)
function pyramidWithVar(rows = 5) {
  console.log("\n--- Using VAR (function-scoped) ---");

  for (var i = 1; i <= rows; i++) {
    // 'i' is reused across all iterations (function scope)
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  // After loop, 'i' and 'j' still exist (not garbage collected)
  console.log(`(After loop: i = ${i}, j = ${j})`);
}

// Generate pyramids
pyramidWithLet(5);
pyramidWithVar(5);

// Demonstrate the scoping difference
console.log("\n--- SCOPING DIFFERENCE EXPLANATION ---\n");

console.log("LET (block-scoped):");
console.log("  - Each iteration creates NEW block scope");
console.log("  - 'i' and 'j' are local to their block");
console.log("  - Memory cleaned up after block ends");
console.log("  - No variable leakage outside loop");

console.log("\nVAR (function-scoped):");
console.log("  - All iterations share SAME 'i' and 'j'");
console.log("  - Variables persist after loop ends");
console.log("  - Can cause bugs and unexpected behavior");
console.log("  - Memory remains allocated in function scope");

// Step-by-step debugging with detailed logging
console.log("\n--- DEBUG: Step-by-Step Execution ---\n");

function pyramidDebug(rows = 3) {
  console.log("Using LET with debug logging:");

  for (let i = 1; i <= rows; i++) {
    console.log(`\n  Iteration ${i}:`);
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "* ";
      console.log(`    Inner loop j=${j}, row="${row}"`);
    }

    console.log(`  → Output: ${row}`);
  }
}

pyramidDebug(3);

// User-controlled pyramid size
console.log("\n--- USER-CONTROLLED PYRAMID ---\n");

function generatePyramid(userRows = 5) {
  console.log(`Generating pyramid with ${userRows} rows:\n`);

  if (userRows < 1 || userRows > 20) {
    console.log("❌ Invalid input! Use 1-20 rows");
    return;
  }

  for (let row = 1; row <= userRows; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

generatePyramid(7);

// Inverted pyramid
console.log("\n--- INVERTED PYRAMID ---\n");

function invertedPyramid(rows = 5) {
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

invertedPyramid(5);

// Comparison: VAR re-use issue (closure problem)
console.log("\n--- VAR RE-USE BUG DEMONSTRATION ---\n");

console.log("Problem with VAR in loop with callbacks:");

console.log("\nUsing VAR (Wrong):");
const functionsVar = [];
for (var i = 0; i < 3; i++) {
  functionsVar.push(() => i);
}
console.log("  Results:", functionsVar.map((fn) => fn())); // [3, 3, 3] - all share same i!

console.log("\nUsing LET (Correct):");
const functionsLet = [];
for (let i = 0; i < 3; i++) {
  functionsLet.push(() => i);
}
console.log("  Results:", functionsLet.map((fn) => fn())); // [0, 1, 2] - each has own i

console.log("\nExplanation:");
console.log("  VAR: All closures reference same 'i', which ends at 3");
console.log("  LET: Each iteration captures its own 'i' in block scope");
