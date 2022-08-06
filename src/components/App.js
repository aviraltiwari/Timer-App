import Timer from "./Timer";
import UserInput from "./UserInput";
import TimerContext from "../contexts/timerContext";
import React, { useState } from "react";

function App() {
  //Added state to the App component
  const [time, setTime] = useState(); //time is the value of the time, it will be used to stop the timer once the time is up
  const [minute, setMinute] = useState(3); //minute is the value of the minute input
  const [second, setSecond] = useState(0);  //second is the value of the second input

  const [running, setRunning] = useState(false); //running will be true if the timer is running
  const [paused, setPaused] = useState(false); //paused will be true if the timer is paused
  const [timerString, setTimerString] = React.useState('03:00'); //timerString will be the value of the timer string to be displayed
  return (
    //Added a context provider to the App component
    <TimerContext.Provider value={{
      time,
      minute,
      second,
      running,
      paused,
      setTime,
      setMinute,
      setSecond,
      setRunning,
      setPaused,
      timerString, setTimerString
    }}>
      <div className="App">
        <Timer />
        {!running && <UserInput />}
      </div>
    </TimerContext.Provider>
  );
}

export default App;
