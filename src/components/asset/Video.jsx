import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
} from 'react-share';


import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import { Player } from 'video-react';
import Title from '../title';
// Affichage de la page de la vidéo avec les détails et le player
const Video = ({ description, title, id, keywords, date, href }) => (
  <div className="container mx-auto">
    <Link to="/search">
      <div className="btn btn-light mt-4">Back to results</div>
    </Link>
    <div className="row text-center mx-auto mb-5">
      <div className="col">
        <Title title={title} IdStyle="titleSecond" />
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

        <div className="row text-center mx-auto d-flex justify-content-center mb-3">
          <div>
            <FacebookShareButton url={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div>
            <TwitterShareButton url={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div>
            <LinkedinShareButton url={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`} title={title}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div>
            <WhatsappShareButton url={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div>
            <PinterestShareButton url={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`} media={href} description={title}>
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </div>
          <div>
            <RedditShareButton url={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`} title={title}>
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>
          <div>
            <TumblrShareButton url={`http://images-assets.nasa.gov/video/${id}/${id}~medium.mp4`} title={title}>
              <TumblrIcon size={32} round />
            </TumblrShareButton>
          </div>
        </div>
      </div>
    </div>
  </div>
);


Video.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Video;
