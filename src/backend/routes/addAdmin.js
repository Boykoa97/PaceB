const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const app = express();
sendToMeRouter.post("/addAdmin", async (req, res, next) => {
  //variables are taken from the request and are saved for the sql query
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var fid = req.body.fid;
  var orgname = req.body.orgname;
  adduser(fid, fname, lname, email, orgname);
});
async function addOrg(orgname) {
  return new Promise(async (resolve, reject) => {
    //organization is added first, using the given organization name the organizaiton is added to the database
    var sql = "INSERT INTO ORGANIZATIONS (oname) VALUES (?)";
    //query is ran
    mysqlconnection.query(sql, [orgname], (err, result) => {
      if (!err) {
        console.log("organization added to the database");
        console.log(sql);
        //assocciated organization id is saved, so it can be used for the query to add the admin to the database
        var oid = result.insertId;
        resolve(oid);
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}
async function adduser(fid, fname, lname, email, orgname) {
  return new Promise(async (resolve, reject) => {
    let res = await addOrg(orgname);
    var oid = res;
    //variables needed for the database are added, using the firebase id, and organization id from earlier, along with previous user inputs
    var sql =
      "INSERT INTO USERS (fid,admin,oid,fname,lname,email,utype) Values('" +
      fid +
      "',1," +
      oid +
      ",?,?,?,1)";
    //query is ran
    mysqlconnection.query(sql, [fname, lname, email], (err, result) => {
      if (!err) {
        console.log("account added to the database");
        console.log(sql);
        //when the query is done, the promise is resolved and a result is sent
        resolve(result);
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
}
module.exports = sendToMeRouter;
