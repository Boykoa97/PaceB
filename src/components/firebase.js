import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

//for testing, replace config variable with your own firebase project config
const config = {
  apiKey: "AIzaSyCVyt_IjZlixPv_oeLKvlYqVSe_R703RFA",
  authDomain: "fir-tutorials-fac9b.firebaseapp.com",
  databaseURL: "https://fir-tutorials-fac9b.firebaseio.com",
  projectId: "fir-tutorials-fac9b",
  storageBucket: "fir-tutorials-fac9b.appspot.com",
  messagingSenderId: "436543944053",
  appId: "1:436543944053:web:75caad3a6456287c118f3c",
  measurementId: "G-00LHN61PW2"
};

const fire = firebase.initializeApp(config);
export default fire;
