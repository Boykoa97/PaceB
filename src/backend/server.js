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
//post request chain for when a mentee is accepted
app.post(
  "/updateList",
  require("./routes/updateList"),
  require("./routes/sendMenteeAccept"),
  require("./routes/sendMail")
);
//post request chain for when a mentee is added and all the email files
app.post(
  "/addMentee",
  require("./routes/addMentee"),
  require("./routes/sendMenteeSignUp"),
  require("./routes/sendMail")
);

app.post("/addMentorSkills", require("./routes/addMentorSkills"));
app.post("/getOrganizationMentors", require("./routes/getOrganizationMentors"));
//post request chain for when a mentor is invited
app.post(
  "/inviteMentor",
  require("./routes/inviteMentor"),
  require("./routes/sendMentorSignUp"),
  require("./routes/sendMail")
);
app.post("/getInvites", require("./routes/getInvites"));
app.post("/addAdmin", require("./routes/addAdmin"));

app.post("/iframe-embed", require("./routes/getOrgId"));
// app.use("http://localhost:3000/mentee", require("./routes/sendMail"));

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});
