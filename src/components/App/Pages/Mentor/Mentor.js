import React, { Component } from "react";
import fire from "../../../firebase";

import Login from "../login.jsx";
import MentorHome from "./Dashboard/MentorHome";
import AddSkills from "./AddSkills";

import "./Mentor.css";
import NavBar from "../../../NavBar/NavBar";
import { logDOM } from "@testing-library/dom";

class Mentor extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    //use this for ajax calls form the server
    //set the sate here

    console.log("App - Mounted");
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    // If user isn't logged in, they are redirected to login page, else they are redirected to mentor dashboard
    const isLoggedIn = this.state.user;
    // add code to check if user has skills added to profile
    // const hasSkills = ;
    if (isLoggedIn) {
      {/*if (hasSkills) {  // if user has skills in profile, go to dashboard, else go to AddSkills page
        return (
          <div className="mentor-page">
            <NavBar />
            <AddSkills />
        </div>
        );
      } else {*/
        return (
          <div className="mentor-page">
            <NavBar />
            <MentorHome />
          </div>
        );  
      }
    } else {
      return (
        <div>
          <NavBar />
          <Login />
        </div>
      );
    }
  }
}

export default Mentor;
