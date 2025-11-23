"use strict";

// Q10 – Nested Hoisting and Closures
// Demonstrates how hoisting creates separate memory contexts
// Shows call stack and closure behavior

console.log("=== Q10: Nested Hoisting and Closures ===\n");

console.log("--- ORIGINAL CODE ---\n");

console.log(`
function outer() {
  console.log(count);           // Line 1: What is count here?
  var count = 5;
  function inner() {
    console.log(count);         // Line 2: What is count here?
    var count = 10;
  }
  inner();
}
outer();
`);

console.log("--- PREDICTING OUTPUT ---\n");

console.log(`
Expected Output (due to hoisting):
Line 1: undefined  (var count is hoisted but not initialized)
Line 2: undefined  (inner's var count is hoisted but not initialized in inner's scope)

Why? Each function creates its own scope with its own 'count' variable.
Hoisting moves variable declarations to the top of their scope.
`);

console.log("--- ACTUAL EXECUTION ---\n");

function outer() {
  // Hoisting effect: 'count' is moved to top of outer's scope
  console.log("outer - count at start:", count); // undefined (hoisted)

  var count = 5;
  console.log("outer - count after init:", count); // 5

  function inner() {
    // Hoisting effect: 'count' is moved to top of inner's scope
    console.log("  inner - count at start:", count); // undefined (inner's hoisted count)

    var count = 10;
    console.log("  inner - count after init:", count); // 10
  }

  inner();
  console.log("outer - count after inner():", count); // 5 (outer's count unchanged)
}

outer();

// Explanation of memory contexts
console.log("\n--- MEMORY CONTEXTS CREATED ---\n");

console.log(`
Global Scope:
  (empty or outer function reference)

outer() Scope:
  count: undefined → 5 (after assignment)
  inner: function reference

inner() Scope (created when inner() is called):
  count: undefined → 10 (after assignment)
  (inner has its own 'count', doesn't affect outer's)

Hoisting Timeline:
1. outer() called
2. Hoisting: 'var count' moved to top of outer, initialized as undefined
3. console.log(count) → undefined
4. count = 5 assignment
5. inner() defined
6. inner() called
7. Hoisting: 'var count' moved to top of inner, initialized as undefined
8. console.log(count) → undefined (inner's own count)
9. count = 10 assignment
10. inner() returns, scope destroyed
11. Back to outer, count is still 5
`);

// ARROW FUNCTION VERSION (for comparison)
console.log("\n--- ARROW FUNCTION VERSION (Comparison) ---\n");

const outerArrow = () => {
  console.log("Arrow outer - count:", count); // undefined (hoisted var)

  var count = 5;

  const innerArrow = () => {
    console.log("  Arrow inner - count:", count); // Accesses outer's count (closure)

    // If we declare var count = 10 here, it would shadow outer's count
    var count = 10;
    console.log("  Arrow inner - count after:", count); // 10
  };

  innerArrow();
};

outerArrow();

console.log("\n--- CLOSURE DEMONSTRATION ---\n");

console.log("Functions with closures capture outer scope:\n");

function createCounter() {
  let count = 0; // Captured by closure

  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    getCount: () => count,
  };
}

const counter = createCounter();

console.log("Counter with closure:");
console.log(`  increment(): ${counter.increment()}`); // 1
console.log(`  increment(): ${counter.increment()}`); // 2
console.log(`  decrement(): ${counter.decrement()}`); // 1
console.log(`  getCount(): ${counter.getCount()}`); // 1

console.log("\n(Each method accesses the same 'count' variable in closure)");

// Call Stack Visualization
console.log("\n--- CALL STACK FLOW ---\n");

console.log(`
Call Stack visualization for outer() with inner():

┌─────────────────────────────────┐
│     EXECUTION STACK             │
├─────────────────────────────────┤
│ [1] outer() called              │
│     - count: undefined          │
│     - count: 5                  │
│                                 │
│ [2] inner() called              │
│     - count: undefined (inner)  │
│     - count: 10 (inner)         │
│                                 │
│ [3] inner() returns, scope ends │
│     (inner's count is destroyed)│
│                                 │
│ [4] outer() returns, scope ends │
│     (outer's count is destroyed)│
│                                 │
│ [5] outer's scope cleaned up    │
└─────────────────────────────────┘
`);

// Advanced: Shadowing
console.log("--- VARIABLE SHADOWING ---\n");

function shadowDemo() {
  const x = "outer";

  console.log(`Outer: x = ${x}`);

  {
    // Block scope (created by {})
    const x = "inner block";
    console.log(`Inner block: x = ${x}`); // Shadows outer x
  }

  console.log(`After block: x = ${x}`); // Back to outer x
}

shadowDemo();

// Summary comparison table
console.log("\n=== HOISTING COMPARISON TABLE ===");

const comparisonTable = [
  {
    Declaration: "var x",
    Scope: "Function",
    Hoisting: "Hoisted (undefined)",
  },
  {
    Declaration: "let x",
    Scope: "Block",
    Hoisting: "Temporal Dead Zone",
  },
  {
    Declaration: "const x",
    Scope: "Block",
    Hoisting: "Temporal Dead Zone",
  },
  {
    Declaration: "function x()",
    Scope: "Function",
    Hoisting: "Fully hoisted",
  },
  {
    Declaration: "const x = ()",
    Scope: "Block",
    Hoisting: "Not hoisted (TDZ)",
  },
];

console.table(comparisonTable);

// Best practices
console.log("\n=== BEST PRACTICES ---");
console.log("1. ✅ Use let/const instead of var");
console.log("2. ✅ Declare variables at the top of their scope");
console.log("3. ✅ Avoid relying on hoisting behavior");
console.log("4. ✅ Be careful with closures and variable capture");
console.log("5. ✅ Use debugger to visualize call stack");
