const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
var uid;
sendToMeRouter.post("/addUser", (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  var fid = req.body.fid;
  var fname = req.body.fname;
  var lname = req.body.lname;
  var uslist = req.body.uslist;
  var email = req.body.email;
  var utype = req.body.utype;
  adduser(fid, fname, lname, email, utype);
  addskills(uid, uslist, fid);
});

function adduser(fid, fname, lname, email, utype) {
  //variables needed for the database are added, admin and organization flags are set to a default at the moment
  var sql =
    "INSERT INTO USERS (fid,admin,oid,fname,lname,email,utype) Values('" +
    fid +
    "',1,0,?,?,?," +
    utype +
    ")";
  //query is ran
  mysqlconnection.query(sql, [fname, lname, email], (err) => {
    if (!err) {
      console.log("account added to the database");
      console.log(sql);
    } else {
      console.log(err);
    }
  });
}
async function getuid(fid) {
  //query function that retrieves a uid, it need to be completed before running the rest of the code, signified by the async and await(later)
  return new Promise((resolve, reject) => {
    var sql2 = "SELECT uid FROM USERS WHERE fid='" + fid + "'";
    mysqlconnection.query(sql2, (err, info) => {
      if (!err) {
        console.log(sql2);
        console.log("user retrived");
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

async function addskills(uid, uslist, fid) {
  //query is ran in a for loop, where each item in uslist is added to the database, along with thier respective uids.
  var i;
  //await is used in order to wait for the uid response, which is needed for the rest of the query
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
