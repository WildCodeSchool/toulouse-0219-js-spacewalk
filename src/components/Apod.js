import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Col } from "reactstrap";
import "../Apod.css";

class Apod extends Component {
  constructor() {
    super();
    this.state = {
      image: {}
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data
        });
      });
  }

  render() {
    return (
      <div className="containerOverlay">
        <Col lg={8}>
          <Card>
            <CardImg top width="100%" src={this.state.image.url} />
            <CardBody className="overlay">
              <CardTitle className="textOverlay">
                <h3 className="font-weight-bold">Picture of the day</h3>
                <h3>{this.state.image.title}</h3>
                <p>{this.state.image.date}</p>
              </CardTitle>
              {/* <CardText>{this.state.image.explanation}</CardText> */}
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Apod;
