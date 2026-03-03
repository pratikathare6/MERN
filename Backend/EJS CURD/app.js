const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const usermodel = require("./Models/usermodel");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { name, email, profile } = req.body;
  let createduser = await usermodel.create({
    username: name,
    email: email,
    imgurl: profile,
  });

  res.redirect("/all");
});

app.get("/all", async (req, res) => {
  let allusers = await usermodel.find();

  res.render("all", { allusers });
});

app.get("/delete/:id", async (req, res) => {
  await usermodel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/all");
});

app.get("/edit/:userid", async (req, res) => {
  let user = await usermodel.findOne({ _id: req.params.userid });

  res.render("edit", { user });
});

app.post("/update/:userid", async (req, res) => {
  let { name, email, profile } = req.body;
  console.log(req.body);

  await usermodel.findOneAndUpdate(
    { _id: req.params.userid },
    { username: name, email, imgurl: profile },
    { new: true },
  );
  res.redirect("/all");
});

app.listen(3000);
