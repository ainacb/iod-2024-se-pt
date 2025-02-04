import { useState } from "react";

export function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("choose an operator");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (num1 === "" || num2 === ""){
        setResult("Please enter both numbers");
        return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    if (operator === "+") {res = n1 + n2;} 
    else if (operator === "-") {res = n1 - n2;} 
    else if (operator === "*") {res = n1 * n2;}
    else if (operator === "/") {res = n2 !==0 ? n1 / n2;}
    else {res = "Invalid operator";}

  setResult(result);
  }


  return <div className="Calculator componentBox"></div>;
}
