import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './trackerSat.css';

const SatDataComp = ({
  launchDate,
  hits,
  lat,
  lng
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
              Time (UTC) :
              <p>
                {new Date().toUTCString()}
              </p>
            </div>
          )}
      </div>
    </Fragment>
  );
};

SatDataComp.propTypes = {
  lng: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  alti: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  hits: PropTypes.object,
  launchDate: PropTypes.array.isRequired
};

export default SatDataComp;
