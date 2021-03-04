const express = require("express");
const app = express();
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const port = 4444;
const mysqlconnection = require("./mysqlconnection");

app.use(morgan("dev"));
app.use(express.json());

//mentor post request is unhandled
app.post("/adduser", require("./routes/adduser"));
app.post(
  "/findMatch",
  require("./routes/findMatch"),
  require("./routes/sendMail")
);
//app.post("/findMatch",);
app.post("/getprofile", require("./routes/getprofile"));
app.post("/getskills", require("./routes/getskills"));
app.post("/mentor", require("./routes/cookies"));

// app.use("http://localhost:3000/mentee", require("./routes/sendMail"));

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});
