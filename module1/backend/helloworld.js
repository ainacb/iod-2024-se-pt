const Sentiment = require("sentiment"); //npm packages to be installed - to put on top for best practice, to easily indentify which packages are installed.
const sentiment = new Sentiment();
const result = sentiment.analyze("Cats are stupid.");
console.log(result); // Score: -2, Comparative: -0.666

console.log("Hello Aina");
function sayHello() {
  console.log("Hello from inside of function");
}
sayHello();
sayHello();
sayHello();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(10, 15);

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 1));

//LAB EXERCISE 4

function addNumber(a, b) {
  return a + b;
}
console.log("ADD:", addNumber(11, 48));

function subtractNumber(a, b) {
  return a - b;
}
console.log("SUBTRACT:", subtractNumber(45, 15));

function multipleNumber(a, b) {
  return a * b;
}
console.log("MULTIPLE:", multipleNumber(20, 3));

function divideNumber(a, b) {
  return a / b;
}
console.log("DIVIDE:", divideNumber(63, 9));

function Hello(firstName) {
  console.log("Hello" + " " + firstName);
} //   Concatenate strings

// console.log("Hello " + firstName); // same result as above

Hello("Aina!!!");

let helloText = "say Hi";
let check = 4;
if (check > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
// console.log(hello); // hello is not defined

//Arrays

let emptyScores = new Array();
// or
let scores = ["A+", 95, "C-", 55, 83, 71, "B+"];

let mountains = ["Everest", "Fuji", "Nanga Parbat"];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

mountains[1] = "Kilimanjaro";
console.log(mountains); // [ 'Everest', 'Kilimanjaro', 'Nanga Parbat' ]

//push method

let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
seas.push("Red Sea");
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

//unshift

seas.unshift("Adriatic Sea");
console.log(seas); // [ 'Adriatic Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

//pop

let rivers = ["Mississippi", "Amazon", "Nile"];
let lastRiver = rivers.pop();
console.log(lastRiver); // Nile
console.log(rivers); // [ 'Mississippi', 'Amazon' ]

//shift

let firstRiver = rivers.shift();
console.log(firstRiver); // Mississippi
console.log(rivers); // Amazon

let volcanoes = ["Mount Vesuvius", "Mount Etna", "Mount Fuji"];
let fujiIndex = volcanoes.indexOf("Mount Fuji");
console.log(fujiIndex); // 2 (indexes start at 0)

let numVolcanoes = volcanoes.length;
console.log(numVolcanoes); // 3

//LAB EXERCISE 5

//5 element array

let weather = ["Sunny", "Cloudy", "Windy", "Rainy", "Snowy"];

console.log(weather[0]);
console.log(weather[1]);
console.log(weather[2]);
console.log(weather[3]);
console.log(weather[4]);

//replace value

weather[1] = "Foggy";
console.log(weather[1]);

weather[4] = "Stormy";
console.log(weather[4]);

//new element at beginning of array

weather.unshift("Blizzard");
console.log(weather);

//remove element at end

weather.pop();
console.log(weather);

const user = {
  first_name: "Aina",
  last_name: "Bautista",
  age: "30",
  followers: "987",
};

console.log(user.first_name); // Aina
console.log(user.age); //30

user.location = "Australia";

//LAB EXERCISE 6

const book = {
  title: "El Filibusterismo",
  description:
    "The Reign of Greed, is the second novel written by José Rizal. It is the sequel to Noli Me Tángere and, like the first book, was written in Spanish. It was first published in 1891 in Ghent.",
  author: "Jose Rizal",
  number_of_pages: "368", // should have no space in between, eg: number of page should be number_of_pages or numberOfPage
};

console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.number_of_pages);
console.log(book);

book.description = "The Subversive";
console.log(book.description);

// this function returns the sum of two numbers
function sum(a, b) {}
// Create the Test
if (sum(2, 4) != 6) {
  throw new Error("Test failed");
}
// Write the Code
function sum(a, b) {
  return a + b;
}
console.log("All tests passed.");

//LAB EXERCISE 7

//this function returns the sum of two numbers
function addNumber(a, b) {
  console.log(a + b);
}
if (addNumber(20, 43) != 63) {
  throw new Error("the sum of 20 and 43 did not equal 63");
}
function addNumber(a, b) {
  return a + b;
}
function addNumber(a, b) {
  return a - b;
}
function addNumber(a, b) {
  return 20 + 43;
} //commenting this out will result to error as other functions were error, this is the only test passed.
console.log("All tests passed.");

//this function returns the difference of two numbers
function subtractNumber(a, b) {
  console.log(a - b);
}
if (subtractNumber(50, 35) != 15) {
  throw new Error("the difference of 50 and 35 did not equal 15");
}
function subtractNumber(a, b) {
  return a + b;
}
function subtractNumber(a, b) {
  return 0.5 - 78;
}
function subtractNumber(a, b) {
  return 50 - 35;
} //commenting this out will result to error as other functions were error, this is the only test passed.
console.log("All tests passed.");

//this function returns the product of two numbers
function multipleNumber(a, b) {
  console.log(a * b);
}
if (multipleNumber(25, 3) != 75) {
  throw new Error("the product of 25 and 3 did not equal 75");
}
function multipleNumber(a, b) {
  return a + b;
}
function multipleNumber(a, b) {
  return -8 * 37;
}
function multipleNumber(a, b) {
  return 25 * 3;
} //commenting this out will result to error as other functions were error, this is the only test passed.
console.log("All tests passed.");

//this function returns the quotient of two numbers
function divideNumber(a, b) {
  return a / b;
}
if (divideNumber(54, 6) != 9) {
  throw new Error("the quotient of 54 and 6 did not equal 9");
}
function divideNumber(a, b) {
  return a / b;
}
function divideNumber(a, b) {
  return 0 / 4;
}
function divideNumber(a, b) {
  return 54 / 6;
}
//commenting this out will result to error as other functions were error, this is the only test passed.
console.log("All tests passed.");
