const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const port = 4444;

app.use(morgan("dev"));
app.use(express.json());

var sendMail = require("./routes/sendMail");
var cookies = require("./routes/cookies");

//app.use("/", sendMail);
app.post("/mentee", sendMail);
app.post("/mentor", cookies);

// app.use("http://localhost:3000/mentee", require("./routes/sendMail"));

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});
