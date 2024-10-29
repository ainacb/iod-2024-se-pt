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
