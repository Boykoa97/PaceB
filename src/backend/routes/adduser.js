const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
var uid;
sendToMeRouter.post("/adduser", (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  var fid = req.body.fid;
  var fname = req.body.fname;
  var lname = req.body.lname;
  var uslist = req.body.uslist;
  adduser(fid, fname, lname);
  addskills(uid, uslist, fid);
});

function adduser(fid, fname, lname) {
  //variables needed for the database are added, admin and organization flags are set to a default at the moment
  var sql =
    "INSERT INTO USERS (fid,admin,oid,fname,lname) Values('" +
    fid +
    "',1,0,'" +
    fname +
    "','" +
    lname +
    "')";
  //query is ran
  mysqlconnection.query(sql, (err) => {
    if (!err) {
      console.log("account added to the database");
      console.log(sql);
    } else {
      console.log(err);
    }
  });
}
async function getuid(fid) {
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT uid FROM USERS WHERE fid='" + fid + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log(sql2);
        console.log("user retrived");
        var uid = info;
        resolve(uid);
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}

async function addskills(uid, uslist, fid) {
  var i;
  var res = await getuid(fid);
  var uid = res[0].uid;
  for (i = 0; i < uslist.length; i++) {
    var sql3 =
      "INSERT INTO USKILLS (uid, sid) Values('" +
      uid +
      "','" +
      uslist[i] +
      "')";
    //query is ran
    mysqlconnection.query(sql3, (err) => {
      if (!err) {
        console.log("user skill added to the database");
      } else {
        console.log(err);
      }
    });
  }
}

module.exports = sendToMeRouter;
