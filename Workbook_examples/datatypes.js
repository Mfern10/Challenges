// // const myName = "Mitchell Fernandez";
// // console.log(myName) // Output: Mitchell Fernandez


// const num1 = 2
// const num2 = 4

// function adder(num1, num2) {
//     return num1 + num2
// }

// adder(num1, num2)
//   // Output: 6

// //BigInt
// const largeNumber = BigInt("1234567891011121314151617181920")
// const bigInt = 1234567891011121314151617181920n

// // Example: Checking if a number is even
// let number = 8;

// // Using the modulo operator to check if the number is even
// let isEven = number % 2 === 0;

// console.log(isEven);  // Output: true

// // Declare a variable with no value
// let newVar;
// console.log(newVar); // Output: undefined

// // set null varibale
// let newVar = null;
// console.log(newVar); // Output: null


// // Creating a symbol with a description (optional)
// const symbolA = Symbol("This is Symbol A");
// const symbolB = Symbol("This is Symbol B");

// console.log(symbolA);  // Output: Symbol(This is Symbol A)
// console.log(symbolB);  // Output: Symbol(This is Symbol B)

// // Symbols are unique
// console.log(symbolA === symbolB);  // Output: false


// // create a person object with key-value pairs and show use of other objects
// // such as an array used.
// const person = {
//     name: "Mitchell Fernandez",
//     age: 29,
//     occupation: "Student",
//     hobbies: ["Snowboarding", "Drawing", "Coding"]
// }

// console.log(person) // Output:   name: 'Mitchell Fernandez',
//                             //   age: 29,
//                             //   occupation: 'Student',
//                             //   hobbies: [ 'Snowboarding', 'Drawing', 'Coding' ]
// console.log(person.name) //Output: Mitchell Fernandez
// console.log(person.age) //Output: 29
// console.log(person.occupation) // Output: Student
// console.log(person.hobbies) // Output: ['Snowboarding', Drawing', 'Coding']
// console.log(person.hobbies[1]) // Output: Drawing

// Creating an array of video game titles
let videoGames = ["Super Mario Bros.", "The Legend of Zelda", "Final Fantasy VII", "Minecraft"];

// Accessing and logging the first video game
console.log("First Game:", videoGames[0]);  // Output: Super Mario Bros.

// Modifying the second video game title
videoGames[1] = "World of Warcraft";
console.log("Updated Games:", videoGames);  // Output: ["Super Mario Bros.", "World of Warcraft", "Final Fantasy VII", "Minecraft"]

// Adding a new video game to the end
videoGames.push("Fortnite");
console.log("Updated Games:", videoGames);  // Output: ["Super Mario Bros.", "World of Warcraft", "Final Fantasy VII", "Minecraft", "Fortnite"]

// Removing the last video game
let removedGame = videoGames.pop();
console.log("Updated Games:", videoGames);       // Output: ["Super Mario Bros.", "World of Warcraft", "Final Fantasy VII", "Minecraft"]
console.log("Removed Game:", removedGame);        // Output: Fortnite

// Adding a classic video game to the beginning
videoGames.unshift("Pac-Man");
console.log("Updated Games:", videoGames);  // Output: ["Pac-Man", "Super Mario Bros.", "World of Warcraft", "Final Fantasy VII", "Minecraft"]

// Removing the first video game
let removedFirstGame = videoGames.shift();
console.log("Updated Games:", videoGames);          // Output: ["Super Mario Bros.", "World of Warcraft", "Final Fantasy VII", "Minecraft"]
console.log("Removed First Game:", removedFirstGame); // Output: Pac-Man

// Finding the index of a specific video game
let indexOfFinalFantasy = videoGames.indexOf("Final Fantasy VII");
console.log("Index of Final Fantasy VII:", indexOfFinalFantasy);  // Output: 2

// Removing a specific video game by index
let removedGameAtIndex2 = videoGames.splice(2, 1); // Remove 1 element starting from index 2
console.log("Updated Games:", videoGames);                 // Output: ["Super Mario Bros.", "World of Warcraft", "Minecraft"]
console.log("Removed Game at Index 2:", removedGameAtIndex2); // Output: ["Final Fantasy VII"]

// Concatenating arrays with additional video game titles
let moreGames = ["Overwatch", "The Witcher 3: Wild Hunt"];
let combinedGames = videoGames.concat(moreGames);
console.log("Combined Games:", combinedGames);  // Output: ["Super Mario Bros.", "World of Warcraft", "Minecraft", "Overwatch", "The Witcher 3: Wild Hunt"]

// Slicing a portion of the combined games array
let selectedGames = combinedGames.slice(1, 4); // Extract elements from index 1 to 3
console.log("Selected Games:", selectedGames);  // Output: ["World of Warcraft", "Minecraft", "Overwatch"]
