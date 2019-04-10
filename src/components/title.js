import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const Title = ({ title }) => (
  <div id="title">
    <h1>{title}</h1>
  </div>
);


Title.propTypes = {
  title: PropTypes.string.isRequired,

};
export default Title;
