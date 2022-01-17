import React,{useReducer} from 'react'

const initialState = 0;


type ActionType = {
    type: 'Increment' | 'Decrement'
}

const reducer = (state : number, action : ActionType) => {
    switch(action.type){
        case 'Increment':
            return state+1;
        case 'Decrement':
            return state-1;
        default:
            return state;
    }
}

function Reducer1() {

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            Count: {state}
            <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
            
        </div>
    )
}

export default Reducer1
