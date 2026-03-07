const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const path = require("path");
const authmodel = require("./DB/database");
const bcrypt = require("bcrypt");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let user = await authmodel.findOne({ email: req.body.email });

  if (!user) res.send("Email or Password is wrong");

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (!result) res.send("Email or Password is wrong");

    const token = jwt.sign(user.email, "shhhhhhhh");
    res.cookie("token", token);

    res.redirect("/index");
  });
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      await authmodel.create({ username, email, password: hash, age });

      const token = jwt.sign(email, "shhhhhhhh");

      res.cookie("token", token);

      res.redirect("/index");
    });
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});


app.listen(3000);
