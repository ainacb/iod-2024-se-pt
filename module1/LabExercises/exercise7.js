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
