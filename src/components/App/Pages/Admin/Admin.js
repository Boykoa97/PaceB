import React from 'react';
import history from "../../History";

import "./Admin.css";

class Admin extends React.Component {
    render() {
        return (
            <div className="admin-page">
                <h1>CREATE YOUR ORGANIZATION</h1>
                <form>
                    <button className="admin-btn" onClick={() => history.push('/adminhome')}>
                        Create Organization
                    </button>
                </form>
            </div>
        );
    } 
    
}

export default Admin;