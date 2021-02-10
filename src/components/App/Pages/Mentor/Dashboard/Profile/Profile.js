import React from 'react';
import fire from "../../../../../firebase";

import "./Profile.css";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    
        const user = fire.auth().currentUser;
        const email = user.email;
        const uid = user.uid;
        this.state = {
            email:email,
            uid:uid,
        }
    }
    
    render() {
        return (
            <div className="mentor-profile">
                <h1 id="profile-title">User Profile</h1>
                <p>Account information is:</p>
                <p>Email: {this.state.email}</p>
                <p>User id: {this.state.uid}</p>
            </div>
        );
    }
}

export default Profile;