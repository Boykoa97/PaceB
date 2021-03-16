import React from 'react';

import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class MentorCalendar extends React.Component {
    
    render() {
        return (
            <div>
                <div className="site-calendar-demo-card" style={{ backgroundColor: 'rgb(116, 111, 218)', padding: '40px 40px'}}>
                    <h1 id="calendar-title" style={{color: 'antiquewhite'}}>Calendar</h1>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>
        )
    }
}

export default MentorCalendar;