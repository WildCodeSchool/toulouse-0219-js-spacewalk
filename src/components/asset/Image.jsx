import PropTypes from 'prop-types';
import React from 'react';
import Title from '../title';
// Affichage de la page de l'image avec les détails
const Image = ({ description, href, title, date }) => (
  <div clasName="container">
    <div className="text-center row mx-auto">
      <div className="col">
        <Title title={title} />
        <p>{date}</p>
        <p>{description}</p>
        <img className="shadow p-3 mb-5 bg-white rounded" alt={title} src={href} />
      </div>
    </div>
  </div>
);

Image.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Image;
