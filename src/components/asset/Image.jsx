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
import Title from '../title';


// Affichage de la page de l'image avec les détails
const Image = ({ description, href, title, date }) => (
  <div clasName="container">
    <div className="text-center row mx-auto">
      <div className="col">
        <Title title={title} />
        <p>{date}</p>
        <p>{description}</p>
        <div className="row text-center mx-auto d-flex justify-content-center">
          <div>
            <FacebookShareButton url={href}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div>
            <TwitterShareButton url={href} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div>
            <LinkedinShareButton url={href} title={title}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div>
            <WhatsappShareButton url={href} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div>
            <PinterestShareButton url={href} media={href} description={title}>
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </div>
          <div>
            <RedditShareButton url={href} title={title}>
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>
          <div>
            <TumblrShareButton url={href} title={title}>
              <TumblrIcon size={32} round />
            </TumblrShareButton>
          </div>
        </div>
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
