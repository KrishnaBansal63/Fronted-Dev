// Q6. Progressive Discount System
// Apply dynamic discount tiers based on total purchase amount

// Input: total purchase amount
const totalPurchase = 7500;

// Determine discount tier and calculate savings
let discountPercentage = 0;

if (totalPurchase >= 10000) {
  discountPercentage = 25;
} else if (totalPurchase >= 5000) {
  discountPercentage = 15;
} else if (totalPurchase >= 2000) {
  discountPercentage = 5;
} else {
  discountPercentage = 0;
}

// Calculate discount amount and final price
const discountAmount = (totalPurchase * discountPercentage) / 100;
const finalPrice = totalPurchase - discountAmount;

// Display results (rounded using Math.round())
console.log("=== Progressive Discount System ===");
console.log(`Original Total: ₹${Math.round(totalPurchase)}`);
console.log(`Discount Tier: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${Math.round(discountAmount)}`);
console.log(`Final Price: ₹${Math.round(finalPrice)}`);

// Additional test cases
console.log("\n--- Test Cases ---");
const testAmounts = [1500, 2500, 5000, 8000, 12000];

for (let amount of testAmounts) {
  let discount = 0;

  if (amount >= 10000) {
    discount = 25;
  } else if (amount >= 5000) {
    discount = 15;
  } else if (amount >= 2000) {
    discount = 5;
  }

  const final = amount - (amount * discount) / 100;
  console.log(
    `₹${amount} → ${discount}% off → Final: ₹${Math.round(final)}`
  );
}
