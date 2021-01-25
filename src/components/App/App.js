import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Mentor from "./Pages/Mentor/Mentor";
import Mentee from "./Pages/Mentee/Mentee";
import MenteeForm from "./Pages/Mentee/MenteeForm";
import Admin from "./Pages/Admin/Admin";
import AdminHome from "./Pages/Admin/AdminHome";
import SignUp from "./Pages/SignUp/SignUp";
import history from "./History";

class App extends Component {
  render() {
    console.log("App - Rendered");

    return (
      <div className="App">
        <Router History={history}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mentee" component={Mentee} />
            <Route exact path="/mentor" component={Mentor} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/adminhome" component={AdminHome} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
        {/*{this.state.user ? <Logout></Logout> : <Login></Login>}*/}
      </div>
    );
  }
}

export default App;
