"use strict";

// Q1: E-Commerce Product Manager (Classes + Objects)
// - Product class with id, name, price, category
// - Methods: applyDiscount(percent), displayDetails()
// - Create multiple products, store in array, filter price > 1000

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
  }

  // Apply a percentage discount (e.g., 10 for 10%)
  applyDiscount(percent) {
    if (typeof percent !== 'number' || percent < 0 || percent > 100) {
      throw new Error('Discount percent must be a number between 0 and 100');
    }
    const discountAmount = (this.price * percent) / 100;
    this.price = Number((this.price - discountAmount).toFixed(2));
    return this.price;
  }

  // Return a formatted product detail string
  displayDetails() {
    return `Product [${this.id}] ${this.name} — \u20B9 ${this.price} (${this.category})`;
  }
}

// Example usage
const products = [
  new Product(1, 'Laptop Pro 15"', 1500, 'Electronics'),
  new Product(2, 'Wireless Mouse', 25, 'Accessories'),
  new Product(3, '4K Monitor', 800, 'Electronics'),
  new Product(4, 'Office Chair', 1200, 'Furniture'),
  new Product(5, 'Smartphone X', 999, 'Electronics'),
];

console.log('\n=== All Products ===');
products.forEach((p) => console.log(p.displayDetails()));

// Apply a discount to a product
console.log('\nApplying 10% discount to Product 1...');
products[0].applyDiscount(10);
console.log(products[0].displayDetails());

// Display products with price > 1000
console.log('\n=== Products with price > 1000 ===');
const expensive = products.filter((p) => p.price > 1000);
expensive.forEach((p) => console.log(p.displayDetails()));

// Export for Node usage (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Product, products };
}
