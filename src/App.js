import React, { Component } from 'react';
import './App.css';
import {
  Container,
  // Row, Col
} from 'reactstrap';
// import MinArticle from './components/minArticle';
import Footer from './components/footer';


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
        <NavMenu />



        {/* Miniature d'article start */}
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
