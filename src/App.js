import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import MinArticle from './components/minArticle';
import Footer from './components/footer';
import Header from './components/Header';
import Apod from './components/Apod';
import './components/navMenu.css';
import NavMenu from './components/NavMenu';
import Title from './components/title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">

        {/* header */}
        <Header />
        {/* Barre de navigation */}
        <NavMenu />

        <Title title="this is a title !" />

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
        {/* footer start */}
        <Container className="containerFuid">
          <Footer />
        </Container>
        {/* footer end */}

      </div>
    );
  }
}

export default App;
