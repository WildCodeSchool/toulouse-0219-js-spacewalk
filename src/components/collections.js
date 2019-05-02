import React from 'react';
import './collections.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const Collections = ({ url, name, handleTag, i }) => (
  <div
    role="button"
    tabIndex={i + 1}
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
