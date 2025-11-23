// Q1. Scope Conflict Resolver
// Demonstrates global vs. local variable scoping and how it affects logic

// Global variable
const bonus = 5000;

console.log("=== Scope Conflict Resolver ===\n");
console.log(`Global bonus: ₹${bonus}`);

// Function with local variables
function calculateSalary(isPermanent) {
  // Local variable (only accessible inside this function)
  const salary = 40000;

  // Demonstrate scope: bonus is accessible (global), salary is local
  let totalSalary;

  // Add bonus only if isPermanent is true
  if (isPermanent) {
    totalSalary = salary + bonus;
    console.log(`\n--- Employee is Permanent ---`);
    console.log(`Base Salary (local): ₹${salary}`);
    console.log(`Bonus (global): ₹${bonus}`);
    console.log(`✅ Bonus Applied`);
  } else {
    totalSalary = salary;
    console.log(`\n--- Employee is Not Permanent ---`);
    console.log(`Base Salary (local): ₹${salary}`);
    console.log(`Bonus (global): ₹${bonus}`);
    console.log(`❌ No Bonus`);
  }

  console.log(`Total Salary: ₹${totalSalary}`);
  return totalSalary;
}

// Test 1: Permanent employee
console.log("\nTest Case 1: isPermanent = true");
calculateSalary(true);

// Test 2: Non-permanent employee
console.log("\nTest Case 2: isPermanent = false");
calculateSalary(false);

// Demonstrate that 'salary' is not accessible outside function
console.log(
  "\n--- Scope Demonstration ---"
);
console.log(
  `Attempting to access local 'salary' outside function: salary = ${typeof salary === "undefined" ? "undefined (not accessible)" : salary}`
);
console.log(
  `Global 'bonus' is still accessible: bonus = ₹${bonus}`
);

// Nested function example (function scope)
console.log("\n--- Nested Function Scope ---");
function payrollSystem() {
  const department = "Engineering";

  function processSalary(isPerm) {
    const salary = 50000;
    // Can access department (outer scope) and bonus (global)
    console.log(`Department: ${department}, isPermanent: ${isPerm}`);
    return isPerm ? salary + bonus : salary;
  }

  const totalPay = processSalary(true);
  console.log(`Processing nested function result: ₹${totalPay}`);
}

payrollSystem();
