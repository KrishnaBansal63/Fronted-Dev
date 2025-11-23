"use strict";

// Q6: Prototype chain Person -> Faculty -> Professor

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name} (Person)`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDepartment = function () {
  console.log(`${this.name} works in ${this.department} department`);
};

function Professor(name, department, title) {
  Faculty.call(this, name, department);
  this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getTitle = function () {
  console.log(`${this.title} ${this.name}`);
};

// Demo
const prof = new Professor('Dr. Meera', 'Mathematics', 'Associate Professor');
console.log('Professor accessing all methods:');
prof.greet(); // from Person
prof.getDepartment(); // from Faculty
prof.getTitle(); // from Professor

// Confirm prototype chain
console.log('prof instanceof Professor?', prof instanceof Professor);
console.log('prof instanceof Faculty?', prof instanceof Faculty);
console.log('prof instanceof Person?', prof instanceof Person);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Person, Faculty, Professor };
}
