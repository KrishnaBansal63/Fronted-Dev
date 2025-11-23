// Q4. Array Performance Analyzer
// Analyzes student scores using array methods

console.log("=== Array Performance Analyzer ===\n");

// Generate 8 random scores between 30 and 100
const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30
);

console.log(`Student Scores: [${scores}]`);

// Calculate highest and lowest scores
const maxScore = Math.max(...scores);
const minScore = Math.min(...scores);

console.log(`Highest Score: ${maxScore}`);
console.log(`Lowest Score: ${minScore}`);

// Calculate average using reduce()
const average =
  scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(`Average Score: ${average.toFixed(2)}`);

// Count students who passed (≥ 50) using filter()
const passedStudents = scores.filter((score) => score >= 50);
const passCount = passedStudents.length;
const passPercentage = ((passCount / scores.length) * 100).toFixed(1);

console.log(`Students Passed (≥ 50): ${passCount}/${scores.length} (${passPercentage}%)`);

// Create performance categories using map()
const categories = scores.map((score) => {
  if (score >= 80) return "A (80+)";
  if (score >= 70) return "B (70-79)";
  if (score >= 60) return "C (60-69)";
  if (score >= 50) return "D (50-59)";
  return "F (< 50)";
});

console.log("\n--- Grade Distribution ---");
scores.forEach((score, index) => {
  console.log(`Student ${index + 1}: Score ${score} → Grade ${categories[index]}`);
});

// Performance summary using reduce()
const gradeSummary = categories.reduce((summary, grade) => {
  summary[grade] = (summary[grade] || 0) + 1;
  return summary;
}, {});

console.log("\n--- Grade Breakdown ---");
Object.entries(gradeSummary).forEach(([grade, count]) => {
  console.log(`${grade}: ${count} students`);
});

// Detailed formatted report
const report = `
╔═══════════════════════════════════════╗
║   Student Performance Report          ║
╠═══════════════════════════════════════╣
║ Total Students        : ${scores.length}             ║
║ Highest Score         : ${maxScore}/100           ║
║ Lowest Score          : ${minScore}/100            ║
║ Average Score         : ${average.toFixed(2).padStart(6)}/100       ║
║ Passed (≥50)          : ${passCount}/${scores.length} (${passPercentage}%)           ║
║ Failed (<50)          : ${(scores.length - passCount)}/${scores.length}            ║
╚═══════════════════════════════════════╝
`;

console.log(report);

// Find top 3 performers
console.log("--- Top 3 Performers ---");
const topScores = [...scores]
  .sort((a, b) => b - a)
  .slice(0, 3);
topScores.forEach((score, index) => {
  console.log(`${index + 1}. Score: ${score}`);
});
