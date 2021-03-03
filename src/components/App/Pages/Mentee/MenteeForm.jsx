import React, { useState } from "react";
import axios from "axios";

import "./MenteeForm.css";

function MenteeForm() {
  const [inputs, setInputs] = useState({
    email: "",
    first_name: "",
    last_name: "",
    skill1: "None",
    skill2: "None",
    skill3: "None",
    skill4: "None",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //destructure from inputs
    const {
      email,
      first_name,
      last_name,
      skill1,
      skill2,
      skill3,
      skill4,
    } = inputs;
    axios.post("/findMatch", {
      //make an object to be handled from req.body on the backend.
      email,
      first_name,
      last_name,
      skill1,
      skill2,
      skill3,
      skill4,
    });
  };
  return (
    <div>
      {
        /* Mentee Sign Up Form: */
        <form onSubmit={handleSubmit} className="menteeform">
          <h1>Mentee Sign Up Form</h1>
          <label>First Name: </label>
          <input
            id="input-box"
            type="text"
            name="first_name"
            onChange={handleChange}
            required
          />
          <br />
          <label>Last Name: </label>
          <input
            id="input-box"
            type="text"
            name="last_name"
            onChange={handleChange}
            required
          />
          <br />
          <label>Email Address: </label>
          <input
            id="input-box"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <br />
          <label>Skill #1:</label>
          <select className="skills-list" name="skill1" onChange={handleChange}>
            <option>None</option>
            <option>Machine Learning</option>
            <option>Frontend Web Dev</option>
            <option>Backend Web Dev</option>
            <option>UI/UX</option>
          </select>
          <label>Skill #2:</label>
          <select className="skills-list" name="skill2" onChange={handleChange}>
            <option>None</option>
            <option>Machine Learning</option>
            <option>Frontend Web Dev</option>
            <option>Backend Web Dev</option>
            <option>UI/UX</option>
          </select>
          <br />
          <label>Skill #3:</label>
          <select className="skills-list" name="skill3" onChange={handleChange}>
            <option>None</option>
            <option>Machine Learning</option>
            <option>Frontend Web Dev</option>
            <option>Backend Web Dev</option>
            <option>UI/UX</option>
          </select>
          <label>Skill #4:</label>
          <select className="skills-list" name="skill4" onChange={handleChange}>
            <option>None</option>
            <option>Machine Learning</option>
            <option>Frontend Web Dev</option>
            <option>Backend Web Dev</option>
            <option>UI/UX</option>
          </select>
          <button id="mentee-btn">submit</button>
        </form>
      }
    </div>
  );
}
export default MenteeForm;
