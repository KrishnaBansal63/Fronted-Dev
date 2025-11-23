// Q3. Monthly Expense Tracker
// Calculate total, average, and final amount after tax

// Array of monthly expenses for 5 categories
const expenses = {
  food: 5000,
  travel: 2000,
  rent: 15000,
  bills: 3000,
  leisure: 1500,
};

// Extract expense values into array for calculations
const expenseValues = Object.values(expenses);

// Calculate total using arithmetic operator
let total = 0;
for (let expense of expenseValues) {
  total += expense; // addition and assignment operator
}

// Calculate average
const average = total / expenseValues.length;

// Add 10% tax to total using assignment operator
const taxRate = 0.1;
let finalAmount = total;
finalAmount += total * taxRate; // Add tax using += operator

// Display results with toFixed(2) for rounding
console.log("=== Monthly Expense Tracker ===");
console.log(`Food: ₹${expenses.food.toFixed(2)}`);
console.log(`Travel: ₹${expenses.travel.toFixed(2)}`);
console.log(`Rent: ₹${expenses.rent.toFixed(2)}`);
console.log(`Bills: ₹${expenses.bills.toFixed(2)}`);
console.log(`Leisure: ₹${expenses.leisure.toFixed(2)}`);
console.log("---");
console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${(total * taxRate).toFixed(2)}`);
console.log(`Final Amount (with Tax): ₹${finalAmount.toFixed(2)}`);
