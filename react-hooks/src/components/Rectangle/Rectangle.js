import React from "react";
import PropTypes from 'prop-types';
import styles from './Rectangle.module.css';

const Rectangle = (props) => {
    const { top, left } = props;
    const style = {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        top,
        left
    }

    return (
        <div style={style} className={styles.wrapper}>
            Rectangle
        </div>
    )
}

Rectangle.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number
}

export {Rectangle};