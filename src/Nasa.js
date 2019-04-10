import React, { Component } from "react";

class Nasa extends Component {
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
      <div className="card cardStyle">
        <img src={this.state.image.url} className="card-img-top" />
        <div className="card-body">
          <h3>{this.state.image.title}</h3>
          <p className="card-text">{this.state.image.explanation}</p>
        </div>
      </div>
    );
  }
}

export default Nasa;
