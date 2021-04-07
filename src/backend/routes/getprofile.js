const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getProfile", (req, res, next) => {
  //gets the user id from the request, and saves it so it can be used in the sql query.
  var fid = req.body.fid;
  //sql query is a combination of the users and organization tables, so the organization name can be displayed in the profile
  var sql =
    "SELECT * FROM USERS U, ORGANIZATIONS O WHERE U.OID=O.OID AND fid='" +
    fid +
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
