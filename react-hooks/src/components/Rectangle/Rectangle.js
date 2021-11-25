import React from "react";
import styles from './Rectangle.module.css';

const Rectangle = (props) => {
    const style = {
        width: 80,
        height: 80,
        backgroundColor: 'red'
    }

    return (
        <div style={style} className={styles.wrapper}>
            Rectangle
        </div>
    )
}

export {Rectangle};