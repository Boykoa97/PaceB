// this page contains code for adding skills to the user profile

import React, { Component } from "react";
import history from "../../History";
import fire from "../../../firebase";
import axios from "axios";
import "./Dashboard/MentorHome.css";
import { Select } from "antd";

const { Option } = Select;

class AddSkills extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      uslist: [],
      slist: [],
      eMessage: "",
      url: "",
    };
    //request to the database that gets the skills for the skill select menu
    axios.post("/getSkills").then((res) => {
      var slist = res.data;
      //returns it and saves in slist
      this.setState({ slist });
    });
  }
  handleChangeSkills(value) {
    //saves the skill array into its proper varliable
    var uslist = value;
    this.setState({ uslist });
  }
  submit(e) {
    //if statement to not allow a mentor to submit the form without selecting any skills or having an empty link, error message shows up if no skills are selected
    if (this.state.uslist.length > 0 && this.state.url.length > 0) {
      //preventdefualt is ran to allow the query time to run
      e.preventDefault();
      const user = fire.auth().currentUser;
      var fid = user.uid;
      //database reuqest sent
      axios.post("/addMentorSkills", {
        //fid and user skills are sent as part of the database request
        fid: fid,
        uslist: this.state.uslist,
        url: this.state.url,
      });
      //window is reloaded and directed to mentor after the query is finished
      window.location.reload();
      history.push("/mentor");
    } else if (this.state.uslist.length == 0) {
      //if the skill list is empty, display the matching error
      this.setState({ eMessage: "One or more skills must be selected" });
      e.preventDefault();
    } else if (this.state.url.length == 0) {
      //if the calendar url box is empty, display the matching error
      this.setState({ eMessage: "A calendar url must be entered" });
      e.preventDefault();
    }
  }
  handleChange(e) {
    //saves text box contents into their proper variables
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    //maps the skill list into option items, where each skill is enclosed by an option tag, and the required values and classname is also added
    let slist = this.state.slist;
    let optionitems = slist.map((item) => (
      <Option key={item.sid} value={item.sid} label={item.skills}>
        <div className="demo-option-label-item">{item.skills}</div>
      </Option>
    ));
    return (
      <div
        style={{
          backgroundColor: "rgb(116, 111, 218)",
          padding: "30px",
          width: "30rem",
          margin: "auto",
          marginTop: "5rem",
          borderStyle: "groove",
        }}
      >
        <form onSubmit={this.submit}>
          <h1>Add Skills:</h1>
          {/* Multiselect input dialogue for preferred Skills */}
          <div class="form-group">
            <label>add your preferred skills to your user profile:</label>
            <Select
              mode="multiple"
              style={{ width: "60%" }}
              placeholder="select 5 skills"
              //defaultValue={['machine learning']}
              optionLabelProp="label"
              onChange={this.handleChangeSkills}
            >
              {optionitems}
            </Select>
          </div>
          <br />
          <h1>Add Calendar:</h1>
          <div class="form-group">
            <label>add your calendar link to your user profile:</label>
            <input
              type="url"
              class="form-control"
              id="url"
              name="url"
              onChange={this.handleChange}
              value={this.state.url}
              required
            />
          </div>
          <br />
          <button id="submit-btns" type="submit" value="submit">
            Submit
          </button>
          <p>{this.state.eMessage}</p>
        </form>
      </div>
    );
  }
}

export default AddSkills;
