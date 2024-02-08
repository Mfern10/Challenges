let data = {
  name: "Mitchell",
  age: 29,
  eyes: "brown",
};

let jsonString = JSON.stringify(data);
console.log(jsonString); // Output: {"name": "Mitchell", "age": 29, "eyes": "brown"}

let jsonString = '{"name": "Mitchell", "age": 29, "eyes": "brown"}';

// lets parse it into a JS object

let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: {"name": "Mitchell", "age": 29, "eyes": "brown"}
