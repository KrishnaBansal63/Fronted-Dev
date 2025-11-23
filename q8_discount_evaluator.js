// Q8. Dynamic Discount Evaluator
// Calculates dynamic discounts based on category and total cart value

console.log("=== Dynamic Discount Evaluator ===\n");

// Cart with products
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

console.log("Cart Items:");
cart.forEach((product, index) => {
  console.log(
    `${index + 1}. ${product.item} (${product.category}): ₹${product.price}`
  );
});

// Function to calculate discount based on category
function getCategoryDiscount(category) {
  if (category === "electronics") {
    return 0.1; // 10% discount
  } else if (category === "fashion") {
    return 0.05; // 5% discount
  } else {
    return 0; // No discount for other categories
  }
}

// Step 1: Calculate subtotal for each item with category discount
console.log("\n--- Applying Category Discounts ---");

const itemsWithDiscount = cart.map((product) => {
  const categoryDiscount = getCategoryDiscount(product.category);
  const discountAmount = product.price * categoryDiscount;
  const discountedPrice = product.price - discountAmount;

  return {
    ...product,
    categoryDiscount: (categoryDiscount * 100).toFixed(0) + "%",
    discountAmount: discountAmount.toFixed(2),
    discountedPrice: discountedPrice.toFixed(2),
  };
});

itemsWithDiscount.forEach((product) => {
  console.log(
    `${product.item}: ₹${product.price} - ${product.categoryDiscount} (₹${product.discountAmount}) = ₹${product.discountedPrice}`
  );
});

// Step 2: Calculate total cart value
const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);
const discountedTotal = itemsWithDiscount.reduce(
  (sum, product) => sum + parseFloat(product.discountedPrice),
  0
);

console.log(`\n--- Subtotal ---`);
console.log(`Original Total: ₹${cartTotal}`);
console.log(`After Category Discounts: ₹${discountedTotal.toFixed(2)}`);

// Step 3: Apply additional discount based on total cart value
let extraDiscount = 0;

if (cartTotal > 50000) {
  extraDiscount = 0.05; // 5% extra discount
  console.log(`\n✅ Cart > ₹50,000: Additional 5% discount applied`);
} else if (cartTotal > 30000) {
  extraDiscount = 0.03; // 3% extra discount
  console.log(`\n✅ Cart > ₹30,000: Additional 3% discount applied`);
} else {
  console.log(`\nNo extra discount (cart ≤ ₹30,000)`);
}

// Calculate final total
const extraDiscountAmount = discountedTotal * extraDiscount;
const finalTotal = discountedTotal - extraDiscountAmount;
const totalSavings = cartTotal - finalTotal;

console.log(`\n--- Final Calculation ---`);
console.log(
  `Subtotal (after category discounts): ₹${discountedTotal.toFixed(2)}`
);
console.log(`Extra Discount (${(extraDiscount * 100).toFixed(0)}%): -₹${extraDiscountAmount.toFixed(2)}`);
console.log(`\n💰 Final Total: ₹${finalTotal.toFixed(2)}`);
console.log(`💵 Total Savings: ₹${totalSavings.toFixed(2)}`);
console.log(
  `📊 Overall Discount: ${((totalSavings / cartTotal) * 100).toFixed(1)}%`
);

// Test with different cart totals
console.log("\n=== Testing Different Cart Scenarios ===");

const testCarts = [
  [
    { item: "Monitor", category: "electronics", price: 12000 },
    { item: "Keyboard", category: "electronics", price: 5000 },
  ],
  [
    { item: "Shirt", category: "fashion", price: 1500 },
    { item: "Jeans", category: "fashion", price: 2500 },
    { item: "Shoes", category: "fashion", price: 3000 },
    { item: "Laptop", category: "electronics", price: 60000 },
  ],
];

testCarts.forEach((testCart, idx) => {
  const total = testCart.reduce((sum, item) => sum + item.price, 0);
  console.log(
    `\nTest ${idx + 1}: Total = ₹${total} → Extra Discount: ${total > 50000 ? "5%" : total > 30000 ? "3%" : "None"}`
  );
});
