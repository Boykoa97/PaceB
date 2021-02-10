import React, { Component } from "react";

import MentorNav from "../MentorNav";
import "./MenteeList.css";

class MenteeList extends Component {

  render() {
    return (
      <div>
          <MentorNav />
          <h1 id="ml-title">Mentee List</h1>
      </div>
    );
  }
}

export default MenteeList;