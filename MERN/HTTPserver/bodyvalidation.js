const express = require("express");

const app = express();

const port = 4000;

app.use(express.json());

app.post("/health", function (req, res) {
  const kidenys = req.body.kidenys;

  const kidenylength = kidenys.length;

  res.send("you have " + kidenylength + " kidneys");
});

//global catch middleware
app.use(function (err, req, res, next) {
  res.status(500).json({
    msg: "SORRY Server is not responding",
  });
});

app.listen(4000);
