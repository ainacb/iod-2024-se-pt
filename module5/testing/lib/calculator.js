// EXERCISE 7

const crypto = require("crypto");
const Logger = require("./Logger"); // Import the logger

class Calculator {
  constructor() {
    // this.id = Date.now();
    this.id = crypto.randomUUID(); // Generates a secure, random unique ID.
    this.logger = new Logger(); // Use the logger
  }

  //   #log = (value) => {
  //     console.log(`[Calculator :${this.id}]: ${value}`);
  //   };

  add(num1, num2) {
    const value = num1 + num2;
    // this.#log(value);
    this.logger.log(this.id, `add(${num1}, ${num2}) = ${value}`);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    // this.#log(value);
    this.logger.log(this.id, `subtract(${num1}, ${num2}) = ${value}`);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    // this.#log(value);
    this.logger.log(this.id, `multiply(${num1}, ${num2}) = ${value}`);
    return value;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      //   this.#log("Error: Division by zero");
      this.logger.log(this.id, "Error: Division by zero");
      throw new Error("Division by zero");
    }
    const value = num1 / num2;
    // this.#log(value);
    this.logger.log(this.id, `divide(${num1}, ${num2}) = ${value}`);
    return value;
  }
}

module.exports = Calculator;
