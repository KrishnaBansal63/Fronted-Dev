// Q9. Odd–Even Number Analyzer
// Classifies numbers 1–30 with FizzBuzz logic

console.log("=== Odd–Even Number Analyzer ===\n");

// Array to store results
const results = [];

// Process numbers 1–30
for (let i = 1; i <= 30; i++) {
  let classification;

  // FizzBuzz logic with conditions
  if (i % 3 === 0 && i % 5 === 0) {
    classification = "FizzBuzz"; // Divisible by both 3 and 5
  } else if (i % 3 === 0) {
    classification = "Fizz"; // Divisible by 3
  } else if (i % 5 === 0) {
    classification = "Buzz"; // Divisible by 5
  } else if (i % 2 === 0) {
    classification = "Even"; // Even
  } else {
    classification = "Odd"; // Odd
  }

  // Push result to array
  results.push({ number: i, classification });
}

// Display results in formatted table
console.log("Classification Results (1–30):");
console.log(
  "Number | Classification"
);
console.log("-------|---------------");

results.forEach((result) => {
  console.log(
    `  ${result.number.toString().padStart(2)}   | ${result.classification}`
  );
});

// Summary statistics
console.log("\n=== Summary Statistics ===");

const fizzbuzz = results.filter((r) => r.classification === "FizzBuzz");
const fizz = results.filter((r) => r.classification === "Fizz");
const buzz = results.filter((r) => r.classification === "Buzz");
const even = results.filter((r) => r.classification === "Even");
const odd = results.filter((r) => r.classification === "Odd");

console.log(`FizzBuzz (÷3 and ÷5): ${fizzbuzz.length} numbers`);
fizzbuzz.forEach((r) => console.log(`  - ${r.number}`));

console.log(`\nFizz (÷3 only): ${fizz.length} numbers`);
fizz.forEach((r) => console.log(`  - ${r.number}`));

console.log(`\nBuzz (÷5 only): ${buzz.length} numbers`);
buzz.forEach((r) => console.log(`  - ${r.number}`));

console.log(`\nEven (not ÷3 or ÷5): ${even.length} numbers`);
console.log(`Odd (not ÷3 or ÷5): ${odd.length} numbers`);

// Interactive function for any range
console.log("\n=== Custom Range Analyzer ===");

function analyzeRange(start, end) {
  const rangeResults = [];

  for (let i = start; i <= end; i++) {
    let classification;

    if (i % 3 === 0 && i % 5 === 0) {
      classification = "FizzBuzz";
    } else if (i % 3 === 0) {
      classification = "Fizz";
    } else if (i % 5 === 0) {
      classification = "Buzz";
    } else if (i % 2 === 0) {
      classification = "Even";
    } else {
      classification = "Odd";
    }

    rangeResults.push(`${i}: ${classification}`);
  }

  return rangeResults;
}

const customRange = analyzeRange(10, 20);
console.log("Analysis for 10–20:");
customRange.forEach((result) => console.log(`  ${result}`));

// Alternative approach: Create formatted string output
console.log("\n=== Formatted Output (1–30) ===");

let output = "Numbers: ";
for (let i = 1; i <= 30; i++) {
  let symbol;

  if (i % 3 === 0 && i % 5 === 0) {
    symbol = "FB";
  } else if (i % 3 === 0) {
    symbol = "F";
  } else if (i % 5 === 0) {
    symbol = "B";
  } else if (i % 2 === 0) {
    symbol = "E";
  } else {
    symbol = "O";
  }

  output += `[${i}:${symbol}] `;
}

console.log(output);
console.log("\nLegend: FB=FizzBuzz, F=Fizz, B=Buzz, E=Even, O=Odd");
