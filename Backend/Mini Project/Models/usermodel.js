const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(
  process.env.MONGODBURL
);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String, 
  profilepic:{

      type:String,
      default: "profile.png"

  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

module.exports = mongoose.model("users", userSchema);
