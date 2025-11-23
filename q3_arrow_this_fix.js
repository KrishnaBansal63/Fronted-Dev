"use strict";

// Q3: Arrow vs Normal method for `this`
// Show arrow function method where this is undefined, then fix with normal function

const user = {
  name: 'Alice',
  // arrow function as method — 'this' is lexical (won't refer to the object)
  showNameArrow: () => {
    // In strict mode, this inside arrow refers to surrounding scope (module/global), not the object
    console.log('arrow method this.name =', this && this.name); // undefined
  },
  // normal function method — `this` refers to the object when called as user.method()
  showNameNormal() {
    console.log('normal method this.name =', this.name);
  },
};

console.log('Calling showNameArrow: (expected undefined)');
user.showNameArrow();

console.log('Calling showNameNormal: (expected "Alice")');
user.showNameNormal();

// Explanation printed for students
console.log('\nExplanation: Arrow functions do not have their own `this`. They capture `this` from the lexical scope. When used as object methods, they usually do not get the object as `this`. Use normal function syntax for methods that need `this`.');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { user };
}
