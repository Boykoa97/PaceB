import userEvent from "@testing-library/user-event";
import React, { Component } from "react";
import fire from "../../../firebase";

class logout extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    const user = fire.auth().currentUser;
    const email = user.email;
    const uid = user.uid;
    this.state = {
      email:email,
      password:'',
      uid:uid,
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
        <h1>Logged In</h1>
        <p>Account information is:</p>
          <p>Email: {this.state.email}</p>
          <p>User id: {this.state.uid}</p>
         <p>Press the button in the top right corner to log out</p>
      </div>
    );
  }
}

export default logout;