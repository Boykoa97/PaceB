import React, { useState } from 'react';

import './NavBar.css';
import { NavItems } from './NavItems';
import { Link } from 'react-router-dom';
import fire from "../firebase";

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        console.log("App - Constructor");
        this.state = {
          user: null,
        };
        this.logout = this.logout.bind(this);
        this.authListener = this.authListener.bind(this);
      }
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            this.setState({ user });
            localStorage.setItem("user", user.uid);
          } else {
            this.setState({ user: null });
            localStorage.removeItem("user");
          }
        });
      }
      logout(){
        fire.auth().signOut();
      }
      componentDidMount() {
        //use this for ajax calls form the server
        //set the sate here
    
        console.log("App - Mounted");
        this.authListener();
      }

    render(){
        return( 
            <nav className="navbar">
                <Link className="navbar-logo" to='/'>pace b <i className='fab fa-angellist'></i></Link> {/* homepage / logo */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>  {/* nav menu items */}
                    { NavItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}> 
                                    {item.title}
                                </Link>
                            </li>
                        )
                    }) }
                </ul>
                <li className='sign-in'>  {/* login button in top right */}
                {this.state.user ? <button className='sign_in' onClick={this.logout} >Sign Out</button>: <button className='sign_in'>
                  <Link id="sign_in" to="/sign-in">Sign In</Link>
                  </button>}
                </li>
            </nav>
        );
    }
}

export default NavBar;