// Q7. Smart Guessing Game (Number Range)
// Generate random number and evaluate user guess with range checking

// Generate secret number between 1-50
const secret = Math.floor(Math.random() * 50) + 1;

// Test user guesses
const guesses = [25, 48, 22, 15];

console.log("=== Smart Guessing Game ===");
console.log(`Secret Number: ${secret} (for demonstration purposes)`);
console.log("---\n");

// Evaluate each guess
for (let guess of guesses) {
  let feedback;

  // Nested if conditions with logical operators
  if (guess === secret) {
    feedback = "🎉 Correct guess!";
  } else if (
    (guess > secret && guess <= secret + 3) ||
    (guess < secret && guess >= secret - 3)
  ) {
    feedback = "🔥 Very close!";
  } else if (guess > secret) {
    feedback = "📉 Too high";
  } else {
    feedback = "📈 Too low";
  }

  const difference = Math.abs(guess - secret);
  console.log(
    `Your guess: ${guess} | Difference: ${difference} | ${feedback}`
  );
}

// Interactive example with a single guess
console.log("\n--- Single Guess Test ---");
const userGuess = 18;
let result;

if (userGuess === secret) {
  result = "🎉 Correct guess!";
} else if (Math.abs(userGuess - secret) <= 3) {
  result = "🔥 Very close!";
} else if (userGuess > secret) {
  result = "📉 Too high";
} else {
  result = "📈 Too low";
}

console.log(`Your guess: ${userGuess}`);
console.log(`${result}`);
