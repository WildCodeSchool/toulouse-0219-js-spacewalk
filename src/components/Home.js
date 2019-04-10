import React, { Component } from 'react';
import Apod from './Apod';
import MinArticle from './minArticle'
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

        {/* Miniature d'article start */}
        <Container className="containerFuid">
          <Row>
            <Col lg={4}>
              <MinArticle />
            </Col>
            <Col lg={4}>
              <MinArticle />
            </Col>
            <Col lg={4}>
              <MinArticle />
            </Col>
          </Row>
        </Container>

        {/* Miniature d'article fin */}

        <Collection />
      </div>
    );
  }
}

export default Home;