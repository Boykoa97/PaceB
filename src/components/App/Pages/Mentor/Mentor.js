import React, { Component } from "react";
import fire from "../../../firebase";

import Login from "../login.jsx";
import MentorHome from "./Dashboard/MentorHome";
import AddSkills from "./AddSkills";

import "./Mentor.css";
import NavBar from "../../../NavBar/NavBar";
import { logDOM } from "@testing-library/dom";
import axios from "axios";

class Mentor extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    this.state = {
      user: null,
      savedList: [],
    };
    this.authListener = this.authListener.bind(this);
    this.skillcheck = this.skillcheck.bind(this);
  }

  componentDidMount() {
    //use this for ajax calls form the server
    //set the sate here

    console.log("App - Mounted");
    this.authListener();
  }
  skillcheck(fid) {
    // query in order check if the mentor has any skills
    axios
      .post("/getUserSkills", {
        //searches using the fid as a filter
        fid: fid,
      })
      .then((res) => {
        //skill information is saved in savedList
        this.setState({ savedList: res.data });
      });
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        //if a user is logged in, save their firebase user information into user, and run the skill list check, using the firebase id
        this.setState({ user });
        localStorage.setItem("user", user.uid);
        this.skillcheck(user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    // If user isn't logged in, they are redirected to login page, else they are redirected to mentor dashboard
    const isLoggedIn = this.state.user;
    //has skills is saved as the returning skill list length, if they have not skills it will display as zero
    const hasSkills = this.state.savedList.length;
    if (isLoggedIn) {
      if (hasSkills == 0) {
        // if user has skills in profile, go to dashboard, else go to AddSkills page
        return (
          <div className="mentor-page">
            <NavBar />
            <AddSkills />
          </div>
        );
      } else {
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
