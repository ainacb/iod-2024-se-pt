import { useState } from "react";
import { NumberInput } from "./NumberInput";
import { OperatorSelector } from "./OperatorSelector";
import { ResultDisplay } from "./ResultDisplay";
import { CalculateButton } from "./CalculateButton";

export function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("choose an operator");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }
    if (operator === "") {
      setResult("Please select an operator");
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    if (operator === "+") {
      res = n1 + n2;
    } else if (operator === "-") {
      res = n1 - n2;
    } else if (operator === "*") {
      res = n1 * n2;
    } else if (operator === "/")
      res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
    else {
      res = "Invalid operator";
    }

    setResult(res);
  };

  return (
    <div className="Calculator componentBox">
      <h2>Calculator</h2>
      <NumberInput
        value={num1}
        onChange={setNum1}
        placeholder="Enter first number"
      />
      <OperatorSelector value={operator} onChange={setOperator} />
      <NumberInput
        value={num2}
        onChange={setNum2}
        placeholder="Enter second number"
      />
      <CalculateButton onClick={calculate} />
      <ResultDisplay result={result} />
    </div>
  );
}
