import React from "react";
import { store } from '../../store/store';


const App = (props) => {
    return (
        <div>
            <button onClick={() => store.dispatch({type: 'INCREMENT'})}>INCREMENT</button>
            <button onClick={() => store.dispatch({type: 'DECREMENT'})}>DECREMENT</button>
        </div>
    )
} 

export default App;