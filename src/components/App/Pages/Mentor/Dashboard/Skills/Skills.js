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
    this.getSkills = this.getSkills.bind(this);
    const user = fire.auth().currentUser;
    var fid = user.uid;
    this.state = {
      fid: fid,
      uslist: [],
      slist: [],
      savedList: [],
    };
    this.getSkills();
  }
  getSkills() {
    const user = fire.auth().currentUser;
    var fid = user.uid;
    // query in order to get the skill information of the mentor
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
  render() {
    //savedlist is edited and made into skill list, where each element is a p tag, with the name each respective skill
    let savedList = this.state.savedList;
    let skillList = savedList.map((item) => <p> &emsp; {item.skills}</p>);
    return (
      <div
        style={{ backgroundColor: "rgb(116, 111, 218)", padding: "40px 40px" }}
      >
        <h1 style={{ color: "antiquewhite" }}>Your Skills:</h1>
        {skillList}
      </div>
    );
  }
}

export default Skills;
