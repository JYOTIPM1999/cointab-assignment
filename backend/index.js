const express = require("express");
const mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const UserModel = require("./modal/User.modal");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", async (req, res) => {
  let data = await axios.get("https://randomuser.me/api/?results=10");

  console.log(data.data.results);

  try {
    const user = new UserModel(data.data.results);
    await user.save();
    res.send(user);
  } catch (e) {
    res.send(e);
  }
});

mongoose
  .connect(
    "mongodb+srv://jyotipm1999:Jyotipm1999@cluster0.flvqotq.mongodb.net/Cointab"
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("server started on port 8080");
    });
  });
