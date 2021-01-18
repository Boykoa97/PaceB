import React, { Component } from "react";
import fire from "../../../firebase";

class logout extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email:'',
      password:''
    }
  }
  logout(){
    fire.auth().signOut();
  }
  handleChange(e){
    this.setState({ [e.target.name]: e.target.value});
  }
  state = {};
  render() {
    return (
      <div>
        <h1>logged in, press button to log out</h1>
          <button className="logout-btn" type="submit" onClick={this.logout} value="submit">Log out</button>
      </div>
    );
  }
}

export default logout;