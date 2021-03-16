import React, { Component } from "react";

import "./MenteeList.css";

import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const unmatchedMentees = [
  {
    title: 'Unmatched Mentee 1',
    email: 'bbb@b.ca',
    skills: 'Machine Learning, Data Analysis',
  },
  {
    title: 'Unmatched Mentee 2',
    email: 'bbb@b.ca',
    skills: 'Android Development, Front End Web Development, Data Analysis',
  },
];
const matchedMentees = [
  {
    title: 'Matched Mentee 1',
    email: 'aaa@a.ca',
    skills: 'iOS Development',
  },
  {
    title: 'Matched Mentee 2',
    email: 'bbb@b.ca',
    skills: 'User Interface / User Experience Design, Android Development',
  },
  {
    title: 'Matched Mentee 3',
    email: 'ccc@c.ca',
    skills: 'Back End Development, Front End Development',
  },
];

class MenteeList extends Component {

  render() {
    return (
      <div>
        <h1 id="ml-title">Mentee List</h1>
        <div style={{ width: '100%'}}>
          <div className="unmatched-mentees">
            <h2 style={{textAlign: 'center', color: 'antiquewhite', paddingTop: '20px'}}>Unmatched Mentees</h2>
            <List
            style={{margin: '10px'}}
              itemLayout="horizontal"
              dataSource={unmatchedMentees}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{backgroundColor: 'antiquewhite', color: '#9196e4'}} icon={<UserOutlined />} />}
                    title={<a href="" style={{color: 'antiquewhite'}}>{item.title}</a>}
                    description={item.skills}
                  />
                  <button className="accept-mentee" style={{marginRight: '10px'}}>accept</button>
                  <button className="decline-mentee">decline</button>
                </List.Item>
              )}
            />
          </div>
          <div className="matched-mentees">
            <h2 style={{textAlign: 'center', color: 'antiquewhite', paddingTop: '20px'}}>Matched Mentees</h2>
            <List
              style={{margin: '10px'}}
              itemLayout="horizontal"
              dataSource={matchedMentees}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{backgroundColor: 'white', color: '#9196e4'}} icon={<UserOutlined />} />}
                    title={<a href="" style={{color: 'white'}}>{item.title}</a>}
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