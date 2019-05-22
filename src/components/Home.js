import React, { Component } from 'react';
import Apod from './Apod';
import CollectionAndResult from './CollectionAndResult';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
