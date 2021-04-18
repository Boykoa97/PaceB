const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
var uid;

//This is the file that preps the email to send a mentor on sign up.
//refer to sendMenteeAcceptance if any of the components in:
//sendToMeRouter.post("/addMentee", async (req, res, next) => {} are unclear
sendToMeRouter.post("/inviteMentor", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  console.log("in mentor email setup");
  res.locals.email = req.body.email;
  res.locals.subject = "Welcome to Pace B's Mentoring Service";
  let orgName = await getOrgName(req.body.oid);

  var body =
    "Welcome to Pace B's mentoring service.\n\n" +
    "You are being invited by email to join " +
    orgName +
    " as a mentor for their organization!\n\n" +
    "Please go to http://localhost:3000/signup to complete your signup\n";
  body = body + "\nBest, \n" + "Pace B";

  res.locals.body = body;
  next();
});

//retrieves the organization name based off the number stored in the DB
async function getOrgName(oid) {
  //query function that retrieves a organization name based off the id
  return new Promise((resolve, reject) => {
    var sql2 =
      "SELECT oname FROM ORGANIZATIONS WHERE ORGANIZATIONS.oid='" + oid + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log(sql2);
        console.log(info);
        let oName = info[0].oname;
        //returns with resolve or reject, reject returns an error, where the query fails, and resolve returns the uid, where the query completes
        resolve(oName);
      } else {
        console.log(err);
        reject(err);
      }
    });
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}

module.exports = sendToMeRouter;
