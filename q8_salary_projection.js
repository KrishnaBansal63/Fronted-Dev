// Q8. Employee Salary Projection
// Calculate 5-year salary projection with yearly increments

// Starting salary and annual increment rate
const currentSalary = 50000; // in rupees
const incrementRate = 7; // in percentage

// Array to store yearly salaries
const yearlySalaries = [];

// Calculate salary for each year using for loop
for (let year = 1; year <= 5; year++) {
  // Apply increment using assignment operator
  let yearSalary = currentSalary;

  // Apply compound increment for each year
  for (let i = 0; i < year; i++) {
    yearSalary += yearSalary * (incrementRate / 100);
  }

  // Round to 2 decimals
  yearSalary = Math.round(yearSalary * 100) / 100;

  yearlySalaries.push({
    Year: year,
    Salary: `₹${yearSalary.toFixed(2)}`,
    Increment: `${incrementRate}%`,
    MonthlyApprox: `₹${(yearSalary / 12).toFixed(2)}`,
  });
}

// Display using console.table
console.log("=== 5-Year Salary Projection ===");
console.log(`Starting Salary: ₹${currentSalary.toFixed(2)}`);
console.log(`Annual Increment Rate: ${incrementRate}%`);
console.log("---");
console.table(yearlySalaries);

// Additional calculation: total earnings over 5 years
let totalEarnings = 0;
for (let year = 1; year <= 5; year++) {
  let yearSalary = currentSalary;
  for (let i = 0; i < year; i++) {
    yearSalary += yearSalary * (incrementRate / 100);
  }
  totalEarnings += yearSalary;
}

console.log(`---`);
console.log(`Total Earnings (5 years): ₹${totalEarnings.toFixed(2)}`);
console.log(
  `Average Annual Salary: ₹${(totalEarnings / 5).toFixed(2)}`
);
