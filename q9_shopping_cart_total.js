"use strict";

// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
// - Cart class with items {name, price, quantity}
// - getTotal(), applyCoupon() using RegExp:
//   coupons like SAVE20 (20%), DISC10 (10%)

class Cart {
  constructor() {
    this.items = [];
    this.appliedCoupon = null;
  }

  addItem(name, price, quantity = 1) {
    if (!name || typeof price !== 'number' || price < 0) throw new Error('Invalid item');
    const item = { name, price: Number(price), quantity: Number(quantity) };
    this.items.push(item);
  }

  getSubtotal() {
    return this.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    if (!this.appliedCoupon) return Number(subtotal.toFixed(2));
    return Number((subtotal * (1 - this.appliedCoupon.discount / 100)).toFixed(2));
  }

  // Accepts coupon codes like SAVE20 or DISC10
  applyCoupon(code) {
    if (typeof code !== 'string') throw new Error('Coupon must be a string');
    const normalized = code.trim().toUpperCase();
    const pattern = /^(SAVE|DISC)(\d{1,2})$/; // captures SAVE or DISC + percent up to 2 digits
    const match = normalized.match(pattern);
    if (!match) {
      throw new Error('Invalid coupon format. Use SAVE20 or DISC10');
    }
    const percent = Number(match[2]);
    if (percent <= 0 || percent > 100) throw new Error('Invalid coupon percentage');
    this.appliedCoupon = { code: normalized, discount: percent };
    return this.appliedCoupon;
  }

  clearCoupon() {
    this.appliedCoupon = null;
  }

  summary() {
    return {
      items: this.items.slice(),
      subtotal: Number(this.getSubtotal().toFixed(2)),
      coupon: this.appliedCoupon,
      total: this.getTotal(),
    };
  }
}

// Demo usage
const cart = new Cart();
cart.addItem('T-Shirt', 499.99, 2);
cart.addItem('Sneakers', 2999.5, 1);
cart.addItem('Cap', 249.5, 1);

console.log('\nCart summary before coupon:');
console.table(cart.summary());

try {
  console.log('\nApplying coupon SAVE20...');
  cart.applyCoupon('SAVE20');
  console.log('Coupon applied:', cart.appliedCoupon);
  console.log('Total after discount:', cart.getTotal());
} catch (error) {
  console.log('Coupon error:', error.message);
}

console.log('\nFinal Cart Summary:');
console.table(cart.summary());

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Cart };
}
