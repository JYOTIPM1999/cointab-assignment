const express = require("express");
const {
  Users,
  UsersCount,
  DeleteUsers,
  FilteredUsers,
  GetUsers,
} = require("../controller/controller");

const router = express.Router();

// Post users information to Database from "https://randomuser.me/"
router.route("/savedata").post(Users);

// Get details of Users and count
router.route("/usersCount").get(UsersCount);

router.route("/filter/:page").post(FilteredUsers);

// Delete all data of users
router.route("/deletedata").delete(DeleteUsers);

router.route("/getusers").get(GetUsers);

module.exports = router;
