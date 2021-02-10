const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const app = express();

app.use(bodyParser.json());

const mysqlconnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});
mysqlconnection.connect((err) => {
  if (!err) {
    console.log("Connection sucessful");
  } else {
    console.log("Connection failed");
  }
});

module.exports = mysqlconnection;
