// Q4. Academic Performance Evaluator
// Check if student is promoted based on subject marks

// Array of marks for 5 subjects
const marks = [78, 82, 76, 88, 85];
const subjects = ["Math", "Science", "English", "History", "Geography"];

// Validation: check if any subject < 35
let isDetainedDueToSubject = false;
for (let mark of marks) {
  if (mark < 35) {
    isDetainedDueToSubject = true;
    break;
  }
}

// Calculate average and percentage
let totalMarks = 0;
for (let mark of marks) {
  totalMarks += mark;
}
const average = totalMarks / marks.length;
const percentage = average; // Since marks out of 100

// Determine eligibility using logical operators
let result;

if (isDetainedDueToSubject) {
  result = "Detained"; // Failed in at least one subject
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
} else {
  result = "Detained";
}

// Display report
console.log("=== Academic Performance Report ===");
for (let i = 0; i < subjects.length; i++) {
  console.log(`${subjects[i]}: ${marks[i]}/100`);
}
console.log("---");
console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Average: ${average.toFixed(2)}/100`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log("---");
console.log(`Result: ${result}`);
