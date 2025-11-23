"use strict";

// Q9: Rewrite Person -> Student inheritance using ES6 classes

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log('Name (class):', this.name);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  printBranch() {
    console.log('Branch (class):', this.branch);
  }
}

// Demo to show parity with prototype approach
const studentClass = new StudentClass('Priya', 'Electronics');
studentClass.printName();
studentClass.printBranch();

console.log('\nNow verifying that class-based instance methods are on prototype:');
console.log('printName on prototype?', typeof StudentClass.prototype.printName === 'function');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PersonClass, StudentClass };
}
