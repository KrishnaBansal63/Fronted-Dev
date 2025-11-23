"use strict";

// Q5: Person constructor and Student inherits via prototype

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log('Name:', this.name);
};

function Student(name, branch) {
  Person.call(this, name); // inherit properties
  this.branch = branch;
}

// Inherit methods
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log('Branch:', this.branch);
};

// Demo
const s1 = new Student('Ravi', 'Computer Science');
console.log('Student prints:');
s1.printName();
s1.printBranch();

// Show prototype chain
console.log('s1 instanceof Student?', s1 instanceof Student);
console.log('s1 instanceof Person?', s1 instanceof Person);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Person, Student };
}
