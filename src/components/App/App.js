import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./History";

import Home from "./Pages/Home/Home";
// for mentor
import Mentor from "./Pages/Mentor/Mentor";
import MenteeListAccess from "./Pages/Mentor/MenteeList/MenteeListAccess";
// for admin
import MentorListAccess from "./Pages/Admin/MentorList/MentorList";
// signup & login
import SignUp from "./Pages/SignUp/SignUp";
import login from "./Pages/login";
// for mentee
import Mentee from "./Pages/Mentee/Mentee";
// for iframe
import iFrameEmbed from "./Pages/Mentor/iFrameEmbed/iFrameEmbed";
import MenteeFormEmbed from "./Pages/Mentor/iFrameEmbed/MenteeFormEmbed";

class App extends Component {
  render() {
    console.log("App - Rendered");

    return (
      <div className="App">
        <Router History={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mentor" component={Mentor} />
            <Route exact path="/mentee-list" component={MenteeListAccess} />
            <Route exact path="/admin-mentor-list" component={MentorListAccess} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/sign-in" component={login} />
            <Route exact path="/mentee-signup" component={Mentee} />
            <Route exact path="/iframe-embed" component={iFrameEmbed} />
            <Route exact path="/mentee-form" component={MenteeFormEmbed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
