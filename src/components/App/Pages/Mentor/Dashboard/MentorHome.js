// this page contains code for the mentor dashboard

import React from 'react';
import { Card } from 'antd';

import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";

import "./MentorHome.css";

const { Meta } = Card;


class MentorHome extends React.Component {
    
    render() {
        return (
            <div>
                {/* displays the profile components */}
                <h1 id="md-title">Mentor Dashboard</h1>
                <Card id="profile" style={{ backgroundColor: 'rgb(239, 238, 252)'}}>
                    <Profile /> 
                </Card>
                {/* displays the skills component */}
                <Card id="skills" style={{ backgroundColor: 'rgb(239, 238, 252)'}}>
                    <Skills />
                </Card>
            </div>
        )
    }
}

export default MentorHome;