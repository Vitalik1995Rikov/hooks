import React from "react";

const Rectangle = (props) => {
    const style = {
        width: 80,
        height: 80,
        backgroundColor: 'red'
    }

    return (
        <div style={style}>
            Rectangle
        </div>
    )
}

export {Rectangle};