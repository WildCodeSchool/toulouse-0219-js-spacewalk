import React from 'react';
import './collections.css';
import PropTypes from 'prop-types';

const Collections = ({ url, name, handleTag, i }) => (
  <div
    role="button"
    tabIndex={i}
    className="allCollections"
    style={{
      backgroundImage: `url(${url})`,
      cursor: 'pointer'
    }}
    onClick={() => handleTag(name)}
    onKeyPress={() => handleTag(name)}
  >
    <p>{name}</p>
  </div>
);

Collections.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleTag: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired
};

export default Collections;
