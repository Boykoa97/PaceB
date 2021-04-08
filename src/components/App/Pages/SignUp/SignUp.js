import React, { Component } from "react";
import fire from "../../../firebase";
import axios from "axios";
import "./SignUp.css";

import NavBar from "../../../NavBar/NavBar";

import { Select, message } from "antd";

const { Option } = Select;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getInviteList = this.getInviteList.bind(this);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      eMessage: "",
      emailList: [],
      inviteList: [],
    };
    this.getInviteList();
  }
  componentWillMount() {
    this.mounted = true;
  }
  getInviteList() {
    //gets the list of invites
    axios
      .post("/getInvites", {
        //request type is sent as part of the database request
        reqtype: 1,
      })
      .then((res) => {
        var inviteList = res.data;
        var emailList = res.data.map((item) => item.email);
        console.log(inviteList);
        console.log(emailList);
        this.setState({ inviteList });
        this.setState({ emailList });
        //list of valid emails are saved, as well as the database response
      });
  }
  signup(e) {
    //if account creation needs to be tested without invites comment out the if else statment that checks the invite list
    //index of the email is checked based on the submitted email, if the email is not in the email list, and error is shown saying that the email is invaild, and has not been invited
    //if the email is in the list, the emails respective oid is retrived, and the signup process starts
    e.preventDefault();
    var inviteIndex = this.state.emailList.indexOf(this.state.email);
    if (inviteIndex > -1) {
      var oid = this.state.inviteList[inviteIndex].oid;
      //account is created in firebase using its respective commands
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
          message.success("Successfully Signed Up!");
          this.props.history.push("/mentor");
          var uid = u.user.uid;
          //request to send user information to the database
          axios.post("/addMentor", {
            //uid, first name, last name and organization id are sent as part of the database request
            fid: uid,
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            oid: oid,
          });
        })
        .catch((error) => {
          //logs an error if one occurs, and displays it to the user
          const eMessage = error.message;
          this.setState({ eMessage });
          console.log(error);
        });
    } else {
      //if the email is not valid, error is displayed
      this.setState({ eMessage: "Email address is not valid" });
    }
  }
  handleChange(e) {
    //saves text box contents into their proper variables
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="signup-page">
          <h1>Create an Account:</h1>
          <form onSubmit={this.signup}>
            <div class="form-group">
              {/* For User First Name */}
              <label for="fname">First Name</label>
              <input
                value={this.state.fname}
                onChange={this.handleChange}
                type="text"
                name="fname"
                class="form-control"
                id="fname"
                required
              />
            </div>
            <div class="form-group">
              {/* For User Last Name */}
              <label for="lname">Last Name</label>
              <input
                value={this.state.lname}
                onChange={this.handleChange}
                type="text"
                name="lname"
                class="form-control"
                id="lname"
                required
              />
            </div>
            <div class="form-group">
              {/* For User Email */}
              <label for="email">Email address</label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                class="form-control"
                id="email"
                required
              />
            </div>
            <div class="form-group">
              {/* For User Password */}
              <label for="password">Password</label>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="length of at least 7 characters"
                required
              />
            </div>
            <div class="form-group">
              {/* For User Description */}
              <label for="description">Description / Profile</label>
              <textarea rows="3" cols="40" 
                name="description" 
                class="form-control" 
                id="description" 
                placeholder="Provide a brief description of yourself here" 
                required
              />
            </div>
            <br />
            <button className="create-acc-btn" type="submit" value="submit">
              Create Account
            </button>
            <p>{this.state.eMessage}</p>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
