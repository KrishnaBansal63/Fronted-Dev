"use strict";

// Q3 – Transaction Validator
// Demonstrates custom errors, error categorization, and try-catch
// Hoisting: var declarations are hoisted with undefined, then assigned

console.log("=== Q3: Transaction Validator ===\n");

// Custom error classes
class ValidationError extends Error {
  constructor(message, type) {
    super(message);
    this.name = "ValidationError";
    this.type = type;
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
  { id: 5, amount: 1500 },
  { amount: 300 }, // missing id
];

// Arrays to categorize results
const validTransactions = [];
const invalidTransactions = [];

console.log("Validating Transactions:\n");

// Loop through transactions
transactions.forEach((transaction, index) => {
  try {
    // Check for null entry
    if (transaction === null) {
      throw new ValidationError("Transaction is null", "NULL_ENTRY");
    }

    // Check for missing id or amount
    if (transaction.id === undefined) {
      throw new ValidationError("Missing transaction ID", "MISSING_ID");
    }

    if (transaction.amount === undefined) {
      throw new ValidationError("Missing transaction amount", "MISSING_AMOUNT");
    }

    // Check for negative amount
    if (transaction.amount < 0) {
      throw new ValidationError(
        `Negative amount: ₹${transaction.amount}`,
        "NEGATIVE_AMOUNT"
      );
    }

    // If no error, add to valid list
    validTransactions.push(transaction);
    console.log(`✅ [${index}] Transaction #${transaction.id}: ₹${transaction.amount} (VALID)`);
  } catch (error) {
    // Categorize error
    invalidTransactions.push({
      index,
      transaction,
      errorType: error.type || "UNKNOWN",
      errorMessage: error.message,
    });

    // Log error with type
    console.log(
      `❌ [${index}] ${error.message} (Type: ${error.type || "UNKNOWN"})`
    );
  }
});

// Final Report
console.log("\n=== TRANSACTION REPORT ===\n");

console.log(`Valid Transactions: ${validTransactions.length}`);
console.log("---");
validTransactions.forEach((tx) => {
  console.log(`  Transaction #${tx.id}: ₹${tx.amount}`);
});

console.log(`\nInvalid Transactions: ${invalidTransactions.length}`);
console.log("---");
invalidTransactions.forEach((item) => {
  const txInfo = item.transaction
    ? `#${item.transaction.id || "N/A"}`
    : "NULL";
  console.log(
    `  [Index ${item.index}] ${txInfo} - ${item.errorType}: ${item.errorMessage}`
  );
});

// Summary by error type
console.log(`\n=== ERROR BREAKDOWN ===`);
const errorTypes = {};
invalidTransactions.forEach((item) => {
  errorTypes[item.errorType] = (errorTypes[item.errorType] || 0) + 1;
});

Object.entries(errorTypes).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});

// Final statistics
console.log(`\n=== SUMMARY ===`);
console.log(`Total Transactions: ${transactions.length}`);
console.log(`Success Rate: ${((validTransactions.length / transactions.length) * 100).toFixed(1)}%`);
console.log(`Passed: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
