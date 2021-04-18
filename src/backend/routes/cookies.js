const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
var cookieSession = require("cookie-session");
var Keygrip = require("keygrip");
const cookiesRouter = express.Router();

cookiesRouter.use(express.json());

///************************************************/
// This file is something that was never finished so it shouldn't be used anywhere. However it is still here incase of an uncaught dependency
//************************************************/

cookiesRouter.use(
  cookieSession({
    name: "session",
    keys: new Keygrip([process.env.COOKIE_KEY1], "SHA384", "base64"),
    maxAge: 24 * 60 * 60 * 1000, //24hrs
    httpOnly: true,
  })
);

cookiesRouter.post("/mentor", (req, res, next) => {
  console.log("Cookie made");
  req.session.text = "I made a cookie";

  res.end(req.session.text + " it worked");
});

module.exports = cookiesRouter;
