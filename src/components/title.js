import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const Title = ({ title, IdStyle }) => (
  <div className={IdStyle}>
    <h1>{title}</h1>
  </div>
);


Title.propTypes = {
  title: PropTypes.string.isRequired,
  IdStyle: PropTypes.string.isRequired,

};
export default Title;
