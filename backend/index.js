require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.listen(PORT, () => {
  console.log("app is running at port 3002");
  mongoose
    .connect(uri)
    .then(() => console.log("DB Connected!"))
    .catch((err) => console.log(err));
});
