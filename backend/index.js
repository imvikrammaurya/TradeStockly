const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.listen(3002, () => {
  console.log("app is running at port 3002");
});
