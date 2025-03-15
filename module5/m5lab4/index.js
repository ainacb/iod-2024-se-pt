const express = require("express"); // import the express package
const app = express(); // create a new app
const port = 3000; // change this to run the app on a different port - usually a 4 digit number
const friendRoutes = require("./routes/friendRoutes");

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use("/", express.static("public"));
app.use("/friends", friendRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

// starts the backend app on the given port
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`);
});
