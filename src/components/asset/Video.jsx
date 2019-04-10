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
import React from 'react';
import { Player } from 'video-react';
import Title from '../title';
// Affichage de la page de la vidéo avec les détails et le player
const Video = ({ description, title, id, href }) => (
  <div className="container">
    <div className="mb-5">
      <Title title={title} />
      <p>{description}</p>
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
