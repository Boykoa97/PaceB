const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
var uid;
sendToMeRouter.post("/addMentorSkills", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  var uslist = req.body.uslist;
  var url = req.body.url;
  var fid = req.body.fid;
  await addskills(uid, uslist, fid, url);
});
async function getuid(fid) {
  //query function that retrieves a uid, it needs to be completed before running the rest of the code, signified by the async and await(later)
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT uid FROM USERS WHERE USERS.fid='" + fid + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log(sql2);
        let uid = info;
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

async function addskills(uid, uslist, fid, url) {
  return new Promise(async (resolve, reject) => {
    //await is used in order to wait for the uid response, which is needed for the rest of the query
    let res = await getuid(fid);
    var uid = res[0].uid;
    //runs a function to put the calendar url into the database
    addUrl(uid, url);
    //array map is used, where each item becomes a uid and skill id pair, done in order to just need one query to insert skills
    var list = uslist.map((item) => [uid, item]);
    //query is ran
    var sql3 = "INSERT INTO USKILLS (uid, sid) Values ?";
    mysqlconnection.query(sql3, [list], (err) => {
      if (!err) {
        console.log("user skills added to the database");
      } else {
        console.log(err);
      }
    });
    resolve();
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}
async function addUrl(uid, url) {
  return new Promise(async (resolve, reject) => {
    //user row is updated with the calendar url
    var sql3 = "UPDATE USERS SET calendar=? WHERE uid=" + uid;
    //query is ran
    mysqlconnection.query(sql3, [url], (err) => {
      if (!err) {
        console.log("calendar url added");
      } else {
        console.log(err);
      }
    });
    resolve();
  }).catch((error) => {
    console.log("hit error");
    const eMessage = error.message;
    this.setState({ eMessage });
    console.log(error);
  });
}
module.exports = sendToMeRouter;
