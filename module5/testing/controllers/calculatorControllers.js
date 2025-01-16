// EXERCISE 5

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res
      .status(400)
      .json({ error: "Invalid input:m please provide a valid number!" });
  }

  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res
      .status(400)
      .json({ error: "Invalid input:m please provide a valid number!" });
  }

  let difference = number1 - number2;
  console.log(difference);
  res.status(200);
  res.json({ result: difference });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res
      .status(400)
      .json({ error: "Invalid input:m please provide a valid number!" });
  }

  let product = number1 * number2;
  console.log(product);
  res.status(200);
  res.json({ result: product });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res
      .status(400)
      .json({ error: "Invalid input:m please provide a valid number!" });
  }

  let quotient = number1 / number2;
  console.log(quotient);
  res.status(200);
  res.json({ result: quotient });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
