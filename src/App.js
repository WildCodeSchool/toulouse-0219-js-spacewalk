import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import './components/navMenu.css';
import NavMenu from './components/NavMenu';
import Asset from './components/asset/Page';
import Search from './components/search/Page';
import Home from './components/Home';
import CuriosityGallery from './components/CuriosityGallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* header */}
          <Header />
          {/* Barre de navigation */}
          <NavMenu />
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/asset/:id" component={Asset} />
          <Route path="/curiosity-gallery" component={CuriosityGallery} />
          {/* footer start */}
          <Container className="containerFuid">
            <Footer />
          </Container>
          {/* footer end */}

        </div>
      </Router>
    );
  }
}

export default App;
