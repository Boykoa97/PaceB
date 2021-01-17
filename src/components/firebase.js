import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

//for testing, replace config variable with your own firebase project config
const config = {
  apiKey: "AIzaSyDhHAtJTnrPRK1nWelEdV5tmCuUWnkSVu4",
  authDomain: "paceb-e8e94.firebaseapp.com",
  databaseURL: "https://paceb-e8e94.firebaseio.com",
  projectId: "paceb-e8e94",
  storageBucket: "paceb-e8e94.appspot.com",
  messagingSenderId: "512536264006",
  appId: "1:512536264006:web:99744d6e1960f09665f947",
};

const fire = firebase.initializeApp(config);
export default fire;
