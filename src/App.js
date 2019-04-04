import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './App.css';
import Apod from './components/Apod';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (


      // Affichage de l'image du jour
      <Container>
        <Row>
          <Apod />
        </Row>
      </Container>
      // fin de l'affichage de l'image du jour
    );
  }
}

export default App;
