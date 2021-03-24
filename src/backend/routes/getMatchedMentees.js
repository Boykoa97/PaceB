const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const { getMaxListeners } = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getMatchedMentees", (req, res, next) => {
  var fid = req.body.fid;
  getList(res, fid);
});
async function getuid(fid) {
  //query function that retrieves a uid from checking the mentors fid, it need to be completed before running the rest of the code, signified by the async and await(later)
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT uid FROM USERS WHERE fid='" + fid + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        //console.log(sql2);
        console.log("uid retrived");
        var uid = info;
        //returns with resolve or reject, reject returns an error, where the query fails, and resolve returns the uid, where the query completes
        resolve(uid);
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}
async function getList(res, fid) {
  //uid is retrived fist using a seperate function, since it is needed for the query.
  var data = await getuid(fid);
  var uid = data[0].uid;
  //query joins the uskills, users, and technologies tables together, searching for where the matchid matches the mentor id.
  //so all of the accepted mentees can be displayed, alongside their respective skills, and the related skill names.
  var sql =
    "SELECT * FROM USERS U INNER JOIN USKILLS S ON U.uid=S.uid INNER JOIN TECHNOLOGIES T ON S.sid=T.sid WHERE U.matchid=" +
    uid;
  //query is ran
  mysqlconnection.query(sql, (err, info) => {
    if (!err) {
      console.log("info retrieved");
      console.log(sql);
      //response is sent
      res.send(info);
    } else {
      //error is logged if one occurs
      console.log(err);
    }
  });
}
module.exports = sendToMeRouter;
