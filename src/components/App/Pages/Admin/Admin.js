import React from "react";
import history from "../../History";

import "./Admin.css";
import NavBar from "../../../NavBar/NavBar";

class Admin extends React.Component {
  render() {
    return (
      <div className="admin-page">
        <NavBar />
        <h1 id="admin-title">CREATE YOUR ORGANIZATION</h1>
        <form>
          <button
            className="admin-btn"
            onClick={() => history.push("/adminhome")}
          >
            Create Organization
          </button>
        </form>
      </div>
    );
  }
}

export default Admin;
