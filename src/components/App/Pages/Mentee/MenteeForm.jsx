import React, { useState } from "react";
import axios from "axios";

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
    axios.post("/mentee", {
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
      <h1>feed back form. </h1>
      <form onSubmit={handleSubmit}>
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
        <button>submit</button>
      </form>
    </div>
  );
}
export default MenteeForm;
