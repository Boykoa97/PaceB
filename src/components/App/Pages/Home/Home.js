import React from "react";

import DatePicker from "../Mentor/datePicker";
import { render } from "@testing-library/react";
import QuestionList from "../Mentor/questionList";

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
            <h1>Capstone Pace B</h1>
          </div>
          <QuestionList></QuestionList>
          {/* <DatePicker></DatePicker> */}
          <div>
            <button className="mentor-form-btn">
              Submit
            </button>
          </div>
      </div>
    );
  }
}

//when you call the app component it will use this this as the default app code
export default Home;
