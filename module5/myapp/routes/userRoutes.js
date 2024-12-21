const express = require("express"); // this line is always needed.
const router = express.Router(); // this line is always needed.

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.get("/user", (req, res) => {
  res.send("User");
});

module.exports = router; // this line is always needed.
