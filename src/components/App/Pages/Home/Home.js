import React from "react";

import { render } from "@testing-library/react";
//import DatePicker from "../Mentor/datePicker";
//import QuestionList from "../Mentor/questionList";
import history from '../../History';

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
          {/*</div>
          <QuestionList></QuestionList>
          <DatePicker></DatePicker>
          <div>*/}
          </div>
          <form className="home-btns">
            <button className="home-btn" onClick={() => history.push('/mentee')}>
              Sign In As Mentee
            </button>
            <button className="home-btn" onClick={() => history.push('/mentor')}>
              Sign In As Mentor
            </button>
            <button className="home-btn" onClick={() => history.push('/admin')}>
              Sign In As Admin
            </button>
          </form>
      </div>
    );
  }
}

//when you call the app component it will use this this as the default app code
export default Home;
