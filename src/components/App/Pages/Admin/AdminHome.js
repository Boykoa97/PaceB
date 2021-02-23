import React from 'react';

import "./AdminHome.css";
import NavBar from "../../../NavBar/NavBar";

class AdminHome extends React.Component {

    render(){
        return(
            <nav>
                <div>
                <NavBar />
                    <h1 id="admin-home">Admin</h1>
                    <p id="msg">This page is under construction!</p>
                </div>
            </nav>
        )
    }
}

export default AdminHome;