import PropTypes from 'prop-types';
import React from 'react';
import { Player } from 'video-react';
import Title from '../title';
// Affichage de la page de la vidéo avec les détails et le player
const Video = ({ description, title, id }) => (
  <div className="container">
    <div className="asset-video">
      <Title title={title} />
      <p>{description}</p>
      <Player
        playsInline
        src={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`}
      />
    </div>
  </div>
);

Video.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Video;