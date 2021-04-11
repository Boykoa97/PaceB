// this page contains code for user's profile component

import React from "react";
import fire from "../../../../../firebase";
import axios from "axios";
import qs from "qs";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    const user = fire.auth().currentUser;
    const email = user.email;
    const fid = user.uid;
    this.state = {
      email: email,
      fid: fid,
      admin: false,
      oname: "",
      fname: "",
      lname: "",
      calendar: "",
    };
    axios
      .post("/getProfile", {
        //fid is sent as part of the request
        fid: fid,
      })
      .then((res) => {
        //variables from the response are taken from the json object and are saved into local variables
        //checks if user is an admin, and sets the admin variable accordingly
        if (res.data[0].admin == 1) {
          this.setState({ admin: true });
        } else {
          this.setState({ admin: false });
        }
        this.setState({ oname: res.data[0].oname });
        this.setState({ fname: res.data[0].fname });
        this.setState({ lname: res.data[0].lname });
        this.setState({ calendar: res.data[0].calendar });
      });
  }

  render() {
    //if the user is an admin, it says they are, otherwise nothing is displayed
    let admin;
    if (this.state.admin) {
      admin = <p>You are an administrator.</p>;
    } else {
    }
    return (
      <div className="mentor-profile" style={{ textAlign: "left" }}>
        <h1 id="profile-title">User Profile</h1>
        <p>First name: {this.state.fname}</p>
        <p>Last name: {this.state.lname}</p>
        <p>Email: {this.state.email}</p>
        <p>User id: {this.state.fid}</p>
        <p>Organization: {this.state.oname}</p>
        <p>Calendar link: {this.state.calendar}</p>
        {admin}
      </div>
    );
  }
}

export default Profile;
