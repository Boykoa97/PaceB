import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './History';

import NavBar from '../NavBar/NavBar';
import Home from './Pages/Home/Home';
import Mentor from './Pages/Mentor/Mentor';
import Admin from './Pages/Admin/Admin';
import AdminHome from './Pages/Admin/AdminHome';
import SignUp from './Pages/SignUp/SignUp';
import login from './Pages/login';


class App extends Component {
  render(){
    console.log("App - Rendered");

    return (
      <div className="App">
        <Router History={ history }>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/mentor' component={Mentor} />
            <Route exact path='/create-organization' component={Admin} />
            <Route exact path='/adminhome' component={AdminHome} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/sign-in' component={login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
