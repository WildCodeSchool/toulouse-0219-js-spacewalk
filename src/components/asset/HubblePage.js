import React, { Component } from 'react';
import Title from '../title';
import excerptDate from '../../functions/excerptDate';
import { Link } from 'react-router-dom';

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

class HubblePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    fetch("https://hubblesite.wild31.com/api/v3/external_feed/esa_feed?page=all", {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          article: data,
        });
      });

  }

  render() {

    const idArticle = this.props.location.pathname.split('/')
    const matchArticle = this.state.article.find(article => article.pub_date === idArticle[2]);
    if (!matchArticle) return <div />;

    return (
      <div className="container">

        <div className="text-center row mx-auto">
          <Link to="/search">
            <div className="btn btn-light mt-4">Back to results</div>
          </Link>
          <div className="col">
            <Title title={matchArticle.title} idStyle="titleSecond" />
            <p>{excerptDate(matchArticle.pub_date)}</p>
            <div>
              <p>{matchArticle.description}</p>
              <img className="shadow p-3 mb-3 bg-white rounded img-fluid" alt={matchArticle.title} src={matchArticle.image} />
            </div>
            <div className="row text-center mx-auto d-flex justify-content-center mb-5">
              <div>
                <FacebookShareButton url={matchArticle.image}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
              <div>
                <TwitterShareButton url={matchArticle.image} title={matchArticle.title}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
              <div>
                <LinkedinShareButton url={matchArticle.image} title={matchArticle.title}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
              <div>
                <WhatsappShareButton url={matchArticle.image} title={matchArticle.title}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
              <div>
                <PinterestShareButton url={matchArticle.image} media={matchArticle.image} description={matchArticle.title}>
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
              </div>
              <div>
                <RedditShareButton url={matchArticle.image} title={matchArticle.title}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
              </div>
              <div>
                <TumblrShareButton url={matchArticle.image} title={matchArticle.title}>
                  <TumblrIcon size={32} round />
                </TumblrShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HubblePage;
