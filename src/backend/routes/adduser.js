const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/adduser", (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  var fid = req.body.fid;
  var skill1 = req.body.skill1;
  var skill2 = req.body.skill2;
  var skill3 = req.body.skill3;
  var skill4 = req.body.skill4;
  //variables needed for the database are added, admin and organization flags are set to a default at the moment
  var sql =
    "INSERT INTO USERS (fid,admin,oid,skill1,skill2,skill3,skill4) Values('" +
    fid +
    "',1,0,'" +
    skill1 +
    "','" +
    skill2 +
    "','" +
    skill3 +
    "','" +
    skill4 +
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
});

module.exports = sendToMeRouter;
