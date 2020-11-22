import React, { useState } from 'react';

import './NavBar.css';
import { NavItems } from './NavItems';
import { Button } from './Button';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return( 
            <nav className="navbar">
                <Link className="navbar-logo" to='/'>pace b <i className='fab fa-angellist'></i></Link> 
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
                <li className='sign-up'>
                    <Link to="/signup" className='sign_up'>
                        Sign Up
                    </Link>
                </li>
            </nav>
        );
    }
}

export default NavBar;