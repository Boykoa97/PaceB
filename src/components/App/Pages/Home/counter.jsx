import React, { Component } from "react";

class Counter extends Component {
  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  //all the "component" helper functions are to show the order of operations that occur in rendering each component in this application
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.value !== this.props.value) {
      //   Ajax call and get new data from the server
    }
  }

  render() {
    console.log("Counter - Rendered");

    //Javascript can only return one object so everything has to be wrapped in a single <div> to condense the return but still pass all the information we wish to
    //provide
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;