import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

function handleChangeSkills(value) {
  console.log(`selected ${value}`);
}

class MenteeFormEmbed extends React.Component {

    render() {
        return (
            <div style={{ 
                backgroundColor: 'rgb(116, 111, 218)',
                padding: '30px',
                width: '30rem',
                margin: 'auto',
                marginTop: '1rem',
                borderStyle: 'groove'
            }}>   {/* Mentee Sign Up Form: in iframe preview */}
                <h1 style={{textAlign: "center"}}>Mentee Sign Up</h1>
                <form className="menteeform">
                <div>
                    <label>First Name: </label> {/* For User First Name */}
                    <input
                    class="form-control"
                    id="input-box"
                    type="text"
                    name="fname"
                    required
                    />
                </div>
                <br />
                <div>
                    <label>Last Name: </label>  {/* For User Last Name */}
                    <input
                    class="form-control"
                    id="input-box"
                    type="text"
                    name="lname"
                    required
                    />
                </div>
                <br />
                <div>
                    <label>Email Address: </label>  {/* For User Email */}
                    <input
                    class="form-control"
                    id="input-box"
                    type="email"
                    name="email"
                    required
                    />
                </div>
                <br/>
                <div>
                    <label>Preferred Skills:</label>  
                    {/* Multiselect input dialogue for preferred Skills */}
                    <Select
                    mode="multiple"
                    style={{ width: '66%', marginLeft: '2rem'}}
                    placeholder="select 5 skills"
                    //defaultValue={['machine learning']}
                    optionLabelProp="label"
                    >
                    </Select>
                </div>
                <br/>
                <button id="mentee-btn">submit</button>
                </form>
            </div>
        )
    }
}

export default MenteeFormEmbed;