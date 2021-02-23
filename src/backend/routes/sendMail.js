const express = require("express");
const sendToMeRouter = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("I failed auth");
    const email = process.env.EMAIL_USER;
  } else {
    console.log("Server is ready to take our messages");
  }
});

sendToMeRouter.use(express.json());

// this is the function the sends mail from the mentees form
sendToMeRouter.post("/findMatch", (req, res, next) => {
  //make mailable object
  console.log("i hit the post request");
  console.log(req.body);
  console.log(res.locals);
  //   we will need to update this pass information we want to email and also asthetics
  const mail = {
    from: process.env.EMAIL_USER,
    to: res.locals.mentorEmail,
    subject: "Potential Mentee",
    //update contact so it has the mentors email and not mentees
    text: `
      ${req.body.first_name} ${req.body.last_name} would like to be mentored,

      If you wish to mentor them:

      Your mentees email is: ${req.body.email}. 

      They wish to be mentored in ${req.body.skill1} and ${req.body.skill2} and ${req.body.skill3} and ${req.body.skill4}. 
      
      Please email them to communicate further.
      
      Best,
      PaceB`,
  };
  // error handling goes here.
  transporter.sendMail(mail, (err, data) => {
    console.log("I am sending mail");
    if (err) {
      console.log("I failed");
      console.log(err);
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      console.log("email success");
    }
  });
});

module.exports = sendToMeRouter;
