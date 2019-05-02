import React, { Component } from 'react';
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
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';
import { HashLink as Link } from 'react-router-hash-link';
import Title from '../title';
import excerptDate from '../../functions/excerptDate';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class HubblePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    fetch('https://hubblesite.wild31.com/api/v3/external_feed/esa_feed?page=all', {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          article: data,
          loading: false
        });
      });
  }

  render() {
    const { location } = this.props;
    const { article, loading } = this.state;
    const idArticle = location.pathname.split('/');
    const matchArticle = article.find(singleArticle => singleArticle.pub_date === idArticle[2]);

    if (loading) {
      return (
        <div className="container minPageSize">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit="px"
                size={25}
                color="#43a2d0"
                loading={this.loading}
              />
            </div>
          </div>
        </div>
      );
    }

    if (!matchArticle) return <div />;

    return (
      <div className="container minPageSize">
        <Link to="/#resultsHubble">
          <div className="btn btn-light mt-4">Back to results</div>
        </Link>
        <div className="text-center row mx-auto">

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
                <PinterestShareButton
                  url={matchArticle.image}
                  media={matchArticle.image}
                  description={matchArticle.title}
                >
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
            <a href={matchArticle.link} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="btn btn-secondary continueReadingButton"
              >
                Continue reading on the Hubble website
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HubblePage;
