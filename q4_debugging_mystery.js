"use strict";

// Q4 – Debugging Mystery
// Demonstrates strict mode error with undeclared variables
// Shows the difference in behavior with and without strict mode

console.log("=== Q4: Debugging Mystery ===\n");

console.log("--- STRICT MODE (Current) ---");
console.log("Code:\n");
console.log(`  function showMessage() {
    greeting = "Welcome"; // undeclared variable
    console.log(greeting);
  }
  showMessage();
`);

console.log("\nAttempting to run undeclared variable assignment...\n");

// This will throw an error in strict mode
try {
  function showMessage() {
    // In strict mode, this throws: ReferenceError: greeting is not defined
    greeting = "Welcome"; // eslint-disable-line no-undef
    console.log(greeting);
  }
  showMessage();
} catch (error) {
  console.log(`❌ ERROR CAUGHT: ${error.name}`);
  console.log(`   Message: ${error.message}`);
  console.log(`   Type: ${typeof error}`);
}

console.log("\n--- WITHOUT STRICT MODE (Simulated) ---");
console.log("If this were NOT in strict mode:");
console.log("  - greeting would be created as a global variable");
console.log("  - console.log would print: 'Welcome'");
console.log("  - Variable becomes property of window (in browsers) or global (Node.js)");

// Corrected version using proper variable declaration
console.log("\n--- CORRECTED VERSION ---");
console.log("Solution: Declare the variable first\n");

function showMessageFixed() {
  // Proper declaration using let, const, or var
  let greeting = "Welcome"; // Local variable
  console.log(greeting);
}

console.log("✅ Running corrected version:");
showMessageFixed(); // Output: Welcome

// Demonstrate the scope rules
console.log("\n--- SCOPE EXPLANATION ---");

console.log(`
In strict mode:
  - Assignment to undeclared variable throws ReferenceError
  - Forces explicit variable declaration
  - Prevents accidental global variable pollution
  
In non-strict mode:
  - Undeclared assignment creates implicit global
  - Dangerous for large applications
  - Hard to debug variable source
`);

// Alternative: Explicitly declare global (not recommended)
console.log("--- ALTERNATIVE (Not Recommended) ---");

// If you actually need a global, be explicit
globalThis.greeting = "Welcome";

function showMessageGlobal() {
  console.log(globalThis.greeting);
}

showMessageGlobal();
console.log(`(Using globalThis is explicit and clear)`);

// Summary of strict mode benefits
console.log("\n=== STRICT MODE BENEFITS ===");
const strictModeBenefits = [
  "Prevents undeclared variables",
  "Makes eval() safer",
  "Disallows deleting variables",
  "Disallows duplicate parameter names",
  "Forbids octal syntax",
  "Prevents 'with' statements",
];

strictModeBenefits.forEach((benefit, idx) => {
  console.log(`${idx + 1}. ${benefit}`);
});
