import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Title from './title';
import './Apod.css';

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
    const imagesGallery = this.state.image.map((singleImage) => (
      {
        caption: singleImage.camera.full_name,
        src: singleImage.img_src,
        thumbnail: singleImage.img_src,

      }
    ));

    return (
      <div className="container-fluid bg-gradient pb-5">
        <div className="container bg-gradient">

          <Title title="Curiosity's Diary" idStyle="titleSecondWhite" className="bg-gradient" />
          <p className="text-white text-center"> Curiosity is on Mars since {this.state.image[0] && this.state.image[0].rover.landing_date}. <br /> Pictures taken on {this.state.image[0] && this.state.image[0].earth_date}.</p>

          <div
            style={{
              display: "block",
              minHeight: "1px",
              width: "100%",
              overflow: "auto",
              margin: "auto",
            }}
          >
            <div className="mx-auto">
              <Gallery images={imagesGallery} enableImageSelection={false} className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Curiosity;
