"use strict";

// Q2: applyOperation(numbers, operation)
// Use with callbacks to transform arrays

function applyOperation(numbers, operation) {
  if (!Array.isArray(numbers)) throw new Error('numbers must be an array');
  if (typeof operation !== 'function') throw new Error('operation must be a function');
  return numbers.map(operation);
}

// Examples
const arr = [1, 2, 3, 4];
const doubled = applyOperation(arr, (n) => n * 2);
const squared = applyOperation(arr, (n) => n * n);

console.log('Original:', arr);
console.log('Doubled:', doubled);
console.log('Squared:', squared);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { applyOperation };
}
