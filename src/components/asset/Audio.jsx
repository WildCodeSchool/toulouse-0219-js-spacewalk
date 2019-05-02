import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import Title from '../title';


// Affichage de la page de l'image avec les détails
const Audio = ({
  description, href, title, date, id, keywords
}) => (
    <div className="container">

      <div className="text-center row mx-auto">
        <div className="col">


          <Title title={title} idStyle="titleSecond" />
          <p>{date}</p>
          <div>
            {/* Affichage de chaque mot-clé dans un badge */}
            {keywords[0] && keywords[0].map(keyword => (
              <div className="badge badge-primary mr-1">{keyword}</div>
            ))}
          </div>
          <div>
            <ReactAudioPlayer
              controls
              src={`http://images-assets.nasa.gov/audio/${id}/${id}~128k.mp3`}
              className="m-4"
            />
            <p>{description}</p>

          </div>

        </div>
      </div>
    </div>
  );

Audio.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,

};

export default Audio;
