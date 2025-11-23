"use strict";

// Q7: makeMultiplier(multiplier) -> returns function that multiplies

function makeMultiplier(multiplier) {
  // closure: inner function remembers 'multiplier'
  return function (num) {
    return num * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log('triple(5) =', triple(5)); // 15

// Explanation for students
console.log('\nExplanation: The returned function forms a closure capturing the `multiplier` variable from its lexical scope. Even after makeMultiplier has finished executing, the inner function retains access to `multiplier`.');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { makeMultiplier };
}
