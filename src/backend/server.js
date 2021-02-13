const express = require("express");
const app = express();
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const port = 4444;
const mysqlconnection = require("./mysqlconnection");

app.use(morgan("dev"));
app.use(express.json());

app.post("/adduser", require("./routes/adduser"));
app.post("/sendmail", require("./routes/sendMail"));
app.post("/getprofile", require("./routes/getprofile"));

// app.use("http://localhost:3000/mentee", require("./routes/sendMail"));

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});
