import React from 'react';
import { Rectangle } from '../Rectangle/Rectangle';
import styles from './App.module.css';

const App = (props) => {

    function handleMouseMove(e) {
        console.log(e)
    }

    return (
        <div className={styles.wrapper}
            onMouseMove={handleMouseMove}>
            <Rectangle
            top={80}
            left={80}
            />
        </div>
    )
}

export default App;
