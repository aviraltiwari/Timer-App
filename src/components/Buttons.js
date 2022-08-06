import React, { useContext } from 'react'
import TimerContext from '../contexts/timerContext';

function Buttons({ text, type }) {
    const {
        minute,
        second,
        running,
        paused,
        setTime,
        setMinute,
        setSecond,
        setRunning,
        setPaused,
        setContinueTimer,
        setTimerString
    } = useContext(TimerContext);

    // Added a handleClick function to the Buttons component
    // Also added a condition to the handleClick function to check if the timer is running or not
    // Also added logic for each button to perform different actions

    const handleClick = () => {
        // If the timer is running and the button is clicked, then minute and second will be reset to 0
        // And Time state will be set to the value of the minute and second input
        // Time state will be used to stop the timer
        if (type === "start") {
            if (!running) {
                setRunning(true);
                setPaused(false);
                setTimerString(
                    minute < 10 && second < 10 ? `0${minute}:0${second}` :
                        (minute < 10 ? `0${minute}:${second}` :
                            (second < 10 ? `${minute}:0${second}` :
                                `${minute}:${second}`))
                );
                setMinute(0);
                setSecond(0);
                setTime(`${minute}:${second}`);
            }
        }
        // If the timer is running and the button is clicked, then the timer will be paused
        if (type === "pause") {
            setPaused(true);
        }
        // If the timer is paused and the button is clicked, then the timer will be continued
        if (type === "continue") {
            if (paused) {
                setPaused(false);
            }
        }
        // If the timer is running and the button is clicked, then the timer will be stopped
        if (type === "reset") {
            setMinute(3);
            setSecond(0);
            setRunning(false);
            setPaused(false);
            setTimerString('03:00')
        }
        // This will submit the minute and second input to the setMinute and setSecond functions
        if (type === "submit") {
            setTime(`${minute}:${second}`);
            setTimerString(minute < 10 && second < 10 ? `0${minute}:0${second}` :
                (minute < 10 ? `0${minute}:${second}` :
                    (second < 10 ? `${minute}:0${second}` :
                        `${minute}:${second}`)))
        }
    }

    return (
        <button className='button' onClick={handleClick}>{text === 'start' && running ? 'started' : text}</button>
    )
}

export default Buttons