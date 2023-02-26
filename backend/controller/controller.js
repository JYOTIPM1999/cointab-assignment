const axios = require("axios");
const UserModel = require("../modal/User.modal");
const { userData } = require("../utilities/userData");

const Users = async (req, res) => {
  try {
    userData("https://randomuser.me/api/?results=100")
      .then((data) => UserModel.insertMany(data))
      .then(() => UserModel.count())
      .then((data) => res.status(200).json({ status: "Success", count: data }));
  } catch (e) {
    res.status(500).json({ status: "Error", message: e.message });
  }
};

const GetUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    console.log(users);
    res.status(200).json({ status: "Success", User: users });
  } catch (e) {
    res.status(500).json({ status: "Error", message: e.message });
  }
};

const UsersCount = async (req, res) => {
  try {
    const count = await UserModel.count();
    res.status(200).json({ status: "Success", count });
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

const FilteredUsers = async (req, res) => {
  // console.log(req.body.type);
  var filterInput = {};

  if (req.body.type == "male") {
    filterInput = { gender: "male" };
  } else if (req.body.type == "female") {
    filterInput = { gender: "female" };
  } else if (req.body.type == "India") {
    filterInput = { "location.country": "India" };
  } else if (req.body.type == "age>15") {
    filterInput = { "dob.age": { $gt: 15 } };
  } else if (req.body.type == "age<15") {
    filterInput = { "dob.age": { $lt: 15 } };
  }

  try {
    const count = await UserModel.find(filterInput).count();
    console.log(count);

    const filterUsers = await UserModel.find(filterInput)
      .skip(req.params.page)
      .limit(10);
    res.json({
      filterUsers,
      count,
      pagesCount: Math.floor(count / 10),
    });
  } catch (e) {
    res.status(500).json({ status: "Error", message: e.message });
  }
};

module.exports = { Users, UsersCount, DeleteUsers, FilteredUsers, GetUsers };
