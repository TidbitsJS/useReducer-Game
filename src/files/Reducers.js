import React, { useReducer } from 'react'

// const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}

        case 'reset':
            return {count: state.count = 0}

        case 'decrement':
            return {count: state.count - 1}
        
        default:
            throw new Error()
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <>
         <div>
            <h1>Count : {state.count}</h1>
         </div>
         <div>
            <button 
              onClick={ () => dispatch({type: 'decrement'})}> 
                -
            </button>
            <button
               onClick={ () => dispatch({type: 'reset'})}>
               reset
            </button>
            <button
               onClick={ () => dispatch({type: 'increment'})}> 
               +
            </button>
         </div>

        </>
    )
}

export default Counter 