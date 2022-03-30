import React from "react";
import Location from "../Location";
import SearchBar from "../SearchBar";

function Navbar({
    loadingCoord,
    getCoordinates,
    getWeather,
    setLoading }) {

    return (
        <div className="Nav">
            <Location
                loadingCoord={loadingCoord}
                getCoordinates={getCoordinates} />

            <SearchBar
                getWeather={getWeather}
                setLoading={setLoading} />
        </div>
    )
}

export default Navbar;
