// Q7. Customer Feedback Processor
// Analyzes customer reviews for sentiment and quality metrics

console.log("=== Customer Feedback Processor ===\n");

// Sample feedback
const feedback =
  "Great product! Fast delivery and amazing sound quality!";

console.log(`Review: "${feedback}"`);

// Step 1: Count words using split()
const words = feedback.split(" ");
const wordCount = words.length;

console.log(`Word Count: ${wordCount}`);
console.log(`Words: [${words.join(", ")}]`);

// Step 2: Check for negative keywords using includes()
const hasNegative =
  feedback.toLowerCase().includes("bad") ||
  feedback.toLowerCase().includes("poor") ||
  feedback.toLowerCase().includes("terrible") ||
  feedback.toLowerCase().includes("awful");

// Step 3: Determine sentiment
const sentiment = hasNegative ? "Needs Improvement" : "Positive Feedback";

console.log(`Sentiment: ${sentiment}`);
console.log(`Has Negative Words: ${hasNegative ? "Yes" : "No"}`);

// Function to process feedback
function processFeedback(review) {
  const lowerReview = review.toLowerCase();
  const wordArray = review.split(" ");
  const wordCount = wordArray.length;

  // Check for positive keywords
  const positiveKeywords = [
    "great",
    "amazing",
    "excellent",
    "good",
    "love",
    "fantastic",
    "wonderful",
  ];
  const negativeKeywords = [
    "bad",
    "poor",
    "terrible",
    "awful",
    "hate",
    "disappointing",
    "broken",
  ];

  const positiveCount = positiveKeywords.filter((keyword) =>
    lowerReview.includes(keyword)
  ).length;
  const negativeCount = negativeKeywords.filter((keyword) =>
    lowerReview.includes(keyword)
  ).length;

  // Calculate sentiment score
  const sentimentScore = positiveCount - negativeCount;
  let classification;

  if (sentimentScore > 0) {
    classification = "✅ Positive";
  } else if (sentimentScore < 0) {
    classification = "❌ Negative";
  } else {
    classification = "⚠️  Neutral";
  }

  return {
    wordCount,
    positiveCount,
    negativeCount,
    sentimentScore,
    classification,
  };
}

// Test multiple reviews
console.log("\n=== Processing Multiple Reviews ===");

const reviews = [
  "Great product! Fast delivery and amazing sound quality!",
  "Terrible quality. Very disappointed with this purchase.",
  "It's okay. Nothing special but works as expected.",
  "Excellent service and fantastic product. Highly recommended!",
  "Bad experience. Product broke after one day.",
];

reviews.forEach((review, index) => {
  console.log(`\nReview ${index + 1}: "${review}"`);
  const result = processFeedback(review);
  console.log(`  Words: ${result.wordCount}`);
  console.log(`  Positive keywords found: ${result.positiveCount}`);
  console.log(`  Negative keywords found: ${result.negativeCount}`);
  console.log(`  Sentiment Score: ${result.sentimentScore}`);
  console.log(`  Classification: ${result.classification}`);
});

// Summary report
console.log("\n=== Feedback Summary Report ===");
const results = reviews.map(processFeedback);
const positiveReviews = results.filter((r) => r.sentimentScore > 0)
  .length;
const negativeReviews = results.filter((r) => r.sentimentScore < 0)
  .length;
const neutralReviews = results.filter((r) => r.sentimentScore === 0)
  .length;

console.log(`Total Reviews: ${reviews.length}`);
console.log(`Positive: ${positiveReviews}`);
console.log(`Negative: ${negativeReviews}`);
console.log(`Neutral: ${neutralReviews}`);
console.log(
  `Average Sentiment Score: ${(results.reduce((sum, r) => sum + r.sentimentScore, 0) / results.length).toFixed(2)}`
);
