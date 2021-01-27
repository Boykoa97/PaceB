import React, { Component } from "react";
import fire from "../../../firebase";

import Login from "../login.jsx";
import MentorHome from "./Dashboard/MentorHome";

import "./Mentor.css";

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
    return (
      <nav className="mentor-page">
        <div>
          <div className="mentor-login-form">
            {/* If user isn't logged in, they are redirected to login page, else they are redirected to mentor dashboard */}
            {this.state.user ? <MentorHome /> : <Login />}
          </div>
        </div>
      </nav>
    );
  }
}

export default Mentor;
