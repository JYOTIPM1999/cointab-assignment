const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("hello express"));

mongoose.connect("mongodb://127.0.0.1:27017/").then(() => {
  app.listen(8080, () => {
    console.log("server started on port 8080");
  });
});
