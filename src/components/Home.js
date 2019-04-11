import React, { Component } from 'react';
import Apod from './Apod';
import MinArticle from './minArticle'
import HubbleArticles from "./HubbleArticles";
import CollectionAndResult from "./CollectionAndResult";
import {
  Col, Row, Container
} from 'reactstrap';
import Collection from "./collections"



class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        {/* Affichage de l'image du jour */}
        <Container>
          <Row>
            <Apod />
          </Row>
        </Container>
        {/* fin de l'affichage de l'image du jour */}

        <CollectionAndResult />

        {/* <Collection />
        <HubbleArticles /> */}



      </div>
    );
  }
}

export default Home;