const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/adduser", (req, res, next) => {
  var fid = req.body.fid;
  var sql = "INSERT INTO USERS (fid,admin) Values('" + fid + "',0)";
  mysqlconnection.query(sql, (err) => {
    if (!err) {
      console.log("account added to the database");
    } else {
      console.log(err);
    }
  });
});

module.exports = sendToMeRouter;
