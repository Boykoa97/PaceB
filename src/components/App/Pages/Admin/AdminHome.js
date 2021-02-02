import React from 'react';

import "./AdminHome.css";

class AdminHome extends React.Component {

    render(){
        return(
            <nav className="admin-home">
                <div>
                    <h1 id='title'>Admin</h1>
                    <p id="msg">This is the Admin Home Page</p>
                </div>
            </nav>
        )
    }
}

export default AdminHome;