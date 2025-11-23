"use strict";

// Q1 – Dynamic Data Parser
// Converts mixed API data into different types with validation
// Hoisting: function declarations are hoisted, variables are not

console.log("=== Q1: Dynamic Data Parser ===\n");

const apiData = [
  "25",
  "true",
  "false",
  "NaN",
  " ",
  "100px",
  "3.14",
  null,
  undefined,
];

// Arrays to store valid and invalid data
const validNumbers = [];
const invalidData = [];

// Helper function to check if value can be converted to valid number
function isValidNumber(value) {
  const num = Number(value);
  // Check for NaN, empty strings, non-numeric strings
  return !isNaN(num) && value !== null && value !== undefined && value.toString().trim() !== "";
}

console.log("Processing API Data:\n");

// Loop through each value
for (let i = 0; i < apiData.length; i++) {
  const originalValue = apiData[i];
  let asNumber, asBoolean, asString;

  try {
    // Convert to different types
    asNumber = Number(originalValue);
    asBoolean = Boolean(originalValue);
    asString = String(originalValue);

    // Log each conversion
    console.log(`[${i}] Original: ${JSON.stringify(originalValue)}`);
    console.log(`    → Number: ${asNumber} (valid: ${!isNaN(asNumber)})`);
    console.log(`    → Boolean: ${asBoolean}`);
    console.log(`    → String: "${asString}"`);

    // Categorize as valid or invalid
    if (isValidNumber(originalValue)) {
      validNumbers.push({
        original: originalValue,
        number: asNumber,
        string: asString,
      });
      console.log(`    ✅ VALID\n`);
    } else {
      invalidData.push({
        original: originalValue,
        reason: isNaN(asNumber) ? "NaN result" : "Empty or non-numeric",
      });
      console.log(`    ❌ INVALID\n`);
    }
  } catch (error) {
    console.log(`    ⚠️ ERROR: ${error.message}\n`);
    invalidData.push({ original: originalValue, reason: "Conversion error" });
  }
}

// Print detailed report
console.log("=== DETAILED REPORT ===\n");

console.log(`Valid Numbers (${validNumbers.length}):`);
console.log("---");
validNumbers.forEach((item, idx) => {
  console.log(`${idx + 1}. Original: "${item.original}" → Number: ${item.number}`);
});

console.log(`\nInvalid Data (${invalidData.length}):`);
console.log("---");
invalidData.forEach((item, idx) => {
  console.log(`${idx + 1}. Value: "${item.original}" (Reason: ${item.reason})`);
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total Items: ${apiData.length}`);
console.log(`Valid: ${validNumbers.length}`);
console.log(`Invalid: ${invalidData.length}`);
console.log(`Success Rate: ${((validNumbers.length / apiData.length) * 100).toFixed(1)}%`);
