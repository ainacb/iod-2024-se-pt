let currentInput = ""; // Stores the current number being entered
let previousInput = ""; // Stores the previous number
let operator = null; // Stores the selected operator

// Updates the display
function updateDisplay(value) {
  const display = document.getElementById("display");
  display.textContent = value;
}

// Appends a number to the current input
function appendNumber(num) {
  if (currentInput.length < 10) {
    // Limit the length of input
    currentInput += num.toString();
    updateDisplay(currentInput);
  }
}

// Sets the operator and stores the current input as the previous input
function setOperator(op) {
  if (currentInput === "") return; // Prevent setting operator without a number
  if (previousInput !== "" && currentInput !== "") {
    calculate(); // Calculate if there's a pending operation
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

// Calculates the result
function calculate() {
  if (previousInput === "" || currentInput === "" || !operator) return;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 === 0 ? "Error" : num1 / num2;
      break;
    default:
      return;
  }

  updateDisplay(result);
  // Reset for next calculation
  currentInput = result.toString();
  previousInput = "";
  operator = null;
}

// Resets the calculator
function resetCalculator() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay(0);
}
