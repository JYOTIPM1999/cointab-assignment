const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/router");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", users);

mongoose.connect(process.env.DB_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT}`);
  });
});
