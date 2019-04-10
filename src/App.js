import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Collection from './components/collections';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import './components/navMenu.css';
import NavMenu from './components/NavMenu';
<<<<<<< HEAD
import HubbleArticles from "./components/HubbleArticles";
=======
import Title from './components/title';
import Asset from "./components/asset/Page";
import Search from "./components/search/Page";
import Home from './components/Home';
>>>>>>> dev

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="App">

        {/* header */}
        <Header />
        {/* Barre de navigation */}
        <NavMenu />

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

        <HubbleArticles />

        {/* Miniature d'article fin */}
        {/* footer start */}
        <Container className="containerFuid">
          <Footer />
        </Container>
        {/* footer end */}

      </div>
=======
      <Router>
        <div className="App">
          {/* header */}
          <Header />
          {/* Barre de navigation */}
          <NavMenu />
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/asset/:id" component={Asset} />
          {/* footer start */}
          <Container className="containerFuid">
            <Footer />
          </Container>
          {/* footer end */}

        </div>
      </Router>
>>>>>>> dev
    );
  }
}

export default App;
