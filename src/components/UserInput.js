import React, { useContext } from 'react'
import Buttons from './Buttons'
import TimerContext from "../contexts/timerContext";

function UserInput() {
    const { minute, second, running, setMinute, setSecond } = useContext(TimerContext);
    // ifPositive is a helper function to check if the input is a positive number
    // if the input is a positive number, it will execute the callback function
    // if the input is a negative number, it will console.log an error message
    // and execute the callback function with a default value of 0
    const ifPositive = (num, cb) => {
        if (num >= 0) {
            cb(num)
        } else {
            console.log("Please enter a positive number " + num);
            cb(0);
        }
    }
    return (
        <div className='user-input-container'>
            <div className="user-input">
                <h2>Please Enter An Input Or Start The Timer With 3 Mins</h2>
                <div className='input-container'>
                    <input className={running ? 'disabled' : ''} type='number' value={minute} onChange={(e) => ifPositive(e.target.value, setMinute)} />
                    <input className={running ? 'disabled' : ''} type='number' value={second} onChange={(e) => ifPositive(e.target.value, setSecond)} />
                </div>
                <Buttons text='submit' type='submit' />
            </div>
        </div>
    )
}

export default UserInput