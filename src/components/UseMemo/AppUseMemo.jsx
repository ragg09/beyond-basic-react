import React, { useState } from 'react'
import { useMemo } from 'react';

export default function AppUseMemo() {
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([1,2,3]);

    console.log('I am rendering');

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function addNumber() {
        console.log('Too long to compute');

        for (let index = 0; index < 2_000_000_000; index++) {
        }

        return arr.reduce((a,b) => a+b,0);
    }

    const memoizedAddNumbers = useMemo(addNumber, [arr])

    function changeArray() {
        setArr([1,2,3,4]);
    }
  return (
        <div>
            <h1>Use Memo Lesson</h1>
            <br></br>
            <p>Count: {count}</p>
            <button onClick={increment}>
                Increment
            </button>

            <div className='mt-3'>
                <button onClick={changeArray}>Change array of number</button>
                <p>Expensin Computation: {memoizedAddNumbers}</p>
            </div>
        </div>
  )
}
