import React, { Component } from "react";
import fire from "../../../firebase";
import Login from "../login";

import "./OrgMentors.css";
import NavBar from "../../../NavBar/NavBar";
import axios from "axios";
import { List, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
class OrgMentors extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    this.state = {
      user: null,
      oid: 0,
      fid: "",
      mentorList: [],
      inviteList: [],
      email: "",
      eMessage: "",
    };
    this.getOid = this.getOid.bind(this);
    this.getMentors = this.getMentors.bind(this);
    this.authListener = this.authListener.bind(this);
    this.invite = this.invite.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getInviteList = this.getInviteList.bind(this);
  }

  componentDidMount() {
    //use this for ajax calls form the server
    //set the sate here

    console.log("App - Mounted");
    this.authListener();
  }
  async getOid(fid) {
    //promise in place to make sure the oid is retrived before getMentors is ran
    return new Promise((resolve, reject) => {
      // query to get the users organization id
      axios
        .post("/getProfile", {
          //searches using the fid as a filter
          fid: fid,
        })
        .then((res) => {
          //organization id is saved in oid
          var oid = res.data[0].oid;
          this.setState({ oid });
          resolve();
        });
    });
  }
  async getMentors(fid) {
    //oid is retrieved first
    await this.getOid(fid);
    //invite list is also retrived for later
    this.getInviteList(this.state.oid);

    axios
      .post("/getOrganizationMentors", {
        //searches using the oid as a filter
        oid: this.state.oid,
      })
      .then((res) => {
        var data = res.data;
        var i;
        var j;
        var x;
        var uids = [];
        var list = [];
        console.log(data);
        //for loop to get all of the uids, filter is then ran on the array to get all of the unique users
        for (i = 0; i < data.length; i++) {
          uids[i] = data[i].uid;
        }
        uids = uids.filter((x, i, a) => a.indexOf(x) == i);
        //the database request is looped through, getting all of the skills for each individal user, and putting each into a string element in the skills array
        //this is done by putting all skills together that share the same uid, and creating one long string of skills for that certian uid.
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
          //substring is ran to remove the last comma from the end of the string
          skills[i] = skills[i].substring(0, skills[i].length - 2);
        }
        console.log(skills);
        //indivudal users are added to list, this is done by checking if the current users id exists in the the uids array
        //if it does that user is added to list, and the user id is deleted, if the user id does not exist in the uid list, then it has already been added to list, and is therefore not added
        for (i = 0, j = 0; i < data.length; i++) {
          x = uids.indexOf(data[i].uid);
          if (x > -1) {
            list[j] = {
              title: data[i].fname + " " + data[i].lname,
              email: data[i].email,
              uid: data[i].uid,
              skills: skills[j],
            };
            j++;
            delete uids[x];
          } else {
          }
        }
        //list is then assigned using this.setstate, to be displayed in mentorList.
        this.setState({ mentorList: list });
      });
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        const fid = user.uid;
        this.setState({ fid });
        localStorage.setItem("user", user.uid);
        //after page load and confirmation that the user is logged in, the mentor list is retrived
        this.getMentors(this.state.fid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  handleChange(e) {
    //saves text box contents into their proper variables
    this.setState({ [e.target.name]: e.target.value });
  }
  invite(e) {
    //checks if the invite already exists in the returned list in the database, if it does an error shows up, if not the invite is added
    e.preventDefault();
    if (this.state.inviteList.indexOf(this.state.email) > -1) {
      this.setState({
        eMessage: "An invite to this email has already been sent",
      });
    } else {
      axios.post("/inviteMentor", {
        //email and oid are sent as part of the database request
        email: this.state.email,
        oid: this.state.oid,
      });
      this.setState({ eMessage: "Invite sent" });
    }
  }
  getInviteList(oid) {
    //gets the list of invites based on the organiziation oid
    axios
      .post("/getInvites", {
        //request type and oid are sent as part of the database request
        reqtype: 0,
        oid: oid,
      })
      .then((res) => {
        var inviteList = res.data.map((item) => item.email);
        console.log(inviteList);
        this.setState({ inviteList });
      });
  }
  render() {
    return (
      <div>
        <NavBar />
        {/* If user isn't logged in, they are redirected to login page, else they are shown the mentor list and mentor invite page */}
        {this.state.user ? (
          <div>
            <h1 id="mentor-list-title">Mentor List</h1>
            <Row style={{ height: "100%" }}>
              <Col flex={2}>
                <div className="add-mentors">
                  <h2 style={{ textAlign: "center", color: "antiquewhite" }}>
                    Invite A Mentor
                  </h2>
                  <form class="form-group" onSubmit={this.invite}>
                    <label>mentor email:</label>
                    <input
                      value={this.state.email}
                      onChange={this.handleChange}
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      required
                    />
                    <br />
                    <button id="submit-btns" type="submit" value="submit">
                      Submit
                    </button>
                    <p>{this.state.eMessage}</p>
                  </form>
                </div>
              </Col>
              <Col flex={3}>
                <div className="org-mentors">
                  <h2
                    style={{
                      textAlign: "center",
                      color: "antiquewhite",
                      paddingTop: "20px",
                    }}
                  >
                    Mentors In Your Organization
                  </h2>
                  <List
                    style={{ margin: "10px" }}
                    itemLayout="horizontal"
                    dataSource={this.state.mentorList}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              style={{
                                backgroundColor: "antiquewhite",
                                color: "#9196e4",
                              }}
                              icon={<UserOutlined />}
                            />
                          }
                          title={
                            <a href="" style={{ color: "antiquewhite" }}>
                              {item.title}
                            </a>
                          }
                          description={item.skills}
                        />
                        <button className="delete-mentor">delete</button>
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default OrgMentors;
