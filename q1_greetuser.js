"use strict";

// Q1: greetUser(name, callback)
// Prints greeting then calls callback showEndMessage()

function showEndMessage() {
  console.log('Welcome to the course!');
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  if (typeof callback === 'function') {
    // simulate asynchronous flow (but synchronous here)
    callback();
  } else {
    console.log('No callback provided');
  }
}

// Demonstration
greetUser('Krishna', showEndMessage);

// Export for tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { greetUser, showEndMessage };
}
