import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import MinArticle from './components/minArticle';
import Footer from './components/footer';
import Header from './components/Header';
import Apod from './components/Apod';
import './components/navMenu.css';
import NavMenu from './components/NavMenu';
import ImageComponent from './components/imageComponent';

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
        <Apod />
        <ImageComponent />

        {/* <Container className="containerFuid">
          <Row>
            <Col lg={6}>
              <Apod />
            </Col>
            <Col lg={3}>
              <ImageComponent />
            </Col>
            <Col lg={3}>
              <ImageComponent />
            </Col>
            <Col lg={3}>
              <ImageComponent />
            </Col>
          </Row>
        </Container> */}


        {/* Miniature d'article start */}
        <Container className="containerFuid">
          <Row>
            <Col lg={3}>
              <ImageComponent />
            </Col>
            <Col lg={3}>
              <ImageComponent />
            </Col>
            <Col lg={3}>
              <ImageComponent />
            </Col>
            <Col lg={3}>
              <ImageComponent />
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
