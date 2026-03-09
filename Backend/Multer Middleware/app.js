const express = require("express");

const app = express();
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, bytes) { //generate random file name 
      const fn = bytes.toString("hex") + path.extname(file.originalname); //attach the original extention of file afer random file name 

      cb(null, fn);
    });
  },
});
const upload = multer({ storage: storage });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res) => { //upload.single("image") name of file upload input 
  console.log(req.file);//comming from front end 
  res.redirect('/index')
});

app.listen(3000);
