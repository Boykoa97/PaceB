const express = require("express");
const sendToMeRouter = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlconnection = require("../mysqlconnection");
const { getMaxListeners } = require("../mysqlconnection");
const app = express();

sendToMeRouter.post("/getOrganizationMentors", (req, res, next) => {
  var oid = req.body.oid;
  getList(res, oid);
});
async function getList(res, oid) {
  //query joins the uskills, users, and technologies tables together, searching for where the mentors oid matches the admins oid
  //so all of the mentors associated with that organization can be displayed, alongside their respective skills, and the related skill names.
  var sql =
    "SELECT * FROM USERS U INNER JOIN USKILLS S ON U.uid=S.uid INNER JOIN TECHNOLOGIES T ON S.sid=T.sid WHERE U.oid=" +
    oid +
    " AND utype=1";
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
}
module.exports = sendToMeRouter;
