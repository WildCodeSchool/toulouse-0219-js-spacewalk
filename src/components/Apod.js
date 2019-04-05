import React, { Component } from 'react';
import {
  Card, CardImg, CardBody, CardTitle, Col,
} from 'reactstrap';
import '../Apod.css';

class Apod extends Component {
  constructor() {
    super();
    this.state = {
      image: {}
    };
  }
  // Appel de l'API de la Nasa Image of the day

  componentDidMount() {
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data
        });
      });
  }

  render() {
    // Décomposition des props (this.state)
    const { image } = this.state;
    return (
      // début de la card
      <div className="containerOverlay">
        <Card>
          <CardImg top width="100%" src={image.url} alt={image.title} />
          <CardBody className="overlay">
            <CardTitle className="textOverlay">
              <h3 className="font-weight-bold">Picture of the day</h3>
              <h3>{image.title}</h3>
              <p>{image.date}</p>
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Apod;
