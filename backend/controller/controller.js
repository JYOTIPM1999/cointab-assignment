const axios = require("axios");
const UserModel = require("../modal/User.modal");
const { userData } = require("../utilities/userData");

const Users = async (req, res) => {
  try {
    userData("https://randomuser.me/api/?results=80")
      .then((data) => UserModel.insertMany(data))
      .then((data) =>
        res.status(200).json({ status: "Success", count: data.length })
      );
  } catch (e) {
    res.status(500).json({ status: "Error", message: e.message });
  }
};

const GetUsers = async (req, res) => {
  try {
    const users = await UserModel.find().limit(10);
    res
      .status(200)
      .json({ status: "Success", length: users.length, User: users });
  } catch (e) {
    res.status(500).json({ status: "Error", message: e.message });
  }
};

const DeleteUsers = async (req, res) => {
  try {
    const deleteUser = await UserModel.deleteMany();
    res.status(200).json({ status: "Success", deleteUser });
  } catch (e) {
    res.status(500).json({ status: "Error", message: e.message });
  }
};

module.exports = { Users, GetUsers, DeleteUsers };
