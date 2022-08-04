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


    const handleClick = () => {
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
        if (type === "pause") {
            setPaused(true);
        }
        if (type === "continue") {
            if (paused) {
                setPaused(false);
                setContinueTimer(true);
            }
        }
        if (type === "reset") {
            setMinute(3);
            setSecond(0);
            setRunning(false);
            setPaused(false);
            setTimerString('03:00')
        }
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