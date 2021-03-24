const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const e = require("express");
const app = express();

sendToMeRouter.post("/updateList", (req, res, next) => {
  //type of list edit is checked, and depending on which, a spescific function is called, and the variables needed for that request are initalized.
  var type = req.body.type;
  if (type == 0) {
    var mid = req.body.mid;
    declineMentee(res, mid);
  } else if (type == 1) {
    var menteeid = req.body.menteeid;
    var fid = req.body.fid;
    acceptMentee(res, menteeid, fid);
  } else {
    console.log("Error");
  }
});
async function declineMentee(res, mid) {
  //just sets the match to rejected in the database, where rmatch is set to true
  var sql = "UPDATE PMATCHES SET rmatch=1 WHERE mid=" + mid;
  //query is ran
  mysqlconnection.query(sql, (err, info) => {
    if (!err) {
      console.log("declined: " + mid);
      console.log(sql);
      //response is sent
      res.send(info);
    } else {
      //error is logged if one occurs
      console.log(err);
    }
  });
}

async function acceptMentee(res, menteeid, fid) {
  //first the needed uid is retrived using the fid
  var data = await getuid(fid);
  var uid = data[0].uid;
  //then the respective match is deleted from the pmatches table
  //both of these function use await and async keywords, in order to make sure the database queries occur in the right order
  await deletepmatch(menteeid);
  //then the query needed to set the match as accepted is done, where the matchid for the mentee is set to the respective mentors id
  var sql = "UPDATE USERS SET matchid=" + uid + " WHERE uid=" + menteeid;
  //query is ran
  mysqlconnection.query(sql, (err, info) => {
    if (!err) {
      console.log("accepted: " + menteeid);
      console.log(sql);
      res.send(info);
      //response is sent
    } else {
      //error is logged if one occurs
      console.log(err);
    }
  });
}

async function deletepmatch(menteeid) {
  return new Promise((resolve, reject) => {
    //deletes the potential match row from the table, which is found by checking the unqiue mentee id.
    var sql2 = "DELETE FROM PMATCHES WHERE menteeid=" + menteeid;
    //query is ran
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log("potential match deleted");
        console.log(sql2);
        resolve();
        //once the query hits resolve, it is funished and returns to the parent function
      } else {
        //error is logged if one occurs
        console.log(err);
        reject(err);
      }
    });
  });
}
async function getuid(fid) {
  //query function that retrieves a uid, it needs to be completed before running the rest of the code, signified by the async and await(later)
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT uid FROM USERS WHERE fid='" + fid + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log(sql2);
        console.log("fid retrived");
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
module.exports = sendToMeRouter;
