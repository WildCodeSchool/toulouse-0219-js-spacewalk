import React, { Component } from "react";
import "./App.css";
import Apod from "./components/Apod";
import { Container, Row } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Apod />
        </Row>
      </Container>
    );
  }
}

export default App;
