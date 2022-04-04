import React, { useState, useEffect } from 'react';
import { Body } from '../Body';
import { Navbar } from '../Navbar';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingCoord, setLoadingCoord] = useState(false);
  const [permissionCoord, setPermissionCoord] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchHasAnyValue, setSearchHasAnyValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setLoadingCoord(false);
    }, 2500);
  }, [weather]);

  // Get the user location
  // from the browser API
  function getCoordinates() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      setSearchValue('');
      setSearchHasAnyValue(false);
      setLoadingCoord(true);
      setPermissionCoord(true);
      setLoading(true);
      const crd = pos.coords;
      const lat = crd.latitude.toString();
      const lon = crd.longitude.toString();
      getWeather(lat, lon);
    }

    function error(err) {
      setPermissionCoord(false);
      console.log(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  // Get the weather forecast from
  // latitude and longitude
  async function getWeather(lat, lon) {
    if (!lat || !lon) {
      getCoordinates();
    }

    if (lat && lon) {
      getTimezone(lat, lon);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_OW}&lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY_OW}`
        );

        if (response.ok) {
          const responseJson = await response.json();
          const city = responseJson.name;
          const sky = responseJson.weather[0].main;
          const description = responseJson.weather[0].description;
          const iconId = responseJson.weather[0].icon;
          const temp = Math.floor(responseJson.main.temp);
          const feelsLike = Math.floor(responseJson.main.feels_like);
          const maxTemp = Math.floor(responseJson.main.temp_max);
          const minTemp = Math.floor(responseJson.main.temp_min);
          const humidity = responseJson.main.humidity;

          const newWeather = {
            city: city,
            sky: sky,
            description: description,
            iconId: iconId,
            temp: temp,
            feelsLike: feelsLike,
            maxTemp: maxTemp,
            minTemp: minTemp,
            humidity: humidity,
          };

          setWeather(newWeather);
        }
      } catch (error) {
        return console.log(error);
      }
    }
  }

  // Get the timezone of a location's
  // latitude and longitude
  async function getTimezone(lat, lon) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_OW_TZ}&lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY_OW}`
      );

      if (response.ok) {
        const responseJson = await response.json();
        setTimezone(responseJson.timezone);
      }
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <div className="App">
      <div className="Container">
        <Navbar
          loadingCoord={loadingCoord}
          permissionCoord={permissionCoord}
          getCoordinates={getCoordinates}
          getWeather={getWeather}
          setLoading={setLoading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchHasAnyValue={searchHasAnyValue}
          setSearchHasAnyValue={setSearchHasAnyValue}
        />

        <Body weather={weather} loading={loading} timezone={timezone} />
      </div>
    </div>
  );
}

export { App };
