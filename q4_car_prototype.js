"use strict";

// Q4: Car constructor with prototype method getDetails()

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

// Create two cars
const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

// Demonstrate prototype sharing
car1.getDetails();
car2.getDetails();

// Confirm same function reference (shared)
console.log('Same getDetails function on prototype?', car1.getDetails === car2.getDetails);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Car };
}
