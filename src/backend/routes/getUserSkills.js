const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getUserSkills", (req, res, next) => {
  //gets the user id from the request, and saves it so it can be used in the sql query.
  var uid = req.body.uid;
  //sql query is a combination of the technology and user skill tables, so the skills are filtered to just show those of an individual user
  var sql =
    "SELECT * FROM USKILLS U, TECHNOLOGIES T WHERE U.SID=T.SID AND uid='" +
    uid +
    "'";
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
