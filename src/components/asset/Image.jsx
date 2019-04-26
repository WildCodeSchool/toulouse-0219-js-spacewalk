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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from 'react';
import Title from '../title';


// Affichage de la page de l'image avec les détails
const Image = (
  {
    description, href, title, date, keywords, modal, id, toggle
  }
) => (
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
            <p>{description}</p>
            <img className="shadow p-3 mb-3 bg-white rounded img-fluid" alt={title} src={href} />
          </div>
          <Button color="danger" onClick={toggle}>High Res Image</Button>

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
              <img src={`http://images-assets.nasa.gov/image/${id}/${id}~large.jpg`} alt={title} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Do Something</Button>
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>



          <div className="row text-center mx-auto d-flex justify-content-center mb-5">
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
