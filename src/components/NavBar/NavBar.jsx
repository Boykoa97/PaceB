import React from 'react';

import './NavBar.css';
import { NavItems } from './NavItems';
import { Button } from './Button';

class NavBar extends React.Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="navbar">
                <h1 className="navbar-logo">pace b <i className='fab fa-angellist'></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    { NavItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }) }
                </ul>
                <Button>Sign Up</Button>
            </nav>
        );
    }
}

export default NavBar;