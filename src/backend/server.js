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
app.post("/addUser", require("./routes/addUser"));
app.post(
  "/findMatch",
  require("./routes/findMatch"),
  require("./routes/sendMail")
);
//app.post("/findMatch",);
app.post("/getProfile", require("./routes/getProfile"));
app.post("/getSkills", require("./routes/getSkills"));
app.post("/mentor", require("./routes/cookies"));
app.post("/getUserSkills", require("./routes/getUserSkills"));
app.post("/getUnmatchedMentees", require("./routes/getUnmatchedMentees"));
app.post("/getMatchedMentees", require("./routes/getMatchedMentees"));
app.post("/updateList", require("./routes/updateList"));
// app.use("http://localhost:3000/mentee", require("./routes/sendMail"));

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});
