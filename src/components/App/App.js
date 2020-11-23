import React, { Component } from "react";
import "./App.css";

import NavBar from "../NavBar/NavBar";

import Counters from "../counters";
import Createacc from "../createacc.jsx";
import DatePicker from "../datePicker";
import Login from "../login.jsx";
import { render } from "@testing-library/react";
import QuestionList from "../questionList";
import firebase from "../firebase";

/*

In this case the App mimics some functionality of a a shopping cart 

The app object has two children that being a list of counters and a navbar object.

Information on the state of the counters objects in the instance of the counters list are here so  they can be accessed by the navbar

Information can only go up or down through the parent child relationship and so becasue navbar is a child of the app and not of the counterlist. 
This is called lifting the state and allows us to pass information between components that arent directly connected. This is also why helper methods are 
here rather than counters.jsx 

*/

class App extends Component {
  //this is the state of all the counter objects in the counter list.
  //you may wonder why this information is here and not in "counters.jsx"
  //this is because we want to display the total number of counter objects with nonzero values in the navbar
  //However the navbar can't access the information of a counters object directly and where the term lifting the state comes from
  //Because we have lifted the state from the counters file and brought it into the parent being the app component
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    //use this for ajax calls form the server
    //set the sate here

    console.log("App - Mounted");
  }

  //when incrementing a value react does not automatically update the view to the user
  //this is due to the nature of react. So to change the state of on object you need to set the state of it
  //by taking the object we want to adjust making a copy and modifying it. Then update the state of the parent object so it is rendered with that new information
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  // () => {} represents a function in javascript
  //in this function we take our list of counters objects and change all the values of the counter children to be 0
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  //this function show us how we can pass a parameter and and remove it from the list which then we then render it again
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  //Here is where we render the app and its components
  //You see we have two objects that are components that are rendered yet many more objects are rendered
  // this is due to what actually makes about the Counters class
  // Also the items in the curly braces in each component are how the method say "handleReset" is passed down to children
  //This is so the method can be done in that jsx file but the information it needs to is stored here in the app file
  render() {
    console.log("App - Rendered");

    return (
      <div className="App">
        <NavBar />
        <div className="webpage">
          <div className="Welcome">
            <h1>Capstone Pace B</h1>
          </div>
          {/*<QuestionList></QuestionList>
          <DatePicker></DatePicker>
          <div>
            <button className="btn btn-secondary btn-med badge-primary">
              Submit
            </button>
          </div>*/}
          {/*<Login></Login> */}
          <Createacc></Createacc>
        </div>
      </div>
    );
  }
}

//when you call the app component it will use this this as the default app code
export default App;
