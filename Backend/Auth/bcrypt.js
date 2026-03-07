const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("pratik@123", salt, function (err, hash) {
      console.log(hash);
      //$2b$10$csSY0VVtBEp32HIWvtt4o.3mFdkMMAURFwR9cS/JyGM1Qzua2ckpO
    });
  });
});

app.get("/getpass", (req, res) => {
  bcrypt.compare(
    "pratik@123",
    "$2b$10$csSY0VVtBEp32HIWvtt4o.3mFdkMMAURFwR9cS/JyGM1Qzua2ckpO",
    function (err, result) {
      console.log(result); //retruns true or false
    },
  );
});

app.listen(3000);
