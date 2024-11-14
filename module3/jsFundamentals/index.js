//FUNCTION DECLARATION

// function checkAge returns a value when called
function checkAge(age) {
  if (age >= 18) {
    return "adult"; // if the condition is true, return this string and exit
  }
  return "non-adult"; // if the condition was false, return this string and exit
}
console.log(checkAge(21)); // adult
console.log(checkAge(13)); // non-adult

// FUNCTION EXRESSION

const sayHi = function () {
  // function expression syntax for creating a function
  console.log("Hi");
};

// sayHiExpression(); // error - cannot access before initialization
sayHiDeclaration(); // works - can be hoisted
// const sayHiExpression = function () {
//   console.log("Hi");
// };
function sayHiDeclaration() {
  console.log("Hi");
}

const sayHiArrow = () => console.log("Hi"); // arrow function syntax, more concise

const subtract1 = (a, b) => a - b; // most concise version of the below
const subtract2 = (a, b) => {
  return a - b;
}; // does the same thing as above

// If (age >= 18) {“Welcome to the bottle shop”}
// else {“Access Denied!”}

// age >= 18 ? “Welcome to the bottle shop” : “Access Denied!”

// let isDarkMode = true;
// console.log(!isDarkMode);

// function helloWorld {return}

// function helloWorld() {
//   return "Hello World";
// }

const helloWorld = function () {
  console.log(`Hello World`);
};

const user = {
  // user object contained within curly braces
  name: "joe", // string property with key 'name' and value 'joe'
  age: 20, // numeric property with key 'age' and value 20
  "has a dog": true, // multi-word property key 'has a dog' with boolean value true
};

console.log(user.name); // get object property called name and log it
let dogOwner = user["has a dog"]; // get value of property 'has a dog' and assign to new variable
user.age = 21; // set (or assign) new value to object property called age
user.location = "NSW"; // create new object property called location and set (assign) a value
delete user.location; // delete property of user object called location

user.name = "Aina";
user.age = 30;
user.location = "NSW";
user.job = "Software Engineer";
user.pets = ["Shin", "Yop"];
console.log("Updated User: ", user);

// loops

let goal = 5;
for (let i = 0; i < goal; i++) {
  console.log(`Iteration ${i} of ${goal}`);
}

const phone = {
  model: "iPhone 11",
  colour: "black",
  storage: 64,
};
for (let key in phone) {
  // iterates over each property in the phone object, stores in ‘key’ variable
  console.log("key: " + key); // prints each object property name (key) in turn
  console.log("value: " + phone[key]); // prints each object value in turn
}

const user1 = {
  name: "Aina",
  age: "30",
  pet: "has a dog",
  location: "NSW",
  job: "Software Engineer",
  petsName: ["Shin", "Yop"],
};

for (let key in user1) {
  console.log("key: " + key);
  console.log("value: " + user1[key]);
}
