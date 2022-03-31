import React, { useEffect, useState } from "react";
import SearchResults from "../SearchResults";
import searchIcon from "./search.svg";
import loadingIcon from "./loader.svg";

function SearchBar({ 
    getWeather,
    setLoading, }) {

    const [icon, setIcon] = useState("search");
    const [cityResults, setCityResults] = useState();
    const [latLon, setLatLon] = useState();

    useEffect(() => {
        if (latLon) {
            setLoading(true);
            getWeather(latLon[0], latLon[1]);
            setCityResults(null);
            setLatLon(null);
        }
    }, [latLon]);

    // Search for a city on OpenWeather API,
    // then return the cities found
    async function searchCity(city) {
        document.getElementById("validation").innerHTML = "";

        if (!city) {
            return;
        }

        try {
            console.log('fetchei')
            const response = await fetch(`${process.env.REACT_APP_URL_OW_GC}${city}&limit=5&appid=${process.env.REACT_APP_API_KEY_OW}`);

            if (response.ok) {
                setIcon("search");
                const responseJson = await response.json();
                setCityResults(responseJson);

                if (responseJson.length === 0) {
                    document.getElementById("validation").innerHTML = `${city} was not found.`;
                };
            };

        } catch (error) {
            return console.log(error);
        };
    };

    // Wait 1s after the user has stopped 
    // typing to make the search
    let timeout;
    function handleKeyUp({ target }) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            searchCity(target.value);
        }, 1000)
    };

    // Make loading icon visibile 
    // when the user is typing
    function handleChange({ target }) {
        if (target.value.length === 0) {
            setIcon("search");
            return;

        } else {
            setIcon("loading");
        }
    }

    // Make the search results div re-appear
    // when user clicks back to SearchBar input
    function handleFocus() {
        document.getElementById("SearchBar__results").style.display = "block";
    }

    // When the user clicks outside of the
    // SearchBar div, the results disappear
    function hideSearch() {
        document.getElementById("SearchBar__results").style.display = "none";
    }

    // Monitoring clicks outside of SearchBar div
    document.addEventListener('click', function (event) {
        const ignoreClickOnMeElement = document.querySelector(".SearchBar");
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);

        if (!isClickInsideElement) {
            hideSearch();
        }
    });

    return (
        <div className="SearchBar">
            <img
                src={searchIcon}
                alt="Search"
                className="SearchBar__img--search" />

            {icon === "loading" &&
                <img
                    src={loadingIcon}
                    alt="Loading..."
                    className="SearchBar__img--loading rotate" />}

            <input
                id="SearchBar"
                className="SearchBar__input"
                placeholder="Search your city"
                autoComplete="off"
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                onFocus={handleFocus} />

            <SearchResults
                cityResults={cityResults}
                setLatLon={setLatLon} />

            <p id="validation"></p>
        </div>
    )
}

export default SearchBar;