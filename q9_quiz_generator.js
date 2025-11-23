// Q9. Random Math Quiz Generator
// Generate random arithmetic challenges and evaluate answers

// Function to generate random number between min and max
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random quiz questions
const quizCount = 3;
const operators = ["+", "-", "*", "/"];

console.log("=== Random Math Quiz Generator ===\n");

for (let i = 0; i < quizCount; i++) {
  // Generate random numbers and operator
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operator = operators[Math.floor(Math.random() * operators.length)];

  // Calculate correct answer using switch statement
  let correctAnswer;

  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = num1 / num2;
      break;
    default:
      correctAnswer = 0;
  }

  // Round division results to 2 decimals
  if (operator === "/") {
    correctAnswer = parseFloat(correctAnswer.toFixed(2));
  }

  // Display question and answer
  const question = `${num1} ${operator} ${num2}`;
  console.log(`Question ${i + 1}: ${question} = ?`);
  console.log(`Answer: ${correctAnswer}`);
  console.log("---\n");
}

// Example: Simulate user answer checking
console.log("--- User Answer Evaluation ---");
const testNum1 = 12;
const testNum2 = 5;
const testOp = "*";
const userAnswer = 60;

let expectedAnswer;
switch (testOp) {
  case "+":
    expectedAnswer = testNum1 + testNum2;
    break;
  case "-":
    expectedAnswer = testNum1 - testNum2;
    break;
  case "*":
    expectedAnswer = testNum1 * testNum2;
    break;
  case "/":
    expectedAnswer = parseFloat((testNum1 / testNum2).toFixed(2));
    break;
}

console.log(`Question: ${testNum1} ${testOp} ${testNum2} = ?`);
console.log(`Your Answer: ${userAnswer}`);
console.log(`Correct Answer: ${expectedAnswer}`);
console.log(
  `Result: ${userAnswer === expectedAnswer ? "✅ Correct!" : "❌ Incorrect"}`
);
