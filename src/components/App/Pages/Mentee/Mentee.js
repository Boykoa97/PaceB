import React from "react";
import fire from "../../../firebase";

import "./Mentee.css";
import MenteeForm from "./MenteeForm";

class Mentee extends React.Component {
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
      <nav className="mentee-page">
        <div>
          <div className="Welcome">
            <h1 id="mp-title">MENTEE PAGE</h1>
          </div>
          <div className="mentee-matching-form">
            <MenteeForm></MenteeForm>
          </div>
        </div>
      </nav>
    );
  }
}

export default Mentee;
