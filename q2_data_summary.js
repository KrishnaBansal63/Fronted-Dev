// Q2. Multi-Type Data Summary
// Demonstrate various data types and use typeof, Array.isArray() to identify them

// Declare variables of different types
const stringVar = "Hello World";
const numberVar = 42;
const booleanVar = true;
const arrayVar = [1, 2, 3, 4, 5];
const objectVar = { name: "Krishna", age: 25 };
const nullVar = null;
const undefinedVar = undefined;

// Create a summary report using console.table()
const dataReport = [
  {
    Label: "String",
    Value: stringVar,
    Type: typeof stringVar,
    IsArray: Array.isArray(stringVar),
  },
  {
    Label: "Number",
    Value: numberVar,
    Type: typeof numberVar,
    IsArray: Array.isArray(numberVar),
  },
  {
    Label: "Boolean",
    Value: booleanVar,
    Type: typeof booleanVar,
    IsArray: Array.isArray(booleanVar),
  },
  {
    Label: "Array",
    Value: JSON.stringify(arrayVar),
    Type: typeof arrayVar,
    IsArray: Array.isArray(arrayVar),
  },
  {
    Label: "Object",
    Value: JSON.stringify(objectVar),
    Type: typeof objectVar,
    IsArray: Array.isArray(objectVar),
  },
  {
    Label: "Null",
    Value: nullVar,
    Type: typeof nullVar,
    IsArray: Array.isArray(nullVar),
  },
  {
    Label: "Undefined",
    Value: undefinedVar,
    Type: typeof undefinedVar,
    IsArray: Array.isArray(undefinedVar),
  },
];

// Display formatted table
console.log("=== Data Type Summary ===");
console.table(dataReport);
