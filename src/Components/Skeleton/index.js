import React from "react";

function Skeleton({ type }) {
    const classes = `Skeleton ${type}`;

    return (
        <div className="Skeleton__wrapper">
            <div className={classes}></div>
        </div>
    )
}

export default Skeleton