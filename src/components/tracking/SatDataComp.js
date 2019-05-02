import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './trackerSat.css';

const SatDataComp = ({
  launchDate,
  hits,
  position
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
            {(Number(position.lat)).toFixed(2)}
            deg
          </p>
        </div>
        <div>
          Longitude :
          <p>
            {(Number(position.lng)).toFixed(2)}
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
  position: PropTypes.object.isRequired,
  hits: PropTypes.object,
  launchDate: PropTypes.array.isRequired
};

export default SatDataComp;
