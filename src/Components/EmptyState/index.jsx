import React from "react";
import iconEmpty from '../util/GetIcon/assets/iconEmpty.png';
import iconEmptyb from '../util/GetIcon/assets/iconEmpty@2x.png';

function EmptyState() {
  return (
    <>
      <div className="Body__empty-h2">
        <h2>Welcome to the weather app</h2>
      </div>

      <div className="Body__img">
        <img src={iconEmpty} srcSet={`${iconEmptyb} 1x, ${iconEmptyb} 2x`} alt="Temperature" />
      </div>

      <div className="Body__empty">
        <p>
          Enable your location or
          <br />
          search for your city
        </p>
      </div>
    </>
  );
}

export default EmptyState;
