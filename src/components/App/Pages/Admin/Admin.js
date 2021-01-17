import React from 'react';
import fire from "../../../firebase";
import history from "../../History";

import "./Admin.css";

class Admin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="admin-page">
                <div>
                    <div className="Welcome">
                        <h1 className='admin'>ADMIN PAGE</h1>
                    </div>
                    <form className="admin">
                        <button className="admin-btn" onClick={() => history.push('/adminhome')}>
                            Sign In as Admin
                        </button>
                    </form>
                </div>
            </nav>
        );
    } 
    
}

export default Admin;