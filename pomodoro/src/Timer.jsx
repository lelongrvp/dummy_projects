import React from 'react';

function Timer(props) {
  const minutes = Math.floor(props.time / 60);
  const seconds = props.time % 60;

  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;