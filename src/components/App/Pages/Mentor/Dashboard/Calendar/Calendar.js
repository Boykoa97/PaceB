import React from 'react';

//import { Calendar } from 'antd';

// function onPanelChange(value, mode) {
//   console.log(value, mode);
// }

class MentorCalendar extends React.Component {
    
    render() {
        return (
            // <div>
            //     <div className="site-calendar-demo-card" style={{ backgroundColor: 'rgb(116, 111, 218)', padding: '40px 40px'}}>
            //         <h1 id="calendar-title" style={{color: 'antiquewhite'}}>Calendar</h1>
            //         <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            //     </div>
            // </div>
            <div style={{ backgroundColor: 'rgb(116, 111, 218)', padding: '40px 40px'}}>
                <h1 style={{color: 'antiquewhite'}}>Add Calendar</h1>
                <form class="form-group">
                    <label>add your calendar link to your user profile:</label>
                    <input
                        type="url"
                        class="form-control"
                        id="url"
                        name="url"
                        required
                    />
                </form>
                <br />
                <button id="submit-btns" type="submit" value="submit">
                    Submit
                </button>
            </div>
        )
    }
}

export default MentorCalendar;