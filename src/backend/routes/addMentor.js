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
  var oid = req.body.oid;
  adduser(fid, fname, lname, email, oid);
  dropInvite(email);
});

async function adduser(fid, fname, lname, email, oid) {
  return new Promise(async (resolve, reject) => {
    //variables needed to add the user to the database are added
    var sql =
      "INSERT INTO USERS (fid,admin,oid,fname,lname,email,utype) Values('" +
      fid +
      "',0," +
      oid +
      ",?,?,?,1)";
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
async function dropInvite(email) {
  return new Promise(async (resolve, reject) => {
    //after being used, the invite related to the spescific email is removed from the database
    var sql2 = "DELETE FROM INVITES WHERE email=?";
    console.log("mentor is being added");
    //query is ran
    mysqlconnection.query(sql2, [email], (err) => {
      if (!err) {
        console.log("invite removed from the database");
        console.log(sql2);
        resolve();
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}
module.exports = sendToMeRouter;
