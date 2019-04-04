import React, { Component } from 'react';
import './App.css';
import {
  Container,
  // Row, Col
} from 'reactstrap';
// import MinArticle from './components/minArticle';
import Footer from './components/footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">

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
