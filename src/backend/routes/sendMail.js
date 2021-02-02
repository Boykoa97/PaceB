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

sendToMeRouter.post("/", (req, res, next) => {
  //make mailable object
  console.log("i hit the post request");
  //   we will need to update this pass information we want to email and also asthetics
  const mail = {
    from: process.env.EMAIL_USER,
    to: req.body.email,
    subject: "Welcome",
    text: `
      from:
      ${req.body.name} 

      contact: ${req.body.email}

      message: 

      This is a test`,
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
