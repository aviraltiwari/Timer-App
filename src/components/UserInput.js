import React, { useContext } from 'react'
import Buttons from './Buttons'
import TimerContext from "../contexts/timerContext";

function UserInput() {
    const { minute, second, running, setMinute, setSecond } = useContext(TimerContext);
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
            {/* {running && <h1>Please Stop The Timer To Edit The Stop Watch</h1>} */}
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