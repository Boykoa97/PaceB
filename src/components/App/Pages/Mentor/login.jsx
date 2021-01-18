import React, { Component } from "react";
import fire from "../../../firebase";
import { Link } from 'react-router-dom';

class login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email:'',
      password:'',
      eMessage:'',
    };
  }
  login(e){
    e.preventDefault();
    console.log("message");
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error)=>{
      const eMessage = error.message;
        this.setState({ eMessage });
        console.log(error);
    });
  }
  handleChange(e){
    this.setState({ [e.target.name]: e.target.value});
  }
  state = {};
  render() {
    return (
      <div>
        <h1>please log in:</h1>
        <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="email"
              required/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              class="form-control"
              id="password"
              name="password"
              required/>
          </div>
          <button type="submit" onClick={this.login} value="submit">Log in</button>
          <p>{this.state.eMessage}</p>
        </form>
      </div>
    );
  }
}

export default login;