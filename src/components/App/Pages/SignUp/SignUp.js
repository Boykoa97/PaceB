import React, { Component } from "react";
import fire from "../../../firebase";
import axios from "axios";
import "./SignUp.css";

import NavBar from "../../../NavBar/NavBar";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.skillChange1 = this.skillChange1.bind(this);
    this.skillChange2 = this.skillChange2.bind(this);
    this.skillChange3 = this.skillChange3.bind(this);
    this.skillChange4 = this.skillChange4.bind(this);
    this.state = {
      email: "",
      password: "",
      eMessage: "",
      skill1: "",
      skill2: "",
      skill3: "",
      skill4: "",
      slist: [],
    };
    axios.post("/getskills").then((res) => {
      var slist = res.data;
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
        this.props.history.push("/");
        var uid = u.user.uid;
        axios.post("/adduser", {
          //uid and the skills are sent as part of the database request
          fid: uid,
          skill1: this.state.skill1,
          skill2: this.state.skill2,
          skill3: this.state.skill3,
          skill4: this.state.skill4,
        });
      })
      .catch((error) => {
        const eMessage = error.message;
        this.setState({ eMessage });
        console.log(error);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //skill change methods are implemented in order to properly implement all four drop down menus
  skillChange1(event) {
    this.setState({ skill1: event.target.value });
  }
  skillChange2(event) {
    this.setState({ skill2: event.target.value });
  }
  skillChange3(event) {
    this.setState({ skill3: event.target.value });
  }
  skillChange4(event) {
    this.setState({ skill4: event.target.value });
  }
  render() {
    let slist = this.state.slist;
    let optionitems = slist.map((item) => (
      <option value={item.skills}>{item.skills}</option>
    ));
    return (
      <div>
        <NavBar />
      <div className="signup-page">
        <h1>Create an Account:</h1>
        <form onSubmit={this.signup}>
          <div class="form-group">
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
          <div className="form-group>">
            <label>Skill #1:</label>
            <select
              className="skills-list"
              value={this.state.skill1}
              onChange={this.skillChange1}
            >
              {optionitems}
            </select>
            <label>Skill #2:</label>
            <select
              className="skills-list"
              value={this.state.skill2}
              onChange={this.skillChange2}
            >
              {optionitems}
            </select>
            <br />
            <label>Skill #3:</label>
            <select
              className="skills-list"
              value={this.state.skill3}
              onChange={this.skillChange3}
            >
              {optionitems}
            </select>
            <label>Skill #4:</label>
            <select
              className="skills-list"
              value={this.state.skill4}
              onChange={this.skillChange4}
            >
              {optionitems}
            </select>
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
