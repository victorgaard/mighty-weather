import React from "react";

function SearchResults({
  cityResults,
  setLatLon,
  setSearchHasAnyValue,
  setSearchValue,
  cursor,
}) {

  // When a button is clicked, the value is transferred to the input
  // Saves latitude and longitude from the clicked button

  function handleClick({ target }) {
    setSearchValue(target.innerHTML);
    setLatLon([target.getAttribute("lat"), target.getAttribute("lon")]);
    setSearchHasAnyValue(true);
  }

  return (
    <div className="SearchBar__results" id="SearchBar__results">
      {cityResults &&
        cityResults.map((city, index) => {
          return (
            <button
              className={`SearchBar__results--button ${index === cursor ? "active" : ""}`}
              key={index}
              lat={city.lat}
              lon={city.lon}
              onClick={handleClick}
            >
              {city.name} -{city.state && ` ${city.state} -`} {city.country}
            </button>
          );
        })}
    </div>
  );
}

export { SearchResults };
