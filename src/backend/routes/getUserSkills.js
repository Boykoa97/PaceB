const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getUserSkills", (req, res, next) => {
  //gets the user fid from the request, and saves it so it can be used in the sql query.
  var fid = req.body.fid;
  getskills(fid, res);
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
async function getskills(fid, res) {
  //await is used in order to wait for the uid response, which is needed for the rest of the query
  let data = await getuid(fid);
  var uid = data[0].uid;
  //sql query is a combination of the technology and user skill tables, so the skills are filtered to just show those of an individual user
  var sql =
    "SELECT * FROM USKILLS U, TECHNOLOGIES T WHERE U.SID=T.SID AND uid='" +
    uid +
    "'";
  //query is ran
  mysqlconnection.query(sql, (err, info) => {
    if (!err) {
      console.log(info);
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
