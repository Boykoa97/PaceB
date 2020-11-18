import React, { Component } from "react";

//This is the default Navbar code from the bootstrap examples
//stateless functional component comes from it being declared as a const
//rather than extending from the component class

//stateless functional componenet
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
