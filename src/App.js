import React, { Component } from 'react';
import './App.css';
import {
  Container, Row, Col
} from 'reactstrap';
import MinArticle from './components/minArticle';
import Footer from './components/footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">

        <Container className="containerFuid">
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
