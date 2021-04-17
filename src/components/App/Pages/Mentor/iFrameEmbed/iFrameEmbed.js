// this page contains code for the iframe page

import React, { Component } from "react";
import fire from "../../../../firebase";
import axios from "axios";

import Login from "../../login";

import "./iFrameEmbed.css";

import NavBar from "../../../../NavBar/NavBar";

class iFrameEmbed extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    this.state = {
      user: null,
      oid: null,
      iframe_url: "http://localhost:3000/mentee-signup",
      iframe_copy_text: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    //use this for ajax calls form the server
    //set the sate here

    console.log("App - Mounted");
    this.authListener();
  }

  setOrgID(fid) {
    console.log(fid + " is the user id \n\n\n\n");
    axios
      .post("/iframe-embed", {
        fid: fid,
      })
      .then((res) => {
        console.log(res.data[0].oid);
        var oid = res.data[0].oid;
        console.log("oid is " + oid);
        this.setState({ oid });
      });
  }

  async createIframeURL(fid) {
    this.setOrgID(fid);
    // var iframe_url = this.state.iframe_url + "?orgID=" + this.state.oid;
    // console.log(iframe_url);
    // var iframe_copy_text =
    //   '<iframe src="' + iframe_url + '" width="100%" height="450"></iframe>';
    //this.setState({ iframe_url });
    //this.setState({ iframe_copy_text });
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
        console.log("User id:" + user.uid + "\n\n\n");
        this.setOrgID(user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  /* Function to copy to clipboard onClick */
  copytoClipboard = () => {
    navigator.clipboard.writeText(
      '<iframe src="http://localhost:3000/mentee-signup" width="100%" height="450"></iframe>'
    );
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* If user isn't logged in, they are redirected to login page, else they are shown iframe embed page */}
        {this.state.user ? (
          <div>
            <div className="iframe-embed">
              <h1 id="ml-title">Mentee Sign Up Form</h1>
              <div id="embed">
                <button id="embed-btn" onClick={this.copytoClipboard}>
                  Copy Form
                </button>
                <textarea
                  id="iframe-txt"
                  value={
                    '<iframe src="http://localhost:3000/mentee-signup"' +
                    'width="100%" height="520"></iframe>'
                  }
                />
              </div>
              <div id="iframe" height="400">
                <h2 id="iframe-note">Preview:</h2>
                <iframe
                  src="http://localhost:3000/mentee-signup"
                  width="100%"
                  height="530"
                ></iframe>
              </div>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default iFrameEmbed;
