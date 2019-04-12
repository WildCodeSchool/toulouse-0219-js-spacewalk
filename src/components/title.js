import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const Title = ({ title, idStyle }) => (
  <div className={idStyle}>
    <h1>{title}</h1>
  </div>
);


Title.propTypes = {
  title: PropTypes.string.isRequired,
  idStyle: PropTypes.string.isRequired,

};
export default Title;
