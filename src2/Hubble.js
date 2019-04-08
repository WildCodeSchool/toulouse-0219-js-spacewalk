import React, { Component } from "react";
import "./App.css";

class Hubble extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      tagName: ""
    };
  }

  componentDidMount() {
    fetch("https://hubblesite.wild31.com/api/v3/external_feed/esa_feed", {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          article: data
        });
      });
    this.handleTag = this.handleTag.bind(this);
  }
  handleTag = tag => this.setState({ tagName: tag });

  // const stylesButton = [ "btn btn-primary","btn btn-secondary","btn btn-success"];
  // let rand = stylesButton[Math.floor(Math.random() * stylesButton.length)];

  render() {
    return (
      <section>
        <div className="container-fluid mx-auto">
          {[
            "Science Release",
            "Photo Release",
            "Hubble",
            "TRAPPIST",
            "exoplanet"
          ].map((tag, index) => (
            <button
              onClick={() => this.handleTag(tag)}
              className="btn btn-info mr-1"
            >
              {tag}
            </button>
          ))}
          <div className="row mx-auto">
            {this.state.article
              .filter(
                singleArt =>
                  this.state.tagName === "" ||
                  singleArt.title.includes(this.state.tagName)
              )
              .map(singleArt => (
                <div className="card cardStyle">
                  <img
                    src={singleArt.thumbnail}
                    className="mr-3 card-img-top"
                    alt={singleArt.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{singleArt.title}</h5>
                    <p className="badge badge-success">{this.state.tagName}</p>
                    <p>{singleArt.pub_date}</p>
                    <p className="card-text"> {singleArt.description}</p>
                    <p>
                      <a href={singleArt.link} target="_blank">
                        Continue reading
                      </a>
                    </p>
                  </div>
                </div>

                /* <div className="card cardStyle">
                <img src={singleArt.thumbnail} className="card-img-top" />
                <div className="card-body">
                  <h4>{singleArt.title}</h4>
                  <p>{singleArt.pub_date}</p>
                  <p className="card-text">{singleArt.description}</p>
                  <a href={singleArt.link} target="_blank">
                    Continue reading
                  </a>
                </div>
              </div> */
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Hubble;
