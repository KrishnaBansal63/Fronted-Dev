// Q2. String Manipulation Report
// Formats product titles with various string methods

const productName = " wireless headphones PRO ";

console.log("=== String Manipulation Report ===\n");

// Step 1: Trim extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();
console.log(`Original: "${productName}"`);
console.log(`After trim + lowercase: "${cleanedName}"`);

// Step 2: Capitalize first letter of each word
// Split into words, map each to capitalize first letter, join back
const capitalizedName = cleanedName
  .split(" ")
  .map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  .join(" ");
console.log(`After capitalization: "${capitalizedName}"`);

// Step 3: Replace "pro" with "Pro Edition"
const finalName = capitalizedName.replace(/pro/i, "Pro Edition");
console.log(`After replacing "Pro" with "Pro Edition": "${finalName}"`);

// Step 4: Display length
console.log(`\nFinal Title Length: ${finalName.length} characters`);

// Additional formatting example with multiple products
console.log("\n=== Processing Multiple Products ===");

const products = [
  " laptop pro MAX ",
  " WIRELESS MOUSE ",
  " keyboard mechanical pro ",
];

products.forEach((product, index) => {
  const processed = product
    .trim()
    .toLowerCase()
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ")
    .replace(/pro/i, "Pro Edition");

  console.log(
    `${index + 1}. "${product.trim()}" → "${processed}" (${processed.length} chars)`
  );
});

// Demonstration of each string method
console.log("\n=== String Method Breakdown ===");
const testString = " Hello World JavaScript ";

console.log(`Original: "${testString}"`);
console.log(`trim(): "${testString.trim()}"`);
console.log(`toLowerCase(): "${testString.toLowerCase()}"`);
console.log(`toUpperCase(): "${testString.toUpperCase()}"`);
console.log(`split(" "): [${testString.trim().split(" ")}]`);
console.log(
  `charAt(0): "${testString.charAt(0)}"`
);
console.log(
  `slice(1): "${testString.slice(1)}"`
);
console.log(`length: ${testString.length}`);
console.log(
  `replace("World", "JS"): "${testString.replace("World", "JS")}"`
);
