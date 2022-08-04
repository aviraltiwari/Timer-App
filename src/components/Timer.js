import React, { useContext, useEffect } from 'react'
import Buttons from './Buttons'
import TimerContext from "../contexts/timerContext";

function Timer() {
    const operations = ["start", "pause", "continue", "reset"]
    const {
        time,
        minute,
        second,
        running,
        paused,
        timerString,
        setSecond,
        setMinute,
        setRunning,
        setPaused,
        setTimerString,
    } = useContext(TimerContext);


    useEffect(() => {
        const timer = setInterval(() => {
            if (running && !paused) {
                if (`${minute}:${second}` === time) {
                    setRunning(false);
                    setPaused(true);
                    alert("Time is up! \nClick OK to reset the timer.");
                    setMinute(3);
                    setSecond(0);
                    setTimerString('03:00')
                    return;
                }
                setSecond(second => second + 1);
                if (second === 59) {
                    setMinute(minute + 1);
                    setSecond(0);
                }
                if (minute === 59) {
                    setMinute(0);
                    setSecond(0);
                }
            }
        }, 1000);
        return () => clearInterval(timer);
    });

    return (
        <div className='timer' style={{ height: running ? '100vh' : '50vh' }}>
            <h2>Timer {running && 'is running for ' + timerString}</h2>
            <h1>{!running && timerString}</h1>
            <h1>{running && (minute < 10 && second < 10 ? `0${minute}:0${second}` :
                (minute < 10 ? `0${minute}:${second}` :
                    (second < 10 ? `${minute}:0${second}` :
                        `${minute}:${second}`)))}
            </h1>
            <div className='button-container'>
                {operations.map(operation =>
                    <Buttons key={operation} text={operation} type={operation} />
                )}
            </div>
        </div>
    )
}

export default Timer