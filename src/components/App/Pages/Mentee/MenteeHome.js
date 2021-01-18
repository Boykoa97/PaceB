import React from 'react';
import fire from "../../../firebase";

class MenteeHome extends React.Component {

    render(){
        return(
            <div>
                <h1>Mentor Home</h1>
                <button onClick={() => fire.auth().signOut}>Sign Out</button>
            </div>
        )
    }
}

export default MenteeHome;