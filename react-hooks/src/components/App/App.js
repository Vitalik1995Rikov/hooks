import React, {useState} from 'react';
import { Rectangle } from '../Rectangle/Rectangle';
import styles from './App.module.css';

const App = (props) => {

    const [top, setTop] = useState(10);
    const [left, setLeft] = useState(10);

    function handleMouseMove(e) {
        const { movementX, movementY } = e;
        
        console.log()
        setLeft(left + movementX);
        setTop(top + movementY);
    }

    return (
        <div className={styles.wrapper}
            onMouseMove={handleMouseMove}>
            <Rectangle
            top={top}
            left={left}
            />
        </div>
    )
}

export default App;
