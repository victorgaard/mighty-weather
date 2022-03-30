import React from "react";
import mapIcon from "./map-pin.svg";
import loadingIcon from "../SearchBar/loader.svg";

function Location({
    loadingCoord,
    getCoordinates }) {

    return (
        <>
            {loadingCoord &&
                <button
                    className="Nav__button--disabled"
                    disabled>
                    <img
                        className="rotate"
                        src={loadingIcon}
                        alt="Map icon" />
                </button>}

            {!loadingCoord &&
                <button
                    className="Nav__button"
                    onClick={getCoordinates}>
                    <img
                        src={mapIcon}
                        alt="Map icon" />
                </button>}
        </>
    )
}

export default Location;
