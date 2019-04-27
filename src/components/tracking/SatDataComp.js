import React, { Fragment } from 'react';
import './trackerSat.css';

const SatDataComp = ({
  launchDate,
  hits,
  lat,
  lng,
  alti,
  time
}) => {
  return (
    <Fragment>
      <div className="data-display">
        <div>
          Launch date :
          <p>
            {launchDate}
          </p>
        </div>
        <div>
          Latitude :
          <p>
            {lat}
            deg
          </p>
        </div>
        <div>
          Longitude :
          <p>
            {lng}
            deg
          </p>
        </div>
        {
          hits && (
            <div>
              Altitude:
              <p>
                {alti}
                km
              </p>
            </div>
          )}
        {
          hits && (
            <div>
              Time (UTC) :
              <p>
                {new Date(time * 1000).toUTCString()}
              </p>
            </div>
          )}
      </div>
    </Fragment>
  );
};

export default SatDataComp;
