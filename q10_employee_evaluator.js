// Q10. Departmental Employee Evaluator
// Evaluates employees from multiple departments based on performance

console.log("=== Departmental Employee Evaluator ===\n");

// Nested array: [Department Name, Performance Score]
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63],
];

console.log("Department Performance Scores:\n");

// Function to classify performance
function getPerformanceRating(score) {
  if (score >= 90) {
    return "🌟 Excellent";
  } else if (score >= 75 && score < 90) {
    return "✅ Good";
  } else if (score >= 60 && score < 75) {
    return "⚠️  Average";
  } else {
    return "❌ Needs Improvement";
  }
}

// Process each department using nested loops and conditionals
for (let i = 0; i < departments.length; i++) {
  const department = departments[i][0];
  const score = departments[i][1];
  const rating = getPerformanceRating(score);

  console.log(`${i + 1}. ${department.padEnd(12)} | Score: ${score}/100 | ${rating}`);
}

// Detailed evaluation report
console.log("\n=== Detailed Department Evaluation ===\n");

departments.forEach((dept, index) => {
  const deptName = dept[0];
  const score = dept[1];

  let rating, color, recommendation;

  // Nested if-else for evaluation
  if (score >= 90) {
    rating = "Excellent";
    color = "🌟";
    recommendation = "Promote to senior role";
  } else if (score >= 75 && score < 90) {
    rating = "Good";
    color = "✅";
    recommendation = "Continue current role";
  } else if (score >= 60 && score < 75) {
    rating = "Average";
    color = "⚠️ ";
    recommendation = "Provide training & support";
  } else {
    rating = "Needs Improvement";
    color = "❌";
    recommendation = "Performance review required";
  }

  console.log(`Department: ${deptName}`);
  console.log(`  Score: ${score}/100 ${color}`);
  console.log(`  Rating: ${rating}`);
  console.log(`  Recommendation: ${recommendation}`);
  console.log();
});

// Summary statistics
console.log("=== Summary Report ===\n");

const excellent = departments.filter((dept) => dept[1] >= 90);
const good = departments.filter((dept) => dept[1] >= 75 && dept[1] < 90);
const average = departments.filter((dept) => dept[1] >= 60 && dept[1] < 75);
const needsImprovement = departments.filter((dept) => dept[1] < 60);

console.log(`Excellent (≥90): ${excellent.length} department(s)`);
excellent.forEach((dept) => console.log(`  - ${dept[0]}: ${dept[1]}`));

console.log(`\nGood (75-89): ${good.length} department(s)`);
good.forEach((dept) => console.log(`  - ${dept[0]}: ${dept[1]}`));

console.log(`\nAverage (60-74): ${average.length} department(s)`);
average.forEach((dept) => console.log(`  - ${dept[0]}: ${dept[1]}`));

console.log(
  `\nNeeds Improvement (<60): ${needsImprovement.length} department(s)`
);
needsImprovement.forEach((dept) => console.log(`  - ${dept[0]}: ${dept[1]}`));

// Overall average
const totalScore = departments.reduce((sum, dept) => sum + dept[1], 0);
const averageScore = (totalScore / departments.length).toFixed(2);

console.log(
  `\nOverall Average Score: ${averageScore}/100`
);

// Top and bottom performers
const topDept = departments.reduce((max, dept) =>
  dept[1] > max[1] ? dept : max
);
const bottomDept = departments.reduce((min, dept) =>
  dept[1] < min[1] ? dept : min
);

console.log(`\nTop Performer: ${topDept[0]} (${topDept[1]}/100)`);
console.log(`Needs Most Improvement: ${bottomDept[0]} (${bottomDept[1]}/100)`);

// Interactive evaluation function
console.log("\n=== Custom Evaluation ===");

function evaluateEmployee(name, score) {
  let evaluation;

  if (score >= 90) {
    evaluation = "Excellent - Ready for promotion";
  } else if (score >= 75) {
    evaluation = "Good - Performing well";
  } else if (score >= 60) {
    evaluation = "Average - Needs improvement";
  } else {
    evaluation = "Poor - Action required";
  }

  console.log(
    `${name}: ${score}/100 → ${evaluation}`
  );
}

console.log("Test evaluations:");
evaluateEmployee("Alice (Senior Dev)", 92);
evaluateEmployee("Bob (Analyst)", 78);
evaluateEmployee("Carol (Intern)", 68);
evaluateEmployee("David (Contractor)", 45);
