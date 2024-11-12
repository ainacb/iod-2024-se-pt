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
