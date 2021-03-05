const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getskills", (req, res, next) => {
  var sql = "SELECT * FROM TECHNOLOGIES";
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
});

module.exports = sendToMeRouter;
