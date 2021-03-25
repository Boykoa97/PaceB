const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
var uid;
sendToMeRouter.post("/updateList", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  console.log("in mentee email acceptance");
  console.log(req.body);
  res.locals.subject = "Meet Your New Mentor";
  var mentorId = await getuid(req.body.fid);
  var menteeId = req.body.menteeid;
  var skillList = await getskills(mentorId);
  var mentee = await getUser(menteeId);
  var mentor = await getUser(mentorId);
  console.log(mentee);

  var mentorFName = mentor[0].fname;
  var mentorLName = mentor[0].lname;
  var mentorEmail = mentor[0].email;

  res.locals.mentee_fname = mentee[0].fname;
  res.locals.mentee_lname = mentee[0].lname;
  res.locals.mentee_email = mentee[0].email;

  var body =
    "Welcome " +
    res.locals.mentee_fname +
    " " +
    res.locals.mentee_lname +
    " to Pace B's mentoring service.\n\n" +
    "Your mentor is " +
    mentorFName +
    " " +
    mentorLName +
    " and they are experienced in:\n";
  for (var i = 0; i < skillList.length; i++) {
    body = body + "  " + skillList[i] + "\n";
  }
  body = body + "\nContact them further at " + mentorEmail + "\n";
  body = body + "\nBest, \n" + "Pace B";

  res.locals.body = body;
  next();
});

async function getuid(fid) {
  //query function that retrieves a uid, it needs to be completed before running the rest of the code, signified by the async and await(later)
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT uid FROM USERS WHERE USERS.fid='" + fid + "'";
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

async function getUser(uid) {
  //query function that retrieves a uid, it needs to be completed before running the rest of the code, signified by the async and await(later)
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT * FROM USERS WHERE USERS.uid='" + uid + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log(sql2);
        console.log(info[0]);
        //returns with resolve or reject, reject returns an error, where the query fails, and resolve returns the uid, where the query completes
        resolve(info);
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

async function getskills(uid) {
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
