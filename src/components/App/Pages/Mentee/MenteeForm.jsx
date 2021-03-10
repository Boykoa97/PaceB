import React, { useState, Component } from "react";
import axios from "axios";

import "./MenteeForm.css";

import { Select } from 'antd';

const { Option } = Select;
class MenteeForm extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      slist: [],
      uslist: [],
    };
    //request to the database that gets the skills for the skill select menu
    axios.post("/getSkills").then((res) => {
      var slist = res.data;
      //returns it and saves in slist
      this.setState({ slist });
    });
  };
  handleChangeSkills(value) {
    //saves the skill array into its proper varliable
    var uslist = value;
    this.setState({ uslist });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    /*axios.post("/findMatch", {
     //make an object to be handled from req.body on the backend.
      email: this.state.email,
      first_name: this.state.fname,
      last_name: this.state.lname,
      uslist: this.state.uslist,
    });*/
    axios.post("/addUser", {
      //uid, first name, last name and user skills are sent as part of the database request
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      uslist: this.state.uslist,
      utype: 0,
    });
  }
  handleChange(e) {
    //saves text box contents into their proper variables
    this.setState({ [e.target.name]: e.target.value });
  }
  render(){
    //maps the skill list into option items, where each skill is enclosed by an option tag, and the required values and classname is also added
    let slist = this.state.slist;
    let optionitems = slist.map((item) => (
      <Option value={item.sid} label={item.skills}>
        <div className="demo-option-label-item">{item.skills}</div>
      </Option>
    ));
    return (
      <div>
       {
        /* Mentee Sign Up Form: */
        <form onSubmit={this.handleSubmit} className="menteeform">
          <h1>Mentee Sign Up Form</h1>
          <label>First Name: </label> {/* For User First Name */}
          <input
            id="input-box"
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>Last Name: </label>  {/* For User Last Name */}
          <input
            id="input-box"
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>Email Address: </label>  {/* For User Email */}
          <input
            id="input-box"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <label>Preferred Skills:</label>  {/* Multiselect input dialogue for preferred Skills */}
            <Select
              mode="multiple"
              style={{ width: '60%', marginLeft: '2rem'}}
              placeholder="select 5 skills"
              //defaultValue={['machine learning']}
              onChange={this.handleChangeSkills}
              optionLabelProp="label"
            >
              {optionitems}
            </Select>
          <br/>
          <button id="mentee-btn">submit</button>
        </form>
        }
      </div>
    );
  }
}
export default MenteeForm;
