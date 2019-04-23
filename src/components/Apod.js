import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Title from './title';
import './Apod.css';

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
    // Décomposition du state
    const { image } = this.state;

    return (
      <div className="container-fluid">

        <div className="row bg-gradient">
          <div className="mx-auto p-4"><Title title="Astronomy Picture of the Day" idStyle="titleSecond" /></div>
        </div>
        <div className="container-apod mx-auto">
          <div className="row">
            <div className="col">
              {/* // Si type vidéo, afficher le player sinon afficher l'image */}
              {image.media_type === 'video' ? <ReactPlayer url={image.url} /> : <img src={image.url} alt={image.title} className="img-apod img-thumbnail" />}
            </div>
            <div className="col">
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
