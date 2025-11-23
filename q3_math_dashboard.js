// Q3. Math Utility Dashboard
// Demonstrates various Math methods and template literals

const x = 16.75;

console.log("=== Math Utility Dashboard ===\n");

// Calculate various math operations
const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubed = Math.pow(x, 3);
const randomNum = Math.floor(Math.random() * 41) + 10;

// Display results using template literals
console.log(`Original Number: ${x}`);
console.log(`Rounded Value: ${rounded}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Cubed (x³): ${cubed.toFixed(2)}`);
console.log(`Random Number (10–50): ${randomNum}`);

// Formatted summary using template literals
const summary = `
╔══════════════════════════════════════╗
║     Math Operations Summary          ║
╠══════════════════════════════════════╣
║ Input Number (x)          : ${x.toString().padEnd(20)} ║
║ Round(x)                  : ${rounded.toString().padEnd(20)} ║
║ Square Root (√x)          : ${squareRoot.toFixed(2).toString().padEnd(20)} ║
║ Power (x³)                : ${cubed.toFixed(2).toString().padEnd(20)} ║
║ Random (10–50)            : ${randomNum.toString().padEnd(20)} ║
╚══════════════════════════════════════╝
`;

console.log(summary);

// Additional math operations
console.log("\n=== Additional Math Methods ===");

const numbers = [15, 3, 8, 22, 5];
console.log(`Numbers: [${numbers}]`);
console.log(`Maximum: ${Math.max(...numbers)}`);
console.log(`Minimum: ${Math.min(...numbers)}`);
console.log(`Absolute of -15: ${Math.abs(-15)}`);
console.log(`Floor of 16.75: ${Math.floor(x)}`);
console.log(`Ceiling of 16.75: ${Math.ceil(x)}`);
console.log(`2 raised to power 8: ${Math.pow(2, 8)}`);
console.log(`Sine of π/2: ${Math.sin(Math.PI / 2)}`);

// Simulating calculator operations
console.log("\n=== Scientific Calculator Simulation ===");

function calculator(num, operation) {
  let result;

  switch (operation) {
    case "sqrt":
      result = Math.sqrt(num);
      console.log(`√${num} = ${result.toFixed(4)}`);
      break;
    case "square":
      result = Math.pow(num, 2);
      console.log(`${num}² = ${result}`);
      break;
    case "cube":
      result = Math.pow(num, 3);
      console.log(`${num}³ = ${result.toFixed(2)}`);
      break;
    case "abs":
      result = Math.abs(num);
      console.log(`|${num}| = ${result}`);
      break;
    default:
      console.log("Invalid operation");
  }
}

console.log("Calculator Test:");
calculator(25, "sqrt"); // √25 = 5
calculator(7, "square"); // 7² = 49
calculator(4, "cube"); // 4³ = 64
calculator(-12, "abs"); // |-12| = 12
