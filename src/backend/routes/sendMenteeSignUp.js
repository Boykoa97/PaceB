const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
var uid;
sendToMeRouter.post("/addMentee", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  console.log("in mentee email setup");
  res.locals.fname = req.body.fname;
  res.locals.lname = req.body.lname;
  res.locals.email = req.body.email;
  res.locals.subject = "Welcome to Pace B's Mentoring Service";
  var uid = await getuid(req.body.email);
  var skillList = await getskills(uid, res);

  var body =
    "Welcome " +
    req.body.fname +
    " " +
    req.body.lname +
    " to Pace B's mentoring service.\n" +
    "Soon you will be contacted by a mentor that wishes to mentor you in:\n";
  for (var i = 0; i < skillList.length; i++) {
    body = body + skillList[i] + "\n";
  }
  body = body + "\nBest, \n" + "Pace B";

  res.locals.body = body;
  next();
});

async function getuid(email) {
  //query function that retrieves a uid, it needs to be completed before running the rest of the code, signified by the async and await(later)
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT uid FROM USERS WHERE USERS.email='" + email + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log(sql2);
        console.log(info);
        let uid = info[0].uid;
        //returns with resolve or reject, reject returns an error, where the query fails, and resolve returns the uid, where the query completes
        resolve(uid);
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

async function getskills(uid, res) {
  return new Promise((resolve, reject) => {
    //sql query is a combination of the technology and user skill tables, so the skills are filtered to just show those of an individual user
    var sql =
      "SELECT * FROM USKILLS U, TECHNOLOGIES T WHERE U.SID=T.SID AND uid='" +
      uid +
      "'";
    //query is ran
    mysqlconnection.query(sql, (err, info) => {
      if (!err) {
        //response is sent
        var skillList = [];
        for (var i = 0; i < info.length; i++) {
          skillList[i] = info[i].skills;
        }
        resolve(skillList);
      } else {
        //error is logged if one occurs
        console.log(err);
      }
    });
  });
}

module.exports = sendToMeRouter;
