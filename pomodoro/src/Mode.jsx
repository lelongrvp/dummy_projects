import React from 'react';

function Mode(props) {
  return <div className="mode">{props.mode === 'work' ? 'Work' : 'Rest'}</div>;
}

export default Mode;