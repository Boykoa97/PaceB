import React, { Component } from "react";

class QuestionList extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">First Name</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Last Name</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              Time Spent with the Company
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Recent Hire</option>
              <option>0-2 years</option>
              <option>3-5 years</option>
              <option>6-10 years</option>
              <option>11-15 years</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Area of Interest</label>
            <select
              multiple
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option>Machine Learning</option>
              <option>Frontend Web Development</option>
              <option>Backend Development</option>
              <option>UI/UX</option>
              <option>Dev Ops</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Goals of Your Mentorship
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default QuestionList;
