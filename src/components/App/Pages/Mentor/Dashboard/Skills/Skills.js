import React from 'react';

import { Select, message } from "antd";

const { Option } = Select;

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class Skills extends React.Component {
    
    render() {
        return (
            <div style={{ backgroundColor: 'rgb(116, 111, 218)', padding: '40px 40px'}}>
                <h1 style={{color: 'antiquewhite'}}>Add Skills</h1>
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
                <button id="submit-btns" type="submit" value="submit">
                    Submit
                </button>
          </div>
        )
    }
}

export default Skills;