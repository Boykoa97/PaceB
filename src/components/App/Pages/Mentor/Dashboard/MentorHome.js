import React from 'react';
import { Card } from 'antd';

import Profile from "./Profile/Profile";
import Calendar from "./Calendar/Calendar";

import "./MentorHome.css";

const { Meta } = Card;


class MentorHome extends React.Component {
    
    render() {
        return (
            <div>
                <h1 id="md-title">Mentor Dashboard</h1>
                <Card id="profile" style={{ backgroundColor: 'rgb(239, 238, 252)'}}>
                    <Profile /> 
                </Card>
                <Card id="calendar" style={{ backgroundColor: 'rgb(239, 238, 252)'}}>
                    <Calendar />
                </Card>
            </div>
        )
    }
}

export default MentorHome;