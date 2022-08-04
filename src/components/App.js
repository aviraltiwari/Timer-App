import Timer from "./Timer";
import UserInput from "./UserInput";
import TimerContext from "../contexts/timerContext";
import React, { useState } from "react";

function App() {
  const [time, setTime] = useState();
  const [minute, setMinute] = useState(3);
  const [second, setSecond] = useState(0);

  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timerString, setTimerString] = React.useState('03:00');
  return (
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
