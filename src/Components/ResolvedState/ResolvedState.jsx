import React from 'react';

function ResolvedState({ weather, getCurrentDate, timezone, getIcon }) {
  return (
    <div className="Body__wrapper">
      <h2>{weather.city}</h2>

      <div className="Body__title">
        <p>{getCurrentDate('date', timezone)}</p>
        <p>{getCurrentDate('time', timezone)}</p>
      </div>

      <div className="Body__img--active">
        <img src={getIcon(weather.iconId)} alt="Temperature" />
      </div>

      <div className="Body__temp">
        <div className="Body__temp--celsius">
          <h1>{weather.temp}</h1>
          <h2>°C</h2>
        </div>
        <div className="Body__temp--description">
          <h2>{weather.sky}</h2>
          <p>{weather.description}</p>
        </div>
      </div>

      <div className="Body__feels-like">
        <p>Feels like {weather.feelsLike}°C</p>
      </div>
    </div>
  );
}

export { ResolvedState };
