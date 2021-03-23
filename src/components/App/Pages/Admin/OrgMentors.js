import React, { Component } from "react";
import fire from "../../../firebase";
import Login from "../login";

import "./OrgMentors.css";
import NavBar from "../../../NavBar/NavBar";

import { List, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
];

class OrgMentors extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    //use this for ajax calls form the server
    //set the sate here

    console.log("App - Mounted");
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
        <div>
          <NavBar />
            {/* If user isn't logged in, they are redirected to login page, else they are shown iframe embed page */}
            {this.state.user ? 
                <div>
                    <h1 id="mentor-list-title">Mentor List</h1>
                    <div style={{ width: "100%" }}>
                        <div className="org-mentors">
                            <h2 style={{
                                textAlign: "center",
                                color: "antiquewhite",
                                paddingTop: "20px",
                                }}>
                                Mentors In Your Organization
                            </h2>
                            <List
                                style={{ margin: "10px" }}
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar style={{backgroundColor: 'antiquewhite', color: '#9196e4'}} icon={<UserOutlined />} />}
                                            title={<a href="" style={{color: 'antiquewhite'}}>{item.title}</a>}
                                            description="Mentor in your organization"
                                        />
                                        <button className="delete-mentor">delete</button>
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                </div>
                : <Login />
            }
        </div>
    );
  }
}

export default OrgMentors;