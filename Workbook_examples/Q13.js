// Defining a class named Car
class Car {
// adding constructor function
  constructor(brand) {
    // constructor initializes a property called carname
    this.carname = brand;
  }
  // method 'present' 
  present() {
    // present returns a string with the cars name
    return "I have a " + this.carname;
  }
}
// Defines a new class named Model that extends Car meaning it can use Car properties
class Model extends Car {
// constructor function that calls the parent class constructor function
  constructor(brand, mod) {
    // super allows us to use the parent class property carname
    super(brand);
    // initializes new property called model
    this.model = mod;
  }
  // method 'show' 
  show() {
    // show returns a concatenated string using the string from present method  a new string and model
    // name property creating one string.
    return this.present() + ", it was made in " + this.model;
  }
}
// defines new variable called makes which holds an array of car makes(brands)
let makes = ["Ford", "Holden", "Toyota"];
// defines a new variable for models which holds an array of car makes from 1980 to 2019
let models = Array.from(new Array(40), (x, i) => i + 1980);

// creates a new function that holds a minimum and maximum parameters 
function randomIntFromInterval(min, max) {
  // min and max included
  // returns a random generated integer within the specific range
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// creates a for loop that loops through each model in the array
for (model of models) {
// selects a random make from the 'makes' array
  make = makes[randomIntFromInterval(0, makes.length - 1)];
  // Selects a random Model from the 'models' array (Variable name model has been reused here so will be overwritten)
  model = models[randomIntFromInterval(0, makes.length - 1)];
  // creates a new 'Model' instance with a selected make and model
  mycar = new Model(make, model);
  // logs the result to the console the show method
  console.log(mycar.show());
}
// Output will consist of 40 lines of randomly generated car make and model in the show sentence