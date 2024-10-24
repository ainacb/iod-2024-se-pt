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
console.log(addNumber(11, 48));

function subtractNumber(a, b) {
  return a - b;
}
console.log(subtractNumber(45, 15));

function multipleNumber(a, b) {
  return a * b;
}
console.log(multipleNumber(20, 3));

function divideNumber(a, b) {
  return a / b;
}
console.log(divideNumber(63, 9));

function sayHello(firstName) {
  console.log("Hello" + " " + firstName);
} //   Concatenate strings

sayHello("Aina!!!");
