import React, { Component } from "react";
import fire from "../../../firebase";
import axios from "axios";
import "./SignUp.css";

import NavBar from "../../../NavBar/NavBar";

import { Select } from 'antd';

const { Option } = Select;

function handleChangeSkills(value) {
  console.log(`selected ${value}`);
}

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
            <div class="form-group">  {/* For User First Name */}
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
            <div class="form-group">  {/* For User Last Name */}
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
            <div class="form-group">  {/* For User Email */}
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
            <div class="form-group">  {/* For User Password */}
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
           {/* <div className="form-group>">
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
            </div> */}
            <div> {/* Multiselect input dialogue for preferred Skills */}
              <label>Preferred Skills:</label>
              <Select
                mode="multiple"
                style={{ width: '60%', marginLeft: '2rem'}}
                placeholder="select 5 skills"
                //defaultValue={['machine learning']}
                onChange={handleChangeSkills}
                optionLabelProp="label"
              >
                <Option value="machine learning" label="Machine Learning">
                  <div className="demo-option-label-item">
                    Machine Learning
                  </div>
                </Option>
                <Option value="front end web dev" label="Front End">
                  <div className="demo-option-label-item">
                    Front End Web Development
                  </div>
                </Option>
                <Option value="back end web dev" label="Back End">
                  <div className="demo-option-label-item">
                    Back End Web Development
                  </div>
                </Option>
                <Option value="ui ux" label="UI/UX Design">
                  <div className="demo-option-label-item">
                    User Interface / User Experience Design
                  </div>
                </Option>
                <Option value="android" label="Android">
                  <div className="demo-option-label-item">
                    Android Development
                  </div>
                </Option>
                <Option value="ios" label="iOS">
                  <div className="demo-option-label-item">
                    iOS Development
                  </div>
                </Option>
                <Option value="data analysis" label="Data Analysis">
                  <div className="demo-option-label-item">
                    Data Analysis
                  </div>
                </Option>
              </Select>
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
