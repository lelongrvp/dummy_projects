import React from 'react';

function Settings(props) {
  return (
    <div className="settings-container">
      <div className="setting">
        <label>Work Time:</label>
        <input
          type="number"
          id="work-time"
          min="1"
          max="60"
          value={props.workTime}
          onChange={props.onWorkTimeChange}
        />
      </div>
      <div className="setting">
        <label>Rest Time:</label>
        <input
          type="number"
          id="rest-time"
          min="1"
          max="60"
          value={props.restTime}
          onChange={props.onRestTimeChange}
        />
      </div>
    </div>
  );
}

export default Settings;