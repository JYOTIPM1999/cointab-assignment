const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  gender: String,
  name: {
    title: String,
    first: String,
    last: String,
  },
  location: {
    street: {
      number: Number,
      name: String,
    },
    city: String,
    state: String,
    country: String,
    postcode: Number,
    coordinates: {
      latitude: String,
      longitude: String,
    },
    timezone: {
      offset: String,
      description: String,
    },
  },
  email: { type: String },
  login: {
    uuid: String,
    username: String,
    password: String,
    salt: String,
    md5: String,
    sha1: String,
    sha256: String,
  },
  dob: {
    date: String,
    age: Number,
  },
  registered: {
    date: String,
    age: Number,
  },

  phone: String,
  cell: String,
  id: {
    name: String,
    value: String,
  },
  picture: {
    large: String,
    medium: String,
    thumbnail: String,
  },
  nat: String,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
