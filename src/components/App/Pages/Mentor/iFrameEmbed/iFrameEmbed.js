import React, { Component } from "react";
import fire from "../../../../firebase";

import Login from "../../login";
import MentorNav from "../MentorNav";

import "./iFrameEmbed.css";

import NavBar from "../../../../NavBar/NavBar";

class iFrameEmbed extends Component {
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

  /* Function to copy to clipboard onClick */
  copytoClipboard = () => {
      navigator.clipboard.writeText('<iframe src="http://localhost:3000/mentee-form" width="100%" height="450"></iframe>');
  }

  render() {
    return (
        <div>
          <NavBar />
            {/* If user isn't logged in, they are redirected to login page, else they are shown iframe embed page */}
            {this.state.user ? 
                <div>
                    <MentorNav />
                    <div className="iframe-embed">
                        <h1 id="ml-title">Mentee Sign Up Form</h1>
                        <div id="embed">
                            <button id="embed-btn" onClick={this.copytoClipboard}>Copy Form</button>
                            <textarea id="iframe-txt"
                                value = '<iframe src="http://localhost:3000/mentee-form" width="100%" height="520"></iframe>'
                            />
                        </div>
                        <div id="iframe">
                            <h2 id="iframe-note">Preview:</h2>
                            <iframe src="http://localhost:3000/mentee-form" width="100%" height="450"></iframe>
                        </div>
                    </div>
                </div>
                : <Login />
            }
        </div>
    );
  }
}

export default iFrameEmbed;