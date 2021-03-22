import React from 'react';
import { Card } from 'antd';

import Profile from "./Profile/Profile";
import Calendar from "./Calendar/Calendar";
import Skills from "./Skills/Skills";

import "./AdminHome.css";

const { Meta } = Card;


class AdminHome extends React.Component {
    
    render() {
        return (
            <div>
                <h1 id="md-title">Admin Dashboard</h1>
                <Card id="profile" style={{ backgroundColor: 'rgb(239, 238, 252)'}}>
                    <Profile /> 
                </Card>
                {/*<Card id="skills" style={{ backgroundColor: 'rgb(239, 238, 252)'}}>
                    <Skills />
                </Card>*/ }
                <Card id="calendar" style={{ backgroundColor: 'rgb(239, 238, 252)'}}>
                    <Calendar />
                </Card>
            </div>
        )
    }
}

export default AdminHome;