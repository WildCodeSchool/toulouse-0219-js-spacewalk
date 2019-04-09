import React, { Component } from "react";

class MarsRover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ"
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
        <div className="container-fluid mx-auto ">
          <div className="row mx-auto">
            {this.state.image.map(singleImage => (
              <div className="card cardStyle">
                <img src={singleImage.img_src} className="card-img-top" />
                <div className="card-body">
                  <h4>{singleImage.rover.name}</h4>
                  <p>{singleImage.earth_date}</p>
                  <p className="card-text">
                    Status : {singleImage.rover.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default MarsRover;
