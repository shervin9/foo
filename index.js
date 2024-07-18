const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello, Shervin");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
