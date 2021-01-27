import React from 'react';

import Profile from "./Profile/Profile";
import Calendar from "./Calendar/Calendar";

import "./MentorHome.css";

class MentorHome extends React.Component {
    
    render() {
        return (
            <div className="mentor-dashboard">
                <h1>Mentor Dashboard</h1>
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