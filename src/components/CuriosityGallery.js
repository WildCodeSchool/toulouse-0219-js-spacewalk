import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';
import Title from './title';

class Curiosity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data.latest_photos
        });
      });
  }

  render() {
    return (
      <section>

        <Gallery images={this.state.image} />

      </section>
    );
  }
}

export default Curiosity;