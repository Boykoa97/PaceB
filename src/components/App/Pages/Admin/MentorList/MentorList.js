import React, { Component } from "react";
import "./MentorList.css";

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

class MentorList extends Component {
   
    render() {
        return (
            <div>
                <h1 id="mentorl-title">Mentor List</h1>
                <div style={{ width: "100%" }}>
                    <div className="current-mentors">
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
        );
    }
}

export default MentorList;