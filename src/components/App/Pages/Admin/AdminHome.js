import React from 'react';
import fire from "../../../firebase";

class AdminHome extends React.Component {

    render(){
        return(
            <div>
                <h1>Admin Home</h1>
                <button onClick={() => fire.auth().signOut}>Sign Out</button>
            </div>
        )
    }
}

export default AdminHome;