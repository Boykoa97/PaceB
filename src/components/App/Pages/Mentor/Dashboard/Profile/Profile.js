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
    const uid = user.uid;
    this.state = {
      email: email,
      uid: uid,
      skill1: "",
      skill2: "",
      skill3: "",
      skill4: "",
      admin: false,
      oname: "",
    };
    axios
      .post("/getprofile", {
        //uid is sent as part of the request
        fid: uid,
      })
      .then((res) => {
        //variables from the response are taken from the json object and are saved into local variables
        this.setState({ skill1: res.data[0].skill1 });
        this.setState({ skill2: res.data[0].skill2 });
        this.setState({ skill3: res.data[0].skill3 });
        this.setState({ skill4: res.data[0].skill4 });
        //checks if user is an admin, and sets the admin variable accordingly
        if (res.data[0].admin == 1) {
          this.setState({ admin: true });
        } else {
          this.setState({ admin: false });
        }
        this.setState({ oname: res.data[0].oname });
      });
  }

  render() {
    //if the user is an admin, it says they are, otherwise nothing is displayed
    let admin;
    console.log(this.state.admin);
    if (this.state.admin) {
      admin = <p>You are an administrator.</p>;
    } else {
    }
    //account information is displayed
    return (
      <div className="mentor-profile">
        <h1 id="profile-title">User Profile</h1>
        <p>Account information is:</p>
        <p>Email: {this.state.email}</p>
        <p>User id: {this.state.uid}</p>
        <p>Skill 1: {this.state.skill1}</p>
        <p>Skill 2: {this.state.skill2}</p>
        <p>Skill 3: {this.state.skill3}</p>
        <p>Skill 4: {this.state.skill4}</p>
        <p>Organization: {this.state.oname}</p>
        {admin}
      </div>
    );
  }
}

export default Profile;
