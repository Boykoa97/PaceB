import React from "react";
import axios from "axios";
import { Select, message } from "antd";
import fire from "../../../../../firebase";
const { Option } = Select;

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
    this.getAllSkills = this.getAllSkills.bind(this);
    const user = fire.auth().currentUser;
    var fid = user.uid;
    this.state = {
      fid: fid,
      uslist: [],
      slist: [],
      savedList: [],
    };
    this.getAllSkills();
  }
  getAllSkills() {
    const user = fire.auth().currentUser;
    var fid = user.uid;
    //request to the database that gets the skills for the skill select menu
    axios.post("/getSkills").then((res) => {
      var slist = res.data;
      //returns it and saves in slist
      this.setState({ slist });
    });
    //second query in order to get the skill information of the mentor
    axios
      .post("/getUserSkills", {
        //searches using the fid as a filter
        fid: fid,
      })
      .then((res) => {
        //skill information is saved in savedList
        this.setState({ savedList: res.data });
      });
  }
  handleChangeSkills(value) {
    //saves the skill array into its proper varliable
    var uslist = value;
    this.setState({ uslist });
  }
  submit(e) {
    axios.post("/addMentorSkills", {
      //fid and user skills are sent as part of the database request
      fid: this.state.fid,
      uslist: this.state.uslist,
    });
    //prevent default in order to let the qeury run, then reload the page
    e.preventDefault();
    window.location.reload();
  }
  render() {
    //maps the skill list into option items, where each skill is enclosed by an option tag, and the required values and classname is also added
    let slist = this.state.slist;
    let optionitems = slist.map((item) => (
      <Option key={item.sid} value={item.sid} label={item.skills}>
        <div className="demo-option-label-item">{item.skills}</div>
      </Option>
    ));
    //savedlist is edited and made into skill list, where each element is a p tag, with the name each respective skill
    let savedList = this.state.savedList;
    let skillList = savedList.map((item) => <p> &emsp; {item.skills}</p>);
    let skills;
    if (this.state.savedList.length == 0) {
      //if the skill list exists, display it, if not, display skill selection
      skills = (
        <div>
          <h1 style={{ color: "antiquewhite" }}>Add Skills</h1>
          <form onSubmit={this.submit}>
            {/* Multiselect input dialogue for preferred Skills */}
            <div className="form-group">
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
            <button id="submit-btns" type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      skills = (
        <div>
          <h1 style={{ color: "antiquewhite" }}>Your Skills:</h1>
          {skillList}
        </div>
      );
    }
    //let skillList=;
    return (
      <div
        style={{ backgroundColor: "rgb(116, 111, 218)", padding: "40px 40px" }}
      >
        {skills}
      </div>
    );
  }
}

export default Skills;
