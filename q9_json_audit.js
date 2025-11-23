"use strict";

// Q9 – JSON Audit
// Demonstrates JSON.parse() with try-catch, validation, filtering
// Hoisting: arrow functions in const are NOT hoisted

console.log("=== Q9: JSON Audit ===\n");

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
  '{"user":"Jordan","age":17}',
  '{"user":"Casey"}',
  '{"user":"Alex","age":30}',
];

// Arrays to categorize results
const validEntries = [];
const errorLog = [];
const filteredData = [];

console.log("Parsing JSON data:\n");

// Parse each entry with error handling
rawData.forEach((entry, index) => {
  try {
    // Attempt to parse JSON
    const parsed = JSON.parse(entry);

    // Check for required keys (user, age)
    if (!parsed.user || parsed.age === undefined) {
      throw new Error("Missing required keys: user or age");
    }

    // Convert age to number
    const age = Number(parsed.age);
    if (isNaN(age)) {
      throw new Error(`Invalid age value: "${parsed.age}"`);
    }

    // Store valid entry
    const validEntry = {
      user: parsed.user,
      age: age,
    };

    validEntries.push(validEntry);
    console.log(
      `✅ [Line ${index + 1}] ${JSON.stringify(validEntry)} (VALID)`
    );
  } catch (error) {
    // Log error details
    errorLog.push({
      lineNumber: index + 1,
      entry: entry.substring(0, 30) + (entry.length > 30 ? "..." : ""),
      error: error.message,
    });

    console.log(`❌ [Line ${index + 1}] Error: ${error.message}`);
  }
});

// Filter: Find only users who are 18+
console.log("\n--- FILTERING DATA (18+ Users) ---\n");

validEntries.forEach((entry) => {
  if (entry.age >= 18) {
    filteredData.push(entry);
    console.log(`✅ ${entry.user} (${entry.age}) - Eligible`);
  } else {
    console.log(`❌ ${entry.user} (${entry.age}) - Under 18`);
  }
});

// Summary report
console.log("\n=== AUDIT SUMMARY ===\n");

console.log(`Total Records: ${rawData.length}`);
console.log(`Valid Parsed: ${validEntries.length}`);
console.log(`Errors Found: ${errorLog.length}`);
console.log(`18+ Eligible: ${filteredData.length}`);

if (errorLog.length > 0) {
  console.log("\n--- ERROR DETAILS ---");
  console.table(errorLog);
}

console.log("\n--- VALID DATA ---");
console.table(validEntries);

console.log("\n--- FILTERED (18+ Only) ---");
console.table(filteredData);

// Bonus: Statistics
console.log("\n=== BONUS: AGE STATISTICS ===\n");

if (validEntries.length > 0) {
  const ages = validEntries.map((e) => e.age);
  const avgAge = (ages.reduce((sum, age) => sum + age, 0) / ages.length).toFixed(
    1
  );
  const maxAge = Math.max(...ages);
  const minAge = Math.min(...ages);

  console.log(`Average Age: ${avgAge}`);
  console.log(`Oldest: ${maxAge}`);
  console.log(`Youngest: ${minAge}`);
}

// Detailed error analysis
console.log("\n=== ERROR BREAKDOWN ===\n");

const errorTypes = {};
errorLog.forEach((err) => {
  const type = err.error.split(":")[0];
  errorTypes[type] = (errorTypes[type] || 0) + 1;
});

Object.entries(errorTypes).forEach(([type, count]) => {
  console.log(`${type}: ${count}`);
});

// Best practices for JSON handling
console.log("\n=== JSON HANDLING BEST PRACTICES ===");

const bestPractices = [
  "Always use try-catch with JSON.parse()",
  "Validate required fields after parsing",
  "Convert string numbers to actual numbers",
  "Use JSON Schema for complex data",
  "Log detailed error messages with line numbers",
  "Test with invalid/malformed JSON",
  "Implement fallback values for missing data",
];

bestPractices.forEach((practice, idx) => {
  console.log(`${idx + 1}. ${practice}`);
});

// Example of better JSON with schema validation
console.log("\n=== SCHEMA VALIDATION EXAMPLE ===\n");

const schema = {
  user: { type: "string", required: true },
  age: { type: "number", required: true },
};

function validateAgainstSchema(data, schema) {
  for (const [key, rules] of Object.entries(schema)) {
    if (rules.required && !(key in data)) {
      throw new Error(`Missing required field: ${key}`);
    }
    if (key in data && typeof data[key] !== rules.type) {
      throw new Error(`Field ${key} must be type ${rules.type}`);
    }
  }
  return true;
}

console.log("Testing schema validation:");
try {
  const testData = { user: "Bob", age: 28 };
  validateAgainstSchema(testData, schema);
  console.log(`✅ ${JSON.stringify(testData)} passes validation`);
} catch (error) {
  console.log(`❌ Validation failed: ${error.message}`);
}
