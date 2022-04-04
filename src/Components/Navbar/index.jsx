import React from "react";
import Location from "../Location";
import SearchBar from "../SearchBar";

function Navbar({
  loadingCoord,
  permissionCoord,
  getCoordinates,
  getWeather,
  setLoading,
  searchValue,
  setSearchValue,
  searchHasAnyValue,
  setSearchHasAnyValue,
}) {
  return (
    <div className="Nav">
      <Location
        loadingCoord={loadingCoord}
        permissionCoord={permissionCoord}
        getCoordinates={getCoordinates}
      />

      <SearchBar
        getWeather={getWeather}
        setLoading={setLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchHasAnyValue={searchHasAnyValue}
        setSearchHasAnyValue={setSearchHasAnyValue}
      />
    </div>
  );
}

export default Navbar;
