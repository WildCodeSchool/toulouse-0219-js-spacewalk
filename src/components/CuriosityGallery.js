import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './title';

class Curiosity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
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
        <div className="container mx-auto ">
          <Title title="Curiosity's Diary" IdStyle="titleSecond" />

          <div className="row mb-5">
            {this.state.image.map((singleImage, i) => (
              <div className="col-lg-3 col-md-4 col-xs-6 thumb" >
                <Link className="thumbnail" href="#" data-toggle="modal" data-title={singleImage.earth_date}
                  data-target="#image-gallery">
                  <img className="img-thumbnail"
                    src={singleImage.img_src}
                    alt="Campus La Lune"
                    key={i}
                  />
                </Link>
              </div>

            ))}
            <div>
              <div className="modal fade" id="image-gallery" tabIndex="-1">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal"><span>×</span><span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img id="image-gallery-image" className="img-responsive col-md-12" src="" />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary float-left" id="show-previous-image"><ion-icon name="arrow-back"></ion-icon>
                      </button>

                      <button type="button" id="show-next-image" className="btn btn-primary float-right"><ion-icon name="arrow-forward"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>



            </div>







            {/* // <div className="card cardStyle">
              //   <img src={singleImage.img_src} className="card-img-top" />
              //   <div className="card-body">
              //     <h4>{singleImage.rover.name}</h4>
              //     <p>{singleImage.earth_date}</p>
              //     <p className="card-text">
              //       Status : {singleImage.rover.status}
              //     </p>
              //   </div>
              // </div> */}














          </div>
        </div>
      </section>
    );
  }
}

export default Curiosity;