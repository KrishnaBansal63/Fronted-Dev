// Q5. Weather Activity Planner
// Advise user on activities based on weather conditions using logical operators

// Weather variables
const temperature = 28; // in Celsius
const isRaining = false;
const windSpeed = 15; // in km/h

// Determine recommended activity using nested conditions and logical operators
let activity;

if (isRaining) {
  activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  activity = "Too cold and windy — stay home.";
} else {
  activity = "Perfect day for a walk.";
}

// Display weather report and recommendation
console.log("=== Weather Activity Planner ===");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining ? "Yes" : "No"}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log("---");
console.log(`Activity Suggestion: ${activity}`);

// Additional test cases (commented out)
console.log("\n--- Test Case 2 (Rainy) ---");
const temp2 = 25;
const raining2 = true;
const wind2 = 10;
const activity2 = raining2
  ? "Stay indoors with hot coffee."
  : temp2 > 35
    ? "Go swimming."
    : temp2 < 15 && wind2 > 20
      ? "Too cold and windy — stay home."
      : "Perfect day for a walk.";
console.log(`Temp: ${temp2}°C, Raining: ${raining2}, Wind: ${wind2} km/h`);
console.log(`Activity: ${activity2}`);
