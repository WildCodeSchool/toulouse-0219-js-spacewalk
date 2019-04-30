import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';
import Title from './title';
import './Apod.css';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Apod extends Component {
  constructor() {
    super();
    this.state = {
      image: {},
      loading: true
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
          image: data,
          loading: false
        });
      });
  }

  render() {
    // Décomposition du state
    const { image, loading } = this.state;

    if (loading) {
      return (
        <div className="container minPageSizeBlue">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit="px"
                size={25}
                color="#43a2d0"
                loading={this.loading}
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid bg-gradient">
        <div className="container-apod mx-auto">
          <div className="p-4 mx-auto">
            <Title title="Astronomy Picture of the Day" idStyle="titleSecondWhite" className="text-center" />

          </div>
          <div className="row pb-5">
            <div className="col-md-7 pb-3">
              {/* // Si type vidéo, afficher le player sinon afficher l'image */}
              {image.media_type === 'video' ? <ReactPlayer url={image.url} /> : <img src={image.url} alt={image.title} className="img-apod" />}
            </div>
            <div className="col-md-5 text-white">
              <h3>{image.title}</h3>
              <p>{image.date}</p>
              <p>{image.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apod;
