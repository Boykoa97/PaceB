import React, { Component } from "react";
// Import the library
import Datetime from "react-datetime";

class DatePicker extends Component {
  state = {};
  render() {
    // return it from your components
    return (
      <div>
        <div>
          <h2>Start Time</h2>
          <Datetime />
        </div>
        <div>
          <h2>End Time</h2>
          <Datetime />
        </div>
      </div>
    );
  }

  onAdjust() {
    console.log("test");
  }
}
export default DatePicker;
