import React, { useEffect, useState, useRef } from 'react';
import { SearchResults } from '../SearchResults';
import searchIcon from './search.svg';
import loadingIcon from './loader.svg';

function SearchBar({
  getWeather,
  setLoading,
  searchValue,
  setSearchValue,
  searchHasAnyValue,
  setSearchHasAnyValue,
}) {
  const [icon, setIcon] = useState('search');
  const [cityResults, setCityResults] = useState(null);
  const [latLon, setLatLon] = useState(null);
  const [feedbackMsg, setFeedbackMessage] = useState('');
  const [resultsVisible, setResultsVisible] = useState(false);
  const [cursor, setCursor] = useState(-1);

  const searchBar = useRef(null);

  useEffect(() => {
    if (latLon) {
      setLoading(true);
      getWeather(latLon[0], latLon[1]);
      setCityResults(null);
      setLatLon(null);
    }
  }, [latLon]);

  useEffect(() => {
    let timeout;

    if (!searchValue) {
      setIcon('search');
      setFeedbackMessage('');
    }

    if (searchValue) {
      const searchSplit = searchValue.split('-');

      // Check if search value is user input
      // or the formatted response
      if (
        searchSplit.length >= 3 &&
        searchSplit[searchSplit.length - 1].length === 3
      ) {
        setIcon('search');
        return;
      }

      // Loading icon appears
      // Clean search icon hidden
      setIcon('loading');
      setSearchHasAnyValue(false);

      // Handle search after
      // user input timeout
      timeout = setTimeout(() => {
        searchCity(searchValue);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBar]);

  // Search for a city on OpenWeather API,
  // then return the cities found
  async function searchCity(city) {
    setFeedbackMessage('');

    if (!city) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_OW_GC}${city}&limit=5&appid=${process.env.REACT_APP_API_KEY_OW}`
      );

      if (response.ok) {
        setIcon('search');
        const responseJson = await response.json();
        setCityResults(responseJson);

        if (responseJson.length === 0) {
          setFeedbackMessage(`${city} was not found.`);
        }
      }
    } catch (error) {
      return console.log(error);
    }
  }

  // Make loading icon visibile
  // when the user is typing
  function handleChange({ target }) {
    setSearchValue(target.value);
  }

  // Make the search results div re-appear
  // when user clicks back to SearchBar input
  function handleFocus() {
    setResultsVisible(true);
  }

  // When the user clicks outside of the
  // SearchBar div, the results disappear
  function handleClickOutside({ target }) {
    if (searchBar.current && !searchBar.current.contains(target)) {
      hideResults();
    }
  }

  function hideResults() {
    setResultsVisible(false);
  }

  function handleClean() {
    setSearchHasAnyValue(false);
    setSearchValue('');
  }

  function handleKeyboardNavigation(event) {
    if (cityResults && event.key === 'ArrowDown') {
      setCursor((c) => (c < cityResults.length - 1 ? c + 1 : c));
    }

    if (cityResults && event.key === 'ArrowUp') {
      setCursor((c) => (c > 0 ? c - 1 : c));
    }

    if (cityResults && event.key === 'Enter') {
      document.querySelector('.active').click();
      setCursor(-1);
    }
  }

  return (
    <div className="SearchBar" ref={searchBar}>
      {searchHasAnyValue ? (
        <button className="SearchBar__clean" onClick={handleClean}>
          &times;
        </button>
      ) : (
        <img src={searchIcon} alt="Search" className="SearchBar__img--search" />
      )}

      {icon === 'loading' && (
        <img
          src={loadingIcon}
          alt="Loading..."
          className="SearchBar__img--loading rotate"
        />
      )}

      <input
        id="SearchBar"
        className="SearchBar__input"
        placeholder="Search your city"
        autoComplete="off"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyboardNavigation}
        onFocus={handleFocus}
      />

      {cityResults ? (
        resultsVisible ? (
          <SearchResults
            cityResults={cityResults}
            setSearchValue={setSearchValue}
            setSearchHasAnyValue={setSearchHasAnyValue}
            setLatLon={setLatLon}
            cursor={cursor}
          />
        ) : (
          ''
        )
      ) : (
        ''
      )}

      <p>{feedbackMsg}</p>
    </div>
  );
}

export { SearchBar };
