// Q10. Citizen Eligibility Validator
// Evaluate eligibility for voting, driving, and passport based on age and citizenship

// Input variables
const age = 22;
const isCitizen = true;

// Determine eligibility using nested if-else and logical operators
let eligibilityMessage;

if (isCitizen && age >= 18) {
  eligibilityMessage = "✅ Eligible for all services.";
} else if (isCitizen && age >= 18 && age <= 20) {
  eligibilityMessage = "✅ Eligible to vote only.";
} else if (!isCitizen && age >= 18) {
  eligibilityMessage = "⚠️  Only age criteria met.";
} else {
  eligibilityMessage = "❌ Not eligible yet.";
}

// Display eligibility report
console.log("=== Citizen Eligibility Validator ===");
console.log(`Age: ${age} years`);
console.log(`Citizen: ${isCitizen ? "Yes" : "No"}`);
console.log("---");
console.log(eligibilityMessage);

// Detailed eligibility breakdown
console.log("\n--- Detailed Eligibility Breakdown ---");
const canVote = isCitizen && age >= 18;
const canDrive = age >= 18; // Assuming driving age is 18 (can adjust)
const canApplyPassport = isCitizen && age >= 18;

console.log(`Can Vote: ${canVote ? "✅ Yes" : "❌ No"}`);
console.log(`Can Drive: ${canDrive ? "✅ Yes" : "❌ No"}`);
console.log(`Can Apply for Passport: ${canApplyPassport ? "✅ Yes" : "❌ No"}`);

// Test multiple scenarios
console.log("\n=== Test Cases ===");

const testCases = [
  { age: 25, isCitizen: true },
  { age: 19, isCitizen: true },
  { age: 20, isCitizen: false },
  { age: 15, isCitizen: true },
];

for (let testCase of testCases) {
  let message;
  const a = testCase.age;
  const c = testCase.isCitizen;

  if (c && a >= 18) {
    message = "Eligible for all services.";
  } else if (c && a >= 18 && a <= 20) {
    message = "Eligible to vote only.";
  } else if (!c && a >= 18) {
    message = "Only age criteria met.";
  } else {
    message = "Not eligible yet.";
  }

  console.log(`Age: ${a}, Citizen: ${c ? "Yes" : "No"} → ${message}`);
}
