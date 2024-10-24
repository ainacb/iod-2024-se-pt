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
