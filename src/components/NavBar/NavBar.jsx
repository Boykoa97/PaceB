// this page contains the code for the navbar

import React from 'react';

import './NavBar.css';
import { NavItems, MentorNavItems, AdminNavItems } from './NavItems';
import { Link } from 'react-router-dom';
import fire from "../firebase";
import axios from "axios";

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        console.log("App - Constructor");
        this.state = {
          user: null,
          admin:0,
        };
        this.logout = this.logout.bind(this);
        this.authListener = this.authListener.bind(this);
        this.adminCheck = this.adminCheck.bind(this);
      }
      adminCheck(fid) {
        // query if the user is an admin
        axios
          .post("/getProfile", {
            //searches using the fid as a filter
            fid: fid,
          })
          .then((res) => {
            //admin user status is set in admin
            this.setState({ admin: res.data[0].admin });
          })
          .catch(function (error) {
            //if the nav bar gets an error by attempting to retrive account information before its added to the database, it logs the error, 
            //and just displays the defualt nav bar, and updates to a new one on a page refresh
            console.log(error);
          });
      }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            this.setState({ user });
            localStorage.setItem("user", user.uid);
            //admin check is run alongside page load, where if a user is logged in, the check is ran, otherwise it is not.
            this.adminCheck(user.uid);

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
      const userType = this.state.user;
      //if the user has an admin status of zero, and therefore not an admin, the regular nav bar is shown
      let navlist;
      if (this.state.admin==0) {   // check if user is mentor
        navlist = MentorNavItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          )
        })
        //otherwise, the admin navbar is shown
      } else if (this.state.admin==1) {  // check if user is admin
        navlist = AdminNavItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          )
        })
        //if the user is not logged in, the basic nav bar is shown
      }else {
        navlist = NavItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          )
        })
      }
      return( 
          <nav className="navbar">
              <Link className="navbar-logo" to='/'>pace b <i className='fab fa-angellist'></i></Link> {/* homepage / logo */}
              <ul className = 'nav-menu'>  {/* nav menu items */}
                {navlist}
              </ul>
              <li className='sign-in'>  {/* login button in top right */}
              {this.state.user ? 
                <button className='sign_in' onClick={this.logout} >
                  Sign Out
                </button>:
                <button className='sign_in'>
                  <Link id="sign_in" to="/mentor">Sign In</Link>
                </button>
              }
              </li>
          </nav>
      );
    }
}

export default NavBar;