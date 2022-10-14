import { useReducer } from 'react';
import { useState } from 'react';

const initailState = {
    count: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return{count: state.count + 1}
        case 'decrement':
            return{count: state.count - 1}
        default:
            break;
    }
}

export default function Counter() {

    const [state, dispatch] = useReducer(reducer, initailState)

    //codes below are used before reducer is implemented
    // const [count, setCount] = useState(0);

    // function increment() {
    //     setCount(prevCount => prevCount + 1);
    // }

    // function decrement() {
    //     setCount(prevCount => prevCount - 1);
    // }

    return (
      <div>
            <div>Count: {state.count}</div>
            <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
      </div>
    );
}
