import React from "react";
import { store } from '../../store/store';
const state = store.getState();


const App = (props) => {
    return (
        <div>
            <p>
                {state.user.balance}
            </p>
            <button onClick={() => store.dispatch({type: 'CHANGE_BALANCE', payload: {balance: 6000}})}>CHANGE BALANCE</button>
            <button onClick={() => store.dispatch({type: 'ADD_ORDER'})}>ADD ORDER</button>
        </div>
    )
} 

export default App;