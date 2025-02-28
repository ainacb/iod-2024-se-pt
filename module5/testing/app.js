// app.js - new file at top level
const express = require("express");
const app = express();
const port = 3000;

// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// export the app
module.exports = app;
