function squareRoot(a) {
  if (a < 0) {
    throw new Error("Cannot calculate the square root of a negative number.");
  }
  return Math.sqrt(a);
}
module.exports = { squareRoot };
