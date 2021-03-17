import React, { Component } from "react";
import axios from "axios";
import "./MenteeList.css";

import { List, Avatar } from "antd";
import { text } from "body-parser";
const matchedMentees = [
  {
    title: "Matched Mentee 1",
    email: "aaa@a.ca",
    skills: "iOS Development",
  },
  {
    title: "Matched Mentee 2",
    email: "bbb@b.ca",
    skills: "User Interface / User Experience Design, Android Development",
  },
  {
    title: "Matched Mentee 3",
    email: "ccc@c.ca",
    skills: "Back End Development, Front End Development",
  },
];

class MenteeList extends Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleChangeSkills = this.handleChangeSkills.bind(this);
    this.state = {
      mulist: [],
      malist: [],
      text: "",
    };
    //request to the database that gets the skills for the skill select menu
    axios.post("/getUnmatchedMentees").then((res) => {
      var data = res.data;
      //returns it and saves in slist
      var i;
      var j;
      var x;
      var uids = [];
      var mulist = [];
      console.log(data);

      for (i = 0; i < data.length; i++) {
        uids[i] = data[i].uid;
      }
      uids = uids.filter((x, i, a) => a.indexOf(x) == i);
      var skills = [];
      for (i = 0; i < uids.length; i++) {
        var uid = uids[i];
        var k = 0;
        for (j = 0; j < data.length; j++) {
          if (data[j].uid == uid) {
            if (k == 0) {
              skills[i] = data[j].skills + ", ";
            } else {
              skills[i] += data[j].skills + ", ";
            }
            k++;
          }
        }
        skills[i] = skills[i].substring(0, skills[i].length - 2);
      }
      console.log(skills);
      for (i = 0, j = 0; i < data.length; i++) {
        x = uids.indexOf(data[i].uid);
        if (x > -1) {
          mulist[j] = {
            title: data[i].fname + " " + data[i].lname,
            email: data[i].email,
            uid: data[i].uid,
            menteeid: data[i].menteeid,
            mentorid: data[i].mentorid,
            mid: data[i].mid,
            skills: skills[j],
          };
          j++;
          delete uids[x];
        } else {
        }
      }
      //console.log(unmatchedMentees);
      this.setState({ mulist });
    });
  }
  render() {
    let unmatchedMentees = this.state.mulist;
    return (
      <div>
        <h1 id="ml-title">Mentee List</h1>
        <div style={{ width: "100%" }}>
          <div className="unmatched-mentees">
            <h2
              style={{
                textAlign: "center",
                color: "antiquewhite",
                paddingTop: "20px",
              }}
            >
              Unmatched Mentees
            </h2>
            <List
              style={{ margin: "10px" }}
              itemLayout="horizontal"
              dataSource={unmatchedMentees}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="">{item.title}</a>}
                    description={item.skills}
                  />
                  <button
                    className="accept-mentee"
                    style={{ marginRight: "10px" }}
                  >
                    accept
                  </button>
                  <button className="decline-mentee">decline</button>
                </List.Item>
              )}
            />
          </div>
          <div className="matched-mentees">
            <h2
              style={{
                textAlign: "center",
                color: "antiquewhite",
                paddingTop: "20px",
              }}
            >
              Matched Mentees
            </h2>
            <List
              style={{ margin: "10px" }}
              itemLayout="horizontal"
              dataSource={matchedMentees}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="">{item.title}</a>}
                    description={item.skills}
                  />
                  <button className="email-mentee">copy email</button>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MenteeList;
