import React, { Component } from "react";
import Login from "../login.jsx";
import Logout from "../logout.jsx";
import fire from "../../../firebase";

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
          <div className="Welcome">
            <h1>MENTOR PAGE</h1>
          </div>
          <div className="mentor-login-form">
            {this.state.user ? <Logout></Logout> : <Login></Login>}
          </div>
        </div>
      </nav>
    );
  }
}

export default Mentor;
