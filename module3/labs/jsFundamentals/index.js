//1. What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0; // 10
console.log("" + 1 + 0);

"" - 1 + 0; // -1
console.log("" - 1 + 0);

true + false; // 1
console.log(true + false);

!true; // false
console.log(!true);

6 / "3"; //2
console.log(6 / "3");

"2" * "3"; // 6
console.log("2" * "3");

4 + 5 + "px"; // 9px
console.log(4 + 5 + "px");

"$" + 4 + 5; // $45
console.log("$" + 4 + 5);

"4" - 2; // 2
console.log("4" - 2);

"4px" - 2; // NaN
console.log("4px" - 2);

"  -9  " + 5; //  -9 5
console.log("  -9  " + 5);

"  -9  " - 5; // -14
console.log("  -9  " - 5);

null + 1; // 1
console.log(null + 1);

undefined + 1; // NaN
console.log(undefined + 1);

undefined == null; // true
console.log(undefined == null);

undefined === null; // false
console.log(undefined === null);

" \t \n" - 2; // -2
console.log(" \t \n" - 2);

// Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"; // 3
console.log(3);

let four = "4"; // 4
console.log(4);

let thirty = "30"; // 30
console.log(30);

//what is the value of the following expressions?
let addition = three + four; // 34
console.log(three + four);

let multiplication = three * four; //12
console.log(three * four);

let division = three / four; // 0.75
console.log(three / four);

let subtraction = three - four; // -1
console.log(three - four);

let lessThan1 = three < four; // true
console.log(three < four);

let lessThan2 = thirty < four; // true -- is is not giving the right answer because thirty is < four, use number to fix the answer
console.log(thirty < four);

// 3. Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true"); // is false because it is zero value
if ("0") console.log("#2 zero is true"); // is true because it is a non-empty string
if (null) console.log("null is true"); // is false bacause it has no value
if (-1) console.log("negative is true"); // is true because it is a non-zero number
if (1) console.log("positive is true"); //is true because it is a non-zero number

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

// let a = 2,
//   b = 3;
// let result = `${a} + ${b} is `;

// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

let a = 5,
  b = 5;
let result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10";

console.log(result);

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("Aina"));

// a. function expression
const getGreetingFE = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreetingFE("Aina"));

// b. function arrow

const getGreetingFA = (name) => "Hello " + name + "!";

console.log(getGreetingFA("Aina"));

// 6.
// a) Complete the inigo object by adding a lastName property and including it in the greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
// HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    return "Nice to meet you.";
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);
