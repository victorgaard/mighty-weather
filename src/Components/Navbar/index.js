import React from "react";
import Location from "../Location";
import SearchBar from "../SearchBar";

function Navbar({
    loadingCoord,
    permissionCoord,
    getCoordinates,
    getWeather,
    setLoading }) {

    return (
        <div className="Nav">
            <Location
                loadingCoord={loadingCoord}
                permissionCoord={permissionCoord}
                getCoordinates={getCoordinates} />

            <SearchBar
                getWeather={getWeather}
                setLoading={setLoading} />
        </div>
    )
}

export default Navbar;
