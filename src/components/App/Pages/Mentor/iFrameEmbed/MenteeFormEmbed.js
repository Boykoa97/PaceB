import React from 'react';

class MenteeFormEmbed extends React.Component {

    render() {
        return (
            <div>
                <form className="menteeform">
                    <h1>Mentee Sign Up Form</h1>
                    <label>First Name: </label>
                    <input
                        id="input-box"
                        type="text"
                        name="first-name"
                        required
                    />
                    <br />
                    <label>Last Name: </label>
                    <input
                        id="input-box"
                        type="text"
                        name="last-name"
                        required
                    />
                    <br />
                    <label>Email Address: </label>
                    <input
                        id="input-box"
                        type="email"
                        name="email"
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
        )
    }
}

export default MenteeFormEmbed;