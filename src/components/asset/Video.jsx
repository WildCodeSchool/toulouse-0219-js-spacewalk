import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import { Player } from 'video-react';
import Title from '../title';
// Affichage de la page de la vidéo avec les détails et le player
const Video = ({ description, title, id, keywords, date }) => (
  <div className="container mx-auto">
    <Link to="/search">
      <div className="btn btn-light mt-4">Back to results</div>
    </Link>
    <div className="row text-center mx-auto mb-5">
      <div className="col">
        <Title title={title} idStyle="titleSecond" />
        <div>
          <p>{date}</p>

          {/* Affichage de chaque mot-clé dans un badge */}
          {keywords[0] && keywords[0].map(keyword => (
            <div className="badge badge-primary mr-1">{keyword}</div>
          ))}
        </div>
        <p>{description}</p>


        <Player
          playsInline
          src={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`}
          className="mb-3"
        />
      </div>
    </div>
  </div>
);


Video.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Video;
