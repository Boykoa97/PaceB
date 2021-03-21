const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
sendToMeRouter.post("/addMentor", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var fid = req.body.fid;
  await adduser(fid, fname, lname, email);
});

async function adduser(fid, fname, lname, email) {
  return new Promise(async (resolve, reject) => {
    //variables needed for the database are added, admin and organization flags are set to a default at the moment
    var sql =
      "INSERT INTO USERS (fid,admin,oid,fname,lname,email,utype) Values('" +
      fid +
      "',1,1,?,?,?,1)";
    console.log("mentor is being added");
    //query is ran
    mysqlconnection.query(sql, [fname, lname, email], (err) => {
      if (!err) {
        console.log("account added to the database");
        console.log(sql);
        resolve();
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}
module.exports = sendToMeRouter;
