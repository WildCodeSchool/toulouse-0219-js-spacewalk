import PropTypes from 'prop-types';
import React from 'react';
import Title from '../title';

const Image = ({ description, href, title }) => (
  <div className="text-center">
    <Title title={title} />
    <p>{description}</p>
    <img alt={title} src={href} />
  </div>
);

Image.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Image;
