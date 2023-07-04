import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Mode from './Mode';
import Settings from './Settings';
import Button from './Button';

function App() {
  const [workTime, setWorkTime] = useState(10);
  const [restTime, setRestTime] = useState(5);
  const [time, setTime] = useState(workTime);
  const [mode, setMode] = useState('work');
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setMode((prevMode) => (prevMode === 'work' ? 'rest' : 'work'));
      setTime(mode === 'work' ? restTime : workTime);
    }

    return () => clearInterval(intervalId);
  }, [running, time, mode, workTime, restTime]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(workTime);
    setMode('work');
    setRunning(false);
  };

  const handleWorkTimeChange = (event) => {
    setWorkTime(parseInt(event.target.value));
  };

  const handleRestTimeChange = (event) => {
    setRestTime(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <Timer time={time} />
      <Mode mode={mode} />
      <div className="settings">
        <Settings
          workTime={workTime}
          restTime={restTime}
          onWorkTimeChange={handleWorkTimeChange}
          onRestTimeChange={handleRestTimeChange}
        />
        <Button
          label={running ? 'Stop' : 'Start'}
          onClick={running ? handleStop : handleStart}
        />
        <Button label="Reset" onClick={handleReset} />
      </div>
    </div>
  );
}

export default App;
