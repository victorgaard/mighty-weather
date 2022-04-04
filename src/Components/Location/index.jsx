import React from 'react';
import mapIcon from './map-pin.svg';
import mapIconDisabled from './map-pin-disabled.svg';
import loadingIcon from '../SearchBar/loader.svg';

function Location({ loadingCoord, permissionCoord, getCoordinates }) {
  return (
    <>
      {permissionCoord ? (
        loadingCoord ? (
          <button className="Nav__button--disabled" disabled>
            <img className="rotate" src={loadingIcon} alt="Map icon" />
          </button>
        ) : (
          <button className="Nav__button" onClick={getCoordinates}>
            <img src={mapIcon} alt="Map icon" />
          </button>
        )
      ) : (
        <>
          <button className="Nav__button--denied" onClick={getCoordinates}>
            <img src={mapIconDisabled} alt="Map icon disabled" />
          </button>
          <div className="Nav__coords--denied">
            <p>
              Access to location was denied. Please allow location from your
              browser settings.
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Location;
