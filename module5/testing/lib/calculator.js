// EXERCISE 7

class Calculator {
    constructor() {
        this.id = Date.now();
    }

    #log = (value) => {
        console.log(`[Calculator :${this.id}]: ${value}`);
    }

    add(num1, num2) {
        const value = num1 + num2;
        this.#log(value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        this.#log(value);
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2;
        this.#log(value);
        return value;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            this.#log('Error: Division by zero');
            throw new Error('Division by zero');
        }
        const value = num1 / num2;
        this.#log(value);
        return value;
    }
}


module.exports = Calculator