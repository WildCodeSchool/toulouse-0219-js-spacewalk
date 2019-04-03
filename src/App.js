import React, { Component } from 'react';
import './App.css';
import {
  Container, Row, Col
} from 'reactstrap';
import MinArticle from './components/minArticle';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">


        {/* Miniature d'article */}
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

      </div>
    );
  }
}

export default App;
