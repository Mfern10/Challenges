// Example using the Object literal
let person = {
    name: "Mitchell Fernandez",
    age: 29,
    occupation: "Student"
}

// Example using the Object constructor
let laptop = new Object()
laptop.brand = "Macbook Pro"
laptop.year = 2023
laptop.ram = "8GB"

console.log(person) // Output: { name: 'Mitchell Fernandez', age: 29, occupation: 'Student' }
console.log(laptop) //Output:  { brand: 'Macbook Pro', year: 2023, ram: '8GB' }


// Accessing the object properties
// dot notation
console.log(person.name) // Output: Mitchell Fernandez
// square bracket notation
console.log(laptop["brand"]) // Output: Macbook Pro 

// Updating the object properties
person.age = 42 // updates person age to 42 
laptop["brand"] = "Lenova" // updates the laptops brand to a lenova 


// Adding new properties
person.hairColor = "brown"
laptop.color = "silver"

console.log(person) // Output: { name: 'Mitchell Fernandez', age: 42, occupation: 'Student', hairColor: 'brown'}
console.log(laptop) // Output: { brand: 'Lenova', year: 2023, ram: '8GB', color: 'silver' }

// Deleting properties 
delete person.hairColor
delete laptop["color"]


let calculator = {
    add: function (x,y) {
        return x + y
    },
    sub: function (x,y) {
        return x - y
    },
    multiply: function (x,y) {
        return x * y
    }
}

// Using the methods inside the object calculator
console.log(calculator.add(5, 10)) // Ouput: 15
console.log(calculator.sub(5, 10)) // Output: -5
console.log(calculator.multiply(5, 10)) // Output: 50


// Iterating through objects using for...in loop
for (key in person) {
    console.log(key, person[key])
}
// Output: name Mitchell Fernandez
// age 42
// occupation Student

// Using Object.keys
let keys = Object.keys(laptop)
console.log(keys) // Output: [ 'brand', 'year', 'ram' ]

// Using Object.values
let values = Object.values(person)
console.log(values) // Output: [ 'Mitchell Fernandez', 42, 'Student' ]