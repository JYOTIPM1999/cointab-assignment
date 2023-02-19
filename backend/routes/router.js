const express = require("express");
const { Users, GetUsers, DeleteUsers } = require("../controller/controller");

const router = express.Router();

// Post users information to Database from "https://randomuser.me/"
router.route("/savedata").post(Users);

// Get details of Users
router.route("/getdata").get(GetUsers);

// Delete all data of users
router.route("/deletedata").delete(DeleteUsers);

module.exports = router;
