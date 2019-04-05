import React, { Component } from 'react';
import Apod from './Apod';
import MinArticle from './minArticle';
import './showApodNews.css';

class ShowApodNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="showApodNews">
          <div className="apod">
            <Apod />
          </div>
          <div className="article">
            <MinArticle />
            <MinArticle />
          </div>
          <div className="article">
            <MinArticle />
            <MinArticle />
          </div>
        </div>
        <div className="showApodNews">

          <MinArticle />
          <MinArticle />
          <MinArticle />
          <MinArticle />
        </div>
      </div>

    );
  }
}

export default ShowApodNews;
