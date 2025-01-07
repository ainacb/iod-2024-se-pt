// 1. What are the results of these expressions? (answer first, then use console.log() to check)

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

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

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
  lastName: "Montoya", // a) Complete the inigo object by adding a lastName property and including it in the greeting.
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  // getCatchPhrase(person) {
  //   return "Nice to meet you.";
  // },

  // b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
  // HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.

  getCatchPhrase(person) {
    return person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.";
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);

// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const inigo1 = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};

inigo1.greeting(westley);
inigo1.greeting(rugen);

// 7.
// The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  addFoul() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " + this.score + " with " + this.fouls + " fouls."
    );
    return this;
  },
  finalScore() {
    console.log(
      "Final score is " + this.score + " with " + this.fouls + " fouls."
    );
    return this;
  },
};

// modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .addFoul()
  .basket()
  .addFoul()
  .threePointer()
  .halfTime()
  .addFoul()
  .freeThrow()
  .basket()
  .addFoul()
  .threePointer()
  .addFoul()
  .finalScore();

// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
// b) Create a new object for a different city with different properties and call your function again with the new object.

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const melbourne = {
  name: "Melbourne",
  population: 4_936_000,
  state: "VIC",
  founded: "30 August 1835",
  timezone: "Australia/Melbourne",
};

const brisbane = {
  name: "Brisbane",
  population: 2_280_000,
  state: "QLD",
  founded: "13 May 1825",
  timezone: "Australia/Brisbane",
};

const perth = {
  name: "Perth",
  population: 2_093_000,
  state: "WA",
  founded: "12 June 1829",
  timezone: "Australia/Perth",
};

const adelaide = {
  name: "Adelaide",
  population: 1_376_000,
  state: "SA",
  founded: "28 December 1836",
  timezone: "Australia/Adelaide",
};

const hobart = {
  name: "Hobart",
  population: 240_342,
  state: "TAS",
  founded: "20 February 1804",
  timezone: "Australia/Hobart",
};

const darwin = {
  name: "Darwin",
  population: 147_255,
  state: "NT",
  founded: "5 February 1869",
  timezone: "Australia/Darwin",
};

const canberra = {
  name: "Canberra",
  population: 431_380,
  state: "ACT",
  founded: "12 March 1913",
  timezone: "Australia/Canberra",
};

function logCityInformation(city) {
  for (let key in city) {
    console.log("key: " + key);
    console.log("value: " + city[key]);
  }
}

console.log("City Information of Sydney:");
logCityInformation(sydney);

console.log("\nCity Information of Melbourne:");
logCityInformation(melbourne);

console.log("\nCity Information of Brisbane:");
logCityInformation(brisbane);

console.log("\nCity Information of Perth:");
logCityInformation(perth);

console.log("\nCity Information of Adelaide:");
logCityInformation(adelaide);

console.log("\nCity Information of Hobart:");
logCityInformation(hobart);

console.log("\nCity Information of Darwin:");
logCityInformation(darwin);

console.log("\nCity Information of Canberra:");
logCityInformation(canberra);

// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)

let moreSports = teamSports;
moreSports.push("Baseball");
moreSports.unshift("Football");

// b) Create a new dog2 variable equal to dog1 and give it a new value

let dog2 = dog1;
dog2 = "Woffy";

// c) Create a new cat2 variable equal to cat1 and change its name property

let cat2 = cat1;
cat2.name = "Whiskee";

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?

console.log("teamSports:", teamSports);
console.log("dog1:", dog1);
console.log("cat1:", cat1);

// Explanation
// - Arrays and objects are stored by reference in JavaScript.
// - Assigning `moreSports = teamSports` creates a reference, so modifying `moreSports` changes `teamSports`.
// - `cat2` is also a reference to `cat1`, so modifying `cat2` affects `cat1`.
// - Primitive types are copied by value, so `dog1` remains unaffected when `dog2` is reassigned.

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let moreSportsIndependent = [...teamSports];
moreSportsIndependent.push("Basketball");

let cat2Independent = { ...cat1 };
cat2Independent.name = "Meowth";

// 10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.human = true;
// }

// a) Create a new person using the constructor function and store it in a variable

// let person1 = new Person("Annie", 35);

// b) Create a second person using different name and age values and store it in a separate variable

// let person2 = new Person("Bobby", 30);

// c) Print out the properties of each person object to the console

// console.log("Person 1:", person1);
// console.log("Person 2:", person2);

// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.

// class PersonClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//   }
// }

// let person3 = new PersonClass("Charles", 28);
// console.log("Person 3:", person3);

// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

// class PersonClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//   }

//   canDrive() {
//     return this.age >= 18;
//   }
// }

// let person5 = new PersonClass("Evelyn", 20);
// console.log("Person 5 can drive:", person5.canDrive());

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    return this.age >= 18;
  };
}

let person1 = new Person("Annie", 35);
let person2 = new Person("Bobby", 30);
console.log("Person 1:", person1);
console.log("Person 2:", person2);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 18;
  }
}

let person3 = new PersonClass("Charles", 28);
console.log("Person 3:", person3);

let person4 = new Person("David", 16);
console.log("Person 4 can drive:", person4.canDrive());

let person5 = new PersonClass("Evelyn", 20);
console.log("Person 5 can drive:", person5.canDrive());
