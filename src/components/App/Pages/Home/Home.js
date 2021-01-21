import React from "react";
import history from '../../History';

import { render } from "@testing-library/react";

import "./Home.css";


class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }


  render() {
    console.log("App - Rendered");

    return (
      <div className="Home">
          <div className="Welcome">
            <h1>Welcome to Capstone Pace B</h1>
          </div>
          <form className="home-btns">
            <button className="home-btn" onClick={() => history.push('/create-organization')}>
              Create Organization
            </button>
            <button className="home-btn" onClick={() => history.push('/mentor')}>
              Mentor Sign In
            </button>
          </form>
      </div>
    );
  }
}

//when you call the app component it will use this this as the default app code
export default Home;




