const express = require("express"); // this line is always needed.
const router = express.Router(); // this line is always needed.
const calculatorController = require("../controllers/calculatorControllers");

// router.get("/add", (req, res) => {
//   res.send("Add");
// });

// router.get("/add", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

// EXERCISE 2 and 3

// router.get("/add", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);

//   let sum = number1 + number2;

//   console.log(sum);

//   res.status(200);
//   res.json({ result: sum });
// });

// router.get("/subtract", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);

//   let difference = number1 - number2;

//   console.log(difference);

//   res.status(200);
//   res.json({ result: difference });
// });

// router.get("/multiply", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);

//   let product = number1 * number2;

//   console.log(product);

//   res.status(200);
//   res.json({ result: product });
// });

// router.get("/divide", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);

//   let quotient = number1 / number2;

//   console.log(quotient);

//   res.status(200);
//   res.json({ result: quotient });
// });

// EXERCISE 5

router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

router.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});

router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

router.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});

module.exports = router; // this line is always needed.
