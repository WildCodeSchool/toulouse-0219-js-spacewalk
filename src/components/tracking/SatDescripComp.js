import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './trackerSat.css';

const SatDescripComp = ({
  submitSatSelect,
  onChange,
  hits,
  satList,
  satDescrip,
  satName
}) => {
  return (
    <Fragment>
      <div className="describeStyle">
        {
          hits && (
            <div>
              <form onSubmit={submitSatSelect}>
                <label htmlFor="satChoose">
                  <p>Choose the satellite you want to track :</p>
                  <select
                    name="satChoose"
                    value={satName}
                    onChange={onChange}
                  >
                    {satList}
                  </select>
                </label>
                <Button
                  type="submit"
                  value="Submit"
                  color="light"
                // size="lg"
                >
                  Submit
                </Button>
              </form>
              <div>
                <h4 className="text-center mt-2">Satellite infos</h4>
                {satDescrip}
              </div>
            </div>
          )
        }
      </div>
    </Fragment>
  );
};

SatDescripComp.propTypes = {
  submitSatSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  hits: PropTypes.object.isRequired,
  satList: PropTypes.array.isRequired,
  satDescrip: PropTypes.string.isRequired,
  satName: PropTypes.string.isRequired
};

export default SatDescripComp;
