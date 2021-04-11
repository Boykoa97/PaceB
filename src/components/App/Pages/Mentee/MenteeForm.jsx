// this page contains code for the mentee signup form

import React, { useState, Component } from "react";
import axios from "axios";

import "./MenteeForm.css";

import { Select, message } from 'antd';

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
    axios.post("/addMentee", {
      //uid, first name, last name and user skills are sent as part of the database request
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      uslist: this.state.uslist,
    });
    message.success('Form has been Submitted');
    //window.location.reload();
  };
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
      <div className="mentee-signup-page">   {/* Mentee Sign Up Form: */}
        <h1 style={{textAlign: "center"}}>Mentee Sign Up</h1>
        <form onSubmit={this.handleSubmit} className="menteeform">
          <div>
            <label>First Name: </label> {/* For User First Name */}
            <input
              class="form-control"
              id="input-box"
              type="text"
              name="fname"
              value={this.state.fname}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Last Name: </label>  {/* For User Last Name */}
            <input
              class="form-control"
              id="input-box"
              type="text"
              name="lname"
              value={this.state.lname}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Email Address: </label>  {/* For User Email */}
            <input
              class="form-control"
              id="input-box"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <br/>
          <div>
            <label>Preferred Skills:</label>  
            {/* Multiselect input dialogue for preferred Skills */}
            <Select
              mode="multiple"
              style={{ width: '66%', marginLeft: '2rem'}}
              placeholder="select 5 skills"
              //defaultValue={['machine learning']}
              onChange={this.handleChangeSkills}
              optionLabelProp="label"
            >
              {optionitems}
            </Select>
          </div>
          <br/>
          <button id="mentee-btn">submit</button>
        </form>
      </div>
    );
  }
}
export default MenteeForm;
