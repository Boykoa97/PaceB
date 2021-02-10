import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

//for testing, replace config variable with your own firebase project config
const config = {
  apiKey: "AIzaSyCUCtJ-qKVBWrBqIiX5oG7FUYWmm8i774A",
  authDomain: "capstone-pace-b.firebaseapp.com",
  databaseURL: "https://capstone-pace-b.firebaseio.com",
  projectId: "capstone-pace-b",
  storageBucket: "capstone-pace-b.appspot.com",
  messagingSenderId: "737272886261",
  appId: "1:737272886261:web:a553f1dba1e45117d166bc",
  measurementId: "G-0JG82T8DQE",
};

const fire = firebase.initializeApp(config);
export default fire;
