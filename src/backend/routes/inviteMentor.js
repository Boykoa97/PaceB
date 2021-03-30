const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
sendToMeRouter.post("/inviteMentor", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  var email = req.body.email;
  var oid = req.body.oid;
  await adduser(email, oid);
  next();
});

async function adduser(email, oid) {
  return new Promise(async (resolve, reject) => {
    //variables needed for invites to work are added
    var sql = "INSERT INTO INVITES (email,oid) Values(?," + oid + ")";
    //query is ran
    mysqlconnection.query(sql, [email], (err) => {
      if (!err) {
        console.log("invite added to the database");
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
