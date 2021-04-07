import React, { Component } from "react";
import axios from "axios";
import "./MenteeList.css";

import { List, Avatar } from "antd";
import { text } from "body-parser";
import { auth } from "firebase-admin";
import fire from "../../../../firebase";
import { UserOutlined } from '@ant-design/icons';
class MenteeList extends Component {
   runMatching = (e) => {
    e.preventDefault();
    const user = fire.auth().currentUser;
    const fid = user.uid;
    axios.post("/findMatch", {
      fid: fid,
    });
  };
  constructor(props) {
    super(props);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.state = {
      mulist: [],
      malist: [],
      text: "",
      currentUser: [],
    };
    this.mulist();
    this.malist();
  }
  mulist() {
    const user = fire.auth().currentUser;
    axios
      .post("/getUnmatchedMentees", {
        //sends the respective mentor uid as part of the request
        fid: user.uid,
      })
      .then((res) => {
        var data = res.data;
        var i;
        var j;
        var x;
        var uids = [];
        var mulist = [];
        console.log(data);
        //for loop to get all of the uids, filter is then ran on the array to get all of the unique mentees
        for (i = 0; i < data.length; i++) {
          uids[i] = data[i].uid;
        }
        uids = uids.filter((x, i, a) => a.indexOf(x) == i);
        //the database request is looped through, getting all of the skills for each individal mentee, and putting each into a string element in the skills array
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
        //indivudal mentees are added to mulist, this is done by checking if the current users id exists in the the uids array
        //if it does that user is added to mulist, and the user id is deleted, if the user id does not exist in the uid list, then it has already been added to mulist, and is therefore not added
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
        //mulist is then assigned using this.setstate, to be displayed in the list.
        this.setState({ mulist });
      });
  }
  malist() {
    //logic for this function is the exact same as the previous, just malist is assigned
    const user = fire.auth().currentUser;
    axios
      .post("/getMatchedMentees", {
        fid: user.uid,
      })
      .then((res) => {
        var data = res.data;
        var i;
        var j;
        var x;
        var uids = [];
        var malist = [];
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
            malist[j] = {
              title: data[i].fname + " " + data[i].lname,
              email: data[i].email,
              uid: data[i].uid,
              menteeid: data[i].menteeid, //need for accepting, this or uid
              mentorid: data[i].mentorid,
              mid: data[i].mid, //need for rejecting
              skills: skills[j],
            };
            j++;
            delete uids[x];
          } else {
          }
        }
        //console.log(unmatchedMentees);
        this.setState({ malist });
      });
  }
  handleDecline(mid) {
    //function to handle the mentee list change, in this case decline.
    //for this request the type of list edit is sent, along with the needed matchid/mid. when the request is done, the unaccpeted mentee list is updated
    axios
      .post("updateList", {
        type: 0,
        mid: mid,
      })
      .then(() => {
        this.mulist();
      });
  }
  handleAccept(menteeid) {
    //fuction needed to handle the mentee list change, in this case accept.
    //for the request the type of list edit is sent, along with the needed menteeid, as well as the firebase id/fid.
    //when the request is done, both the accepted and unaccepted mentee lists are updated
    var user = fire.auth().currentUser;
    axios
      .post("updateList", {
        type: 1,
        menteeid: menteeid,
        fid: user.uid,
      })
      .then(() => {
        this.malist();
        this.mulist();
      });
  }
  render() {
    //sets the mulist and malists as the proper html elements
    let unmatchedMentees = this.state.mulist;
    let matchedMentees = this.state.malist;
    return (
      <div>
        <h1 id="ml-title">Mentee List</h1>
        <div>
          <button onClick={this.runMatching} className="match-btn">check for matches</button>
        </div>
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
                     avatar={<Avatar style={{backgroundColor: 'antiquewhite', color: '#9196e4'}} icon={<UserOutlined />} />}
                    title={<a href="" style={{color: 'antiquewhite'}}>{item.title}</a>}

                    description={item.skills}
                  />
                  <button
                    //when the button is clicked, handle accept is called, with the menteeid variable needed
                    onClick={() => this.handleAccept(item.menteeid)}
                    className="accept-mentee"
                    style={{ marginRight: "10px" }}
                    type="submit"
                    value="submit"
                  >
                    accept
                  </button>
                  <button
                    //when the button is clicked, handle decline is called. with the mid variable needed
                    onClick={() => this.handleDecline(item.mid)}
                    className="decline-mentee"
                    type="submit"
                    value="submit"
                  >
                    decline
                  </button>
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
                    avatar={<Avatar style={{backgroundColor: 'white', color: '#9196e4'}} icon={<UserOutlined />} />}
                    title={<a href="" style={{color: 'white'}}>{item.title}</a>}
                    description={item.skills}
                  />
                  <button className="email-mentee" onClick={navigator.clipboard.writeText(item.email)}>copy email</button>
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
