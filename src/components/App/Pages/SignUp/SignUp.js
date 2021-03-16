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
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      eMessage: "",
      slist: [],
      uslist: [],
    };
    //request to the database that gets the skills for the skill select menu
    axios.post("/getSkills").then((res) => {
      var slist = res.data;
      //returns it and saves in slist
      this.setState({ slist });
    });
  }
  componentWillMount() {
    this.mounted = true;
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        message.success('Successfully Signed Up!');
        this.props.history.push("/mentor");
        var uid = u.user.uid;
        //request to send user information to the database
        axios.post("/addUser", {
          //uid, first name, last name and user skills are sent as part of the database request
          fid: uid,
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email,
          uslist: this.state.uslist,
          utype: 1,
        });
      })
      .catch((error) => {
        //logs an error if one occurs, and displays it to the user
        const eMessage = error.message;
        this.setState({ eMessage });
        console.log(error);
      });
  }
  handleChange(e) {
    //saves text box contents into their proper variables
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChangeSkills(value) {
    //saves the skill array into its proper varliable
    var uslist = value;
    this.setState({ uslist });
  }
  render() {
    //maps the skill list into option items, where each skill is enclosed by an option tag, and the required values and classname is also added
    let slist = this.state.slist;
    let optionitems = slist.map((item) => (
      <Option value={item.sid} label={item.skills}>
        <div className="demo-option-label-item">{item.skills}</div>
      </Option>
    ));
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
                required
              />
            </div>
            {/* <div>
              {" "}
              Multiselect input dialogue for preferred Skills 
              <label>Preferred Skills:</label>
              <Select
                mode="multiple"
                style={{ width: "60%", marginLeft: "2rem" }}
                placeholder="select 5 skills"
                //defaultValue={['machine learning']}
                onChange={this.handleChangeSkills}
                optionLabelProp="label"
              >
                {optionitems}
              </Select>
            </div> */}
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
