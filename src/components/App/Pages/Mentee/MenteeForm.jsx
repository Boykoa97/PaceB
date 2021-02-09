import React, { useState } from "react";
import axios from "axios";

import "./MenteeForm.css";

function MenteeForm() {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    subject: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //destructure from inputs
    const { email, name, subject, description } = inputs;
    axios.post("/", {
      //make an object to be handled from req.body on the backend.
      email,
      name,
      subject,
      //change the name to represent text on the backend.
      text: description,
    });
  };
  return (
    <div>
      {/* Feedback Form for testing: */}
      <form onSubmit={handleSubmit} className="mentee-fb">
        <h1>feed back form. (for testing)</h1>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="subject"
          name="subject"
          value={inputs.subject}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="tell us about your experience"
          value={inputs.description}
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button id="mentee-btn">submit</button>
      </form>
      {/* Mentee Sign Up Form: */}
      <form className="menteeform">
        <h1>Mentee Sign Up Form</h1>
        <label>First Name: </label>
        <input
          id="input-box"
          type="text"
          name="first-name"
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name: </label>
        <input
          id="input-box"
          type="text"
          name="last-name"
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
        <select className="skills-list">
          <option>Machine Learning</option>
          <option>Frontend Web Dev</option>
          <option>Backend Web Dev</option>
          <option>UI / UX</option>
        </select>
        <label>Skill #2:</label>
        <select className="skills-list">
          <option>None</option>
          <option>Machine Learning</option>
          <option>Frontend Web Dev</option>
          <option>Backend Web Dev</option>
          <option>UI / UX</option>
        </select>
        <br />
        <label>Skill #3:</label>
        <select className="skills-list">
          <option>None</option>
          <option>Machine Learning</option>
          <option>Frontend Web Dev</option>
          <option>Backend Web Dev</option>
          <option>UI / UX</option>
        </select>
        <label>Skill #4:</label>
        <select className="skills-list">
          <option>None</option>
          <option>Machine Learning</option>
          <option>Frontend Web Dev</option>
          <option>Backend Web Dev</option>
          <option>UI / UX</option>
        </select>
        <button id="mentee-btn">submit</button>
      </form>
    </div>
  );
}
export default MenteeForm;
