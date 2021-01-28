import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './CounterAction'
import { useState } from 'react'

import Button from 'react-bootstrap/Button'

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [showCounter, setCounter] = useState(0);

    return (
        <div>
            <h2>Counter = {counter}</h2>
            <br />
            <input type="number" value={showCounter} onChange={(e) => setCounter(e.target.value)} />
            <Button variant="success" onClick={() => dispatch(increment(showCounter))}>increment</Button>
            <Button  variant="warning" onClick={() => dispatch(decrement(showCounter))}>decrement</Button>
        </div>
    )

}

export default Counter;