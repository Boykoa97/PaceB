import React, { Component } from "react";
import fire from "../../../firebase";
import history from "../../History";
import axios from "axios";

import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      eMessage: "",
    };
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.props.history.push("/");
        var uid = u.user.uid;
        console.log(uid);
        axios.post("/adduser", {
          fid: uid,
        });
      })
      .catch((error) => {
        const eMessage = error.message;
        this.setState({ eMessage });
        console.log(error);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  state = {};
  render() {
    return (
      <div className="signup-page">
        <h1>Create an Account:</h1>
        <form onSubmit={this.signup}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="email"
              required
            />
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
              required
            />
          </div>
          <div class="form-group">
            <label for="usertype">User Type:</label>
            <select className="userlist">
              <option>Mentor</option>
            </select>
          </div>
          <button className="create-acc-btn" type="submit" value="submit">
            Create Account
          </button>
          <p>{this.state.eMessage}</p>
        </form>
      </div>
    );
  }
}

export default SignUp;
