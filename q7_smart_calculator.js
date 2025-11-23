"use strict";

// Q7 – Smart Calculator
// Demonstrates switch statements, custom errors, try-catch
// Shows proper error handling for mathematical edge cases

console.log("=== Q7: Smart Calculator ===\n");

// Custom error classes
class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Operation not recognized: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

class MathematicalError extends Error {
  constructor(message) {
    super(message);
    this.name = "MathematicalError";
  }
}

// Calculator function
function calculate(operation, num1, num2) {
  let result;

  // Validate inputs
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Both operands must be numbers");
  }

  // Use switch for operations
  switch (operation.toLowerCase()) {
    case "add":
    case "+":
      result = num1 + num2;
      break;

    case "subtract":
    case "-":
      result = num1 - num2;
      break;

    case "multiply":
    case "*":
      result = num1 * num2;
      break;

    case "divide":
    case "/":
      if (num2 === 0) {
        throw new MathematicalError("Cannot divide by zero");
      }
      result = num1 / num2;
      break;

    case "power":
    case "^":
      result = Math.pow(num1, num2);
      break;

    case "root":
      if (num1 < 0 && num2 % 2 === 0) {
        throw new MathematicalError(
          "Cannot take even root of negative number"
        );
      }
      result = Math.pow(num1, 1 / num2);
      break;

    default:
      throw new InvalidOperationError(operation);
  }

  return result;
}

// Test cases
const operations = [
  { op: "add", n1: 25, n2: 15 },
  { op: "divide", n1: 100, n2: 0 }, // Error: divide by zero
  { op: "power", n1: 2, n2: 8 },
  { op: "root", n1: -8, n2: 2 }, // Error: even root of negative
  { op: "unknown", n1: 5, n2: 3 }, // Error: invalid operation
  { op: "subtract", n1: 50, n2: 20 },
  { op: "multiply", n1: 7, n2: 6 },
];

console.log("Running calculations:\n");

// Track results
const results = [];
const errors = [];

// Process each operation
operations.forEach((test, index) => {
  try {
    console.log(`[${index}] Calculate: ${test.n1} ${test.op} ${test.n2}`);

    const result = calculate(test.op, test.n1, test.n2);

    results.push({
      operation: test.op,
      operand1: test.n1,
      operand2: test.n2,
      result: result.toFixed(4),
    });

    console.log(`    ✅ Result: ${result.toFixed(4)}\n`);
  } catch (error) {
    console.log(`    ❌ ERROR: ${error.message}`);
    console.log(`       Type: ${error.name}\n`);

    errors.push({
      index,
      operation: test.op,
      error: error.message,
      errorType: error.name,
    });
  }
});

// Summary report
console.log("=== CALCULATION SUMMARY ===\n");

console.log(`Total Operations Attempted: ${operations.length}`);
console.log(`Successful: ${results.length}`);
console.log(`Failed: ${errors.length}`);

if (results.length > 0) {
  console.log("\n--- SUCCESSFUL RESULTS ---");
  console.table(results);
}

if (errors.length > 0) {
  console.log("\n--- ERRORS ENCOUNTERED ---");
  console.table(errors);
}

// Detailed error handling explanation
console.log("\n=== ERROR HANDLING DETAILS ===\n");

const errorExplanations = [
  {
    Error: "Divide by Zero",
    Caught: "MathematicalError",
    Handling: "Check denominator before division",
  },
  {
    Error: "Even Root of Negative",
    Caught: "MathematicalError",
    Handling: "Validate operand and root before calculation",
  },
  {
    Error: "Invalid Operation",
    Caught: "InvalidOperationError",
    Handling: "Check operation against switch cases",
  },
  {
    Error: "Type Mismatch",
    Caught: "Error",
    Handling: "Validate operand types at start",
  },
];

console.table(errorExplanations);

// Edge case tests
console.log("\n=== EDGE CASE TESTING ===\n");

const edgeCases = [
  { op: "divide", n1: 0, n2: 5 },
  { op: "power", n1: 0, n2: 0 },
  { op: "root", n1: 0, n2: 3 },
  { op: "multiply", n1: -5, n2: -3 },
];

console.log("Testing edge cases:\n");

edgeCases.forEach((test) => {
  try {
    const result = calculate(test.op, test.n1, test.n2);
    console.log(`${test.n1} ${test.op} ${test.n2} = ${result}`);
  } catch (error) {
    console.log(`${test.n1} ${test.op} ${test.n2} → ERROR: ${error.message}`);
  }
});
