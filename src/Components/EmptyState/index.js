import React from "react";

function EmptyState({ getIcon }) {

    return (
        <>
            <div className="Body__empty-h2">
                <h2>Welcome to the weather app</h2>
            </div>

            <div className="Body__img">
                <img
                    src={getIcon('empty')}
                    alt="Temperature" />
            </div>

            <div className="Body__empty">
                <p>Enable your location or<br />search for your city</p>
            </div>
        </>
    )
}

export default EmptyState;
