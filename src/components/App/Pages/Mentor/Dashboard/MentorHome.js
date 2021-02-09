import React from 'react';

import MentorNav from "../MentorNav";
import Profile from "./Profile/Profile";
import Calendar from "./Calendar/Calendar";

import "./MentorHome.css";

class MentorHome extends React.Component {
    
    render() {
        return (
            <div>
                <MentorNav />
                <h1 id="md-title">Mentor Dashboard</h1>
                <div id="profile">
                    <Profile />
                </div>
                <div id="calendar">
                    <Calendar />
                </div>
            </div>
        )
    }
}

export default MentorHome;