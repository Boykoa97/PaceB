import React, { Component } from "react";

class createacc extends Component {
  state = {};
  render() {
    return (
        <div>
        <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              required/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Password</label>
            <input
              type="passowrd"
              class="form-control"
              id="password"
              required/>
          </div>
          <button type="submit" value="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default createacc;
