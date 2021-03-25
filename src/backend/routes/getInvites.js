const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
sendToMeRouter.post("/getInvites", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query, depending on the request type, invites are searched by oid or email
  var reqtype = req.body.reqtype;
  if (reqtype == 0) {
    var oid = req.body.oid;
    await getByOid(oid, res);
  } else if (reqtype == 1) {
    var email = req.body.email;
    getByEmail(email, res);
  } else {
    console.log("Error");
  }
});

async function getByOid(oid, res) {
  return new Promise(async (resolve, reject) => {
    //retrives invites related to a certian oid
    var sql = "SELECT email FROM INVITES WHERE oid=" + oid;
    //query is ran
    mysqlconnection.query(sql, (err, info) => {
      if (!err) {
        console.log("invites retrived");
        console.log(sql);
        //response sent
        res.send(info);
        resolve();
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}
async function getByEmail(email, res) {
  return new Promise(async (resolve, reject) => {
    //retrives invites related to a certian email
    var sql = "SELECT * FROM INVITES WHERE email=?";
    //query is ran
    mysqlconnection.query(sql, [email], (err, info) => {
      if (!err) {
        console.log("invites retrived");
        console.log(sql);
        //response sent
        res.send(info);
        resolve();
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}
module.exports = sendToMeRouter;
