import React, { Component } from "react";
import Counter from "./counter";

//Our counters class imports the information from the counter file
//it takes that information and uses it in its instantion for the counter objects
//because the state of the counters list is in the App.js
//we make a varialve that takes the "props" the props are the information
//passed from the parent class down to its child
//these props are the information for the counters list we want to render and all the associated helper functions
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        {/* here we call a function where when this button is clicked run onReset using on for things like this is the standard naming convention classname is for
        bootstrap styles*/}
        <button onClick={onReset} className="btn btn-primary btn-sm-m2">
          Reset
        </button>
        {/* for each counter object in the counters list we render a counter component where we pass down an id as the key, and the associated helper functions, alongside 
        the inital value for the counter we wish to render */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
