const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getUnmatchedMentees", (req, res, next) => {
  var sql =
    "SELECT * FROM PMATCHES P INNER JOIN USERS U ON P.menteeid=U.uid INNER JOIN USKILLS S ON P.menteeid=S.uid INNER JOIN TECHNOLOGIES T WHERE S.SID=T.SID";
  //query is ran
  mysqlconnection.query(sql, (err, info) => {
    if (!err) {
      console.log("info retrieved");
      console.log(sql);
      //response is sent
      console.log(info);
      res.send(info);
    } else {
      //error is logged if one occurs
      console.log(err);
    }
  });
});

module.exports = sendToMeRouter;
