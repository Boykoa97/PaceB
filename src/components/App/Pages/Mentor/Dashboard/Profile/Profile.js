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
      uslist: [],
      admin: false,
      oname: "",
      fname: "",
      lname: "",
      uid: "",
    };
    axios
      .post("/getProfile", {
        //fid is sent as part of the request
        fid: fid,
      })
      .then((res) => {
        //variables from the response are taken from the json object and are saved into local variables
        this.setState({ uid: res.data[0].uid });
        console.log(this.state.uid);
        //checks if user is an admin, and sets the admin variable accordingly
        if (res.data[0].admin == 1) {
          this.setState({ admin: true });
        } else {
          this.setState({ admin: false });
        }
        this.setState({ oname: res.data[0].oname });
        this.setState({ fname: res.data[0].fname });
        this.setState({ lname: res.data[0].lname });
        //second embedded query in order to get the skill information of the mentor
        axios
          .post("/getUserSkills", {
            //searches using the uid as a filter, which is given from the previous query
            uid: this.state.uid,
          })
          .then((res) => {
            //skill information is saved in uslist
            console.log(res.data);
            this.setState({ uslist: res.data });
          });
      });
  }

  render() {
    //if the user is an admin, it says they are, otherwise nothing is displayed
    let admin;
    if (this.state.admin) {
      admin = <p>You are an administrator.</p>;
    } else {
    }
    //uslist is edited and made into skill list, where each element is a p tag, with the name each respective skill
    let uslist = this.state.uslist;
    let skillList = uslist.map((item) => <p> &emsp; {item.skills}</p>);
    //account information is displayed
    return (
      <div className="mentor-profile">
        <h1 id="profile-title">User Profile</h1>
        <p>First name: {this.state.fname}</p>
        <p>Last name: {this.state.lname}</p>
        <p>Email: {this.state.email}</p>
        <p>User id: {this.state.fid}</p>
        <p>Skills:</p>
        {skillList}
        <p>Organization: {this.state.oname}</p>
        {admin}
      </div>
    );
  }
}

export default Profile;
