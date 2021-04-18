const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const { getMaxListeners } = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getUnmatchedMentees", (req, res, next) => {
  var fid = req.body.fid;
  getList(res, fid);
});
async function getuid(fid) {
  //query function that retrieves a uid from checking the mentors fid, it needs to be completed before running the rest of the code, signified by the async and await(later)
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
  //needed uid is retrieved before the query is ran
  var data = await getuid(fid);
  var uid = data[0].uid;
  //query is initalized and ran, which joins the users and pmatch tables, and selects all mentees who have a potential match with a certian mentor, signified by the uid
  //uskills and technologies are also joinned with these two other tables, so the mentee skills can be displayed, along with the respective skill names.
  var sql =
    "SELECT * FROM PMATCHES P INNER JOIN USERS U ON P.menteeid=U.uid INNER JOIN USKILLS S ON P.menteeid=S.uid INNER JOIN TECHNOLOGIES T ON S.SID=T.SID WHERE P.mentorid=" +
    uid +
    " AND P.rmatch=0 " +
    "ORDER BY P.skillsMatched DESC";
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
