import React from 'react';

import './MentorNav.css';
import { Link } from 'react-router-dom';

class MentorNav extends React.Component{
    constructor(props) {
        super(props);
        console.log("App - Constructor");
        this.state = {
          
        };
      }
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return( 
            <nav className="mentor-nav">
                <li className="mentor-navitems">
                    <Link to="/mentor" id="mentor-navitem">Dashboard</Link>
                </li>
                <li className="mentor-navitems">
                    <Link to="/mentee-list" id="mentor-navitem">Mentees</Link>
                    </li>
                <li className="mentor-navitems">
                    <Link to="/iframe-embed" id="mentor-navitem">Mentee Form</Link>
                </li>  
            </nav>
        );
    }
}

export default MentorNav;