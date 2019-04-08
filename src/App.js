import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import MinArticle from './components/minArticle';
import Footer from './components/footer';
import Header from './components/Header';
import Apod from './components/Apod';
import ArticleHome from './components/articleHome';

import './components/navMenu.css';
import NavMenu from './components/NavMenu';

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

        {/* Affichage de l'image du jour */}

        {/* fin de l'affichage de l'image du jour */}

        <ArticleHome />

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
