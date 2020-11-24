import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Mentor from "./Pages/Mentor/Mentor";
import Mentee from "./Pages/Mentee/Mentee";
import Admin from "./Pages/Admin/Admin";
import SignUp from "./Pages/SignUp/SignUp";

class App extends Component {
  render() {
    console.log("App - Rendered");

    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mentee" exact component={Mentee} />
            <Route path="/mentor" exact component={Mentor} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </Router>
        {/*{this.state.user ? <Logout></Logout> : <Login></Login>}*/}
      </div>
    );
  }
}

export default App;
