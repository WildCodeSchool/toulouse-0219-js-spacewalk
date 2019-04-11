import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import React from 'react';
import Title from '../title';

// Affichage de la page de l'image avec les détails
const Image = ({ description, href, title, date, keywords }) => (
  <div className="container">
    <Link to="/search">
      <div className="btn btn-light mt-4">Back to results</div>
    </Link>
    <div className="text-center row mx-auto">
      <div className="col">


        <Title title={title} IdStyle="titleSecond" />
        <p>{date}</p>
        <div>
          {/* Affichage de chaque mot-clé dans un badge */}
          {keywords[0] && keywords[0].map(keyword => (
            <div className="badge badge-primary mr-1">{keyword}</div>
          ))}
        </div>
        <div>
          <p>{description}</p>
          <img className="shadow p-3 mb-5 bg-white rounded img-fluid" alt={title} src={href} />
        </div>
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
