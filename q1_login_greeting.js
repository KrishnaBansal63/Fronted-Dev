// Q1. Personalized Login Greeting
// Greets users with time-based messages using conditional logic and template literals

// Declare variables
const userName = "Krishna";
const currentHour = new Date().getHours();

// Determine greeting based on time of day
let greeting;

if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

// Display result
console.log(greeting);
console.log(`Current time: ${new Date().toLocaleTimeString()}`);
