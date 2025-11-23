"use strict";

// Q8 – Strict Mode Showdown
// Compares behavior with and without strict mode
// Demonstrates how strict mode catches errors

console.log("=== Q8: Strict Mode Showdown ===\n");

console.log("--- ISSUE 1: Duplicate Parameter Names ---\n");

console.log("Without strict mode, this works (but is confusing):");
console.log(`
  function demo(a, a) {
    console.log(a); // Shows SECOND 'a' value
  }
  demo(5, 10); // Output: 10
`);

console.log("In strict mode, this throws a SyntaxError:");
console.log("❌ Duplicate parameter names are forbidden\n");

// Corrected version
function demoFixed(a, b) {
  console.log(`a = ${a}, b = ${b}`);
}

console.log("✅ Corrected:");
demoFixed(5, 10); // Output: a = 5, b = 10

console.log("\n--- ISSUE 2: Deleting Variables ---\n");

console.log("Without strict mode, delete silently fails:");
console.log(`
  var total = 10;
  delete total; // Returns false but no error
  console.log(total); // Still 10
`);

console.log("In strict mode, this throws TypeError:");
console.log("❌ Cannot delete variables in strict mode\n");

// Valid deletion (delete object property)
const obj = { total: 10 };
console.log("✅ Valid: Delete object property");
delete obj.total;
console.log(`  After delete: obj.total = ${obj.total}`);

console.log("\n--- ISSUE 3: Octal Number Literals ---\n");

console.log("Without strict mode, octal syntax works:");
console.log(`  var num = 010; // Interpreted as octal (8 in decimal)
  console.log(num); // Output: 8`);

console.log("In strict mode, this throws SyntaxError:");
console.log("❌ Octal literals not allowed\n");

// Correct way to specify octal (ES6)
const octalNum = 0o10;
console.log(`✅ Modern octal syntax: 0o10 = ${octalNum}`);

console.log("\n--- ISSUE 4: 'with' Statement ---\n");

console.log("Without strict mode, 'with' is allowed (but confusing):");
console.log(`
  var obj = { x: 10 };
  with (obj) {
    console.log(x); // Could be obj.x or global x?
  }
`);

console.log("In strict mode, 'with' is forbidden:");
console.log("❌ 'with' statements are not allowed in strict mode\n");

console.log("Better approach: Use destructuring or direct access:");
const objWithX = { x: 10 };
const { x } = objWithX;
console.log(`✅ Destructuring: x = ${x}`);

console.log("\n--- ISSUE 5: eval() Scope ---\n");

console.log("Without strict mode:");
console.log(`
  eval("var x = 10");
  console.log(x); // x is created in function/global scope
`);

console.log("In strict mode:");
console.log("✅ eval creates variables in its own scope only");

// Demonstrate eval in strict mode
(function () {
  "use strict";
  eval('var y = 20;');
  try {
    console.log(`   Outside eval: y = ${y}`);
  } catch {
    console.log("   y is not accessible outside eval (strict mode)");
  }
})();

console.log("\n--- ISSUE 6: Arguments Object ---\n");

console.log("Without strict mode, arguments are flexible:");
function flexDemo(a, b) {
  console.log("Non-strict: arguments can be modified");
  return `a=${a}, arguments[0]=${a}`;
}

console.log("In strict mode, arguments are read-only:");
function strictDemo(a, b) {
  "use strict";
  console.log("Strict: arguments stay independent");
  return `a=${a}, arguments[0]=${a}`;
}

console.log(`\n✅ ${flexDemo(5, 10)}`);
console.log(`✅ ${strictDemo(5, 10)}`);

console.log("\n--- STRICT MODE BENEFITS SUMMARY ---\n");

const benefits = [
  {
    Issue: "Undeclared variables",
    NonStrict: "Creates global",
    Strict: "ReferenceError",
  },
  {
    Issue: "Duplicate parameters",
    NonStrict: "Allowed (confusing)",
    Strict: "SyntaxError",
  },
  {
    Issue: "Delete variable",
    NonStrict: "Silent failure",
    Strict: "TypeError",
  },
  {
    Issue: "Octal literals",
    NonStrict: "Allowed",
    Strict: "SyntaxError",
  },
  {
    Issue: "'with' statement",
    NonStrict: "Allowed",
    Strict: "SyntaxError",
  },
  {
    Issue: "eval() scope",
    NonStrict: "Global scope",
    Strict: "Own scope",
  },
];

console.table(benefits);

console.log("\n--- BEST PRACTICES ---");
console.log("1. ✅ Always use 'use strict' at file or function top");
console.log("2. ✅ Use ES6 modules (automatically strict)");
console.log("3. ✅ Use a linter (ESLint) to catch errors");
console.log("4. ✅ Never use eval(), with(), or octal literals");
console.log("5. ✅ Always declare variables with let/const/var");
