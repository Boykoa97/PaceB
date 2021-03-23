import React, { Component } from "react";
import history from "../../History";

import "./Dashboard/MentorHome.css"
import { Select } from 'antd';

const { Option } = Select;

class AddSkills extends Component {
    render() {
        return (
            // file currently just has a form, with an onSubmit that redirects to the mentor dashboard
            // need to change form functionality to:
            //      - pull list of possible skills into dropdown to select from
            //      - add selected skills to the user profile onSubmit
            //      - can only access dashboard if at least 1 skill is selected before submitting
            // * didn't touch previous code you implemented in Skills.js, so you could copy and paste maybe?
            // * still keep the code that displays skills in user dashboard in Skills.js component
            <div 
                style={{ 
                    backgroundColor: 'rgb(116, 111, 218)', padding: '30px', width: '30rem', margin: 'auto', marginTop: '5rem', borderStyle: 'groove'
                }}
            >
                <form onSubmit={() => history.push("/mentor")}>
                    <h1>Add Skills:</h1>
                    {/* Multiselect input dialogue for preferred Skills */}
                    <div class="form-group">
                        <label>add your preferred skills to your user profile:</label>
                        <Select
                            mode="multiple"
                            style={{ width: "60%" }}
                            placeholder="select 5 skills"
                            //defaultValue={['machine learning']}
                            optionLabelProp="label"
                            >
                        </Select>
                    </div>
                    <br />
                    <h1>Add Calendar:</h1>
                        <div class="form-group">
                            <label>add your calendar link to your user profile:</label>
                            <input
                                type="url"
                                class="form-control"
                                id="url"
                                name="url"
                                //required
                            />
                        </div>
                    <br />
                    <button id="submit-btns" type="submit" value="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default AddSkills;