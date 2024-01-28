let num = 5;
let str = "10";

let result = num + str; // JavaScript implicitly converts num to a string for concatenation.
console.log(result); // Output: "510" (a string)

let num = 123;
let str = String(num); // Explicitly convert the number to a string using String().
console.log(str); // Output: "123"
