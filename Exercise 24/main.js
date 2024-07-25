//creating a variable
var apple = "apple";
// Tests for equality
console.log("apple is equal to apple");
console.log(apple == "apple");
// Tests for inequality
console.log("apple is not equal to apple");
console.log(apple != "apple");
// Test using the lower case function
var uppercaseapple = "APPLE";
// Equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseapple.toLocaleLowerCase() == "apple");
// Not equal to 
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseapple.toLocaleLowerCase() != "apple");
var ten = 10;
var twenty = 20;
// Equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);
//  Not Equal to
console.log("ten is not equal to twenty");
console.log(ten != twenty);
// Greater than
console.log("twenty is greater than ten");
console.log(twenty > ten);
// Less than
console.log("twenty is less than ten");
console.log(twenty < ten);
// Greater than or equal to 
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);
// Less than or equal to 
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);
// Test using "and" "or" operations
// Using && (and)
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);
console.log("twenty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);
// Using || (OR)
console.log("twenty is greater than ten or twenty is not equal to twenty");
console.log(twenty > ten || twenty != twenty);
console.log("twenty is less than ten or twenty is not equal to twenty");
console.log(twenty < ten || twenty != twenty);
// Test whether an item is in a array
var fruits = ["apple", "orange", "banana"];
console.log("orange is include in my fruits array");
// Test whether an item is not in a array
console.log("orange is not include in my fruits array");
console.log(!fruits.includes("orange"));
