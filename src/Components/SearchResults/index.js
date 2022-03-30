import React from "react";

function SearchResults({
    cityResults,
    setLatLon }) {

    // When a button is clicked, the value is transferred to the input
    // Saves latitude and longitude from the clicked button

    function handleClick({ target }) {
        document.getElementById("SearchBar").value = target.innerHTML;
        setLatLon([target.getAttribute("lat"), target.getAttribute("lon")]);
    }

    return (
        <div className="SearchBar__results" id="SearchBar__results">
            {cityResults && cityResults.map((city, index) => {
                return (
                    <button
                        className="SearchBar__results--button"
                        key={index}
                        lat={city.lat}
                        lon={city.lon}
                        onClick={handleClick}>
                        {city.name} -{city.state && ` ${city.state} -`} {city.country}
                    </button>
                )
            })}
        </div>
    )
}

export default SearchResults;
