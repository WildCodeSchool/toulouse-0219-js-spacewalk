import React, { Component } from 'react';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      {/* Collection start */ }
      < Container >
      <Row>
        <Col lg={3}>
          <div>
            <img
              src="https://apod.nasa.gov/apod/image/1904/potw1913aM2_1024.jpg"
              alt="Collection 1"
            />
          </div>
        </Col>
        <Col lg={3}>

        </Col>
        <Col lg={3}>

        </Col>
        <Col lg={3}>

        </Col>

      </Row>
      </Container >
      {/* Collection end */ }


    );
  }
}

export default Collections;