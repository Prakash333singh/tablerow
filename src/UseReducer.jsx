import React, { useReducer } from 'react'

const useReducer = () => {
    //const [count,dispatch]=useReducer(reducer,initialValue);//syntax
    const reducer = (state, action) => {
        if (action.type === 'increment') {
            return state + 1;
        }
        if (action.type === 'decrement' && state > 0) {
            return state - 1;
        } else {
            return state;
        }
    }


    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <button onClick={() => dispatch({ type: "increment" })} className='bg-red-400 p-6 m-3 rounded-xl'>+</button>
            <span className='m-2 text-3xl font-extrabold'> {count}</span>
            <button onClick={() => dispatch({ type: "decrement" })} className='bg-red-400 p-6 m-3 rounded-xl '>-</button>
        </div>
    )
}

export default useReducer;