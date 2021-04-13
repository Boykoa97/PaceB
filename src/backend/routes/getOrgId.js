const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const { getMaxListeners } = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/iframe-embed", async (req, res, next) => {
  var fid = req.body.fid;
  console.log(req.body.fid);
  let oid = await getOrgID(fid, res);
  console.log("oid returns " + oid);
});
async function getOrgID(fid, res) {
  //query joins the uskills, users, and technologies tables together, searching for where the mentors oid matches the admins oid
  //so all of the mentors associated with that organization can be displayed, alongside their respective skills, and the related skill names.
  var sql =
    "SELECT * FROM USERS U INNER JOIN ORGANIZATIONS O ON U.oid=O.oid WHERE U.fid='" +
    fid +
    "'";
  //query is ran
  mysqlconnection.query(sql, (err, info) => {
    if (!err) {
      console.log("info retrieved");
      console.log(sql);
      //response is sent
      console.log("org id is:" + info[0].oid);
      res.send(info);
    } else {
      //error is logged if one occurs
      console.log(err);
    }
  });
}
module.exports = sendToMeRouter;
