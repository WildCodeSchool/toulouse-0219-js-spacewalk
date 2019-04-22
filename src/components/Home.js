import React, { Component } from 'react';
import {
  Row, Container
} from 'reactstrap';
import Apod from './Apod';
import MinArticle from './minArticle';
import CollectionAndResult from './CollectionAndResult';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Affichage de l'image du jour */}
        <Apod />
        {/* fin de l'affichage de l'image du jour */}

        <CollectionAndResult />

        {/* <Collection />
        <HubbleArticles /> */}

      </div>
    );
  }
}

export default Home;
