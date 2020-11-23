import React, { Component } from "react";
import ReactDOM from "react-dom";
const { default: createacc } = require("./createacc");

const signupform = ReactDOM.findDOMNode(createacc); //document.querySelector("#signup-form");
signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupform["email"].value;
  const pw = signupform["password"].value;
  console.log(email, pw);
});
