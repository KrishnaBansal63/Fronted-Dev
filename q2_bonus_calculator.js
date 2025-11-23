"use strict";

// Q2 – Employee Bonus Calculator
// Demonstrates strict mode, type conversion, try-catch, template strings
// Hoisting: function scope prevents implicit globals

console.log("=== Q2: Employee Bonus Calculator ===\n");

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

// Result storage
const results = [];
const errors = [];

// Function to calculate bonus
function calculateBonus(salary, years) {
  // Strict mode prevents implicit globals
  const salaryNum = Number(salary);
  const yearsNum = Number(years);

  if (isNaN(salaryNum) || isNaN(yearsNum)) {
    throw new Error("Invalid salary or years data");
  }

  // Calculate bonus based on years of service
  if (yearsNum > 3) {
    return salaryNum * 0.1; // 10% bonus for 3+ years
  } else {
    return salaryNum * 0.05; // 5% bonus for <3 years
  }
}

// Process each employee
employees.forEach((emp, index) => {
  try {
    // Validate required properties
    if (!emp.name || emp.salary === undefined || emp.years === undefined) {
      throw new Error(
        `Missing property in employee at index ${index}`
      );
    }

    // Convert to numbers
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    // Validate conversions
    if (isNaN(salary) || isNaN(years)) {
      throw new Error(
        `Invalid number conversion for ${emp.name}`
      );
    }

    // Calculate bonus
    const bonus = calculateBonus(emp.salary, emp.years);
    const totalCompensation = salary + bonus;

    // Store result using template string
    results.push({
      name: emp.name,
      salary,
      years,
      bonus: bonus.toFixed(2),
      total: totalCompensation.toFixed(2),
    });

    // Print formatted output with template strings
    console.log(`
✅ ${emp.name.toUpperCase()}
   Base Salary    : ₹${salary.toLocaleString()}
   Years of Service: ${years} years
   Bonus (${years > 3 ? "10%" : "5%"}): ₹${bonus.toFixed(2)}
   Total Comp.    : ₹${totalCompensation.toFixed(2)}
`);
  } catch (error) {
    // Catch and log errors
    console.log(`❌ Error processing employee at index ${index}:`);
    console.log(`   Message: ${error.message}\n`);

    errors.push({
      index,
      employee: emp.name || "Unknown",
      error: error.message,
    });
  }
});

// Summary report
console.log("=== SUMMARY REPORT ===");
console.log(`Total Processed: ${results.length}`);
console.log(`Total Errors: ${errors.length}`);

if (results.length > 0) {
  const totalBonusPool = results.reduce(
    (sum, emp) => sum + parseFloat(emp.bonus),
    0
  );
  const totalCompensation = results.reduce(
    (sum, emp) => sum + parseFloat(emp.total),
    0
  );

  console.log(`\nBonus Pool: ₹${totalBonusPool.toFixed(2)}`);
  console.log(`Total Compensation: ₹${totalCompensation.toFixed(2)}`);
}

if (errors.length > 0) {
  console.log("\nErrors Encountered:");
  errors.forEach((err) => {
    console.log(`  - ${err.employee}: ${err.error}`);
  });
}

// Note on strict mode:
console.log(
  "\n[INFO] 'use strict' prevents: implicit globals, deleting variables, duplicate parameter names"
);
