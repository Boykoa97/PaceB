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
app.post("/addMentor", require("./routes/addMentor"));
app.post("/findMatch", require("./routes/findMatch"));

app.post("/getProfile", require("./routes/getProfile"));
app.post("/getSkills", require("./routes/getSkills"));
app.post("/mentor", require("./routes/cookies"));
app.post("/getUserSkills", require("./routes/getUserSkills"));
app.post("/getUnmatchedMentees", require("./routes/getUnmatchedMentees"));
app.post("/getMatchedMentees", require("./routes/getMatchedMentees"));
app.post(
  "/updateList",
  require("./routes/updateList"),
  require("./routes/sendMenteeAccept"),
  require("./routes/sendMail")
);
app.post(
  "/addMentee",
  require("./routes/addMentee"),
  require("./routes/sendMenteeSignUp"),
  require("./routes/sendMail")
);
app.post("/addMentorSkills", require("./routes/addMentorSkills"));
// app.use("http://localhost:3000/mentee", require("./routes/sendMail"));

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});
