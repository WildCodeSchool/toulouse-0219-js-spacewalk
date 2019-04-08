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

  render() {
    const tabTags = [
      "Science Release",
      "Photo Release",
      "Hubble",
      "TRAPPIST",
      "exoplanet"
    ];
    return (
      <section>
        <div className="container-fluid mx-auto">
          {tabTags.map((tag, index) => (
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
                    {tabTags
                      .filter(tag => singleArt.title.includes(tag))
                      .map(tag => (
                        <p className="badge badge-success mr-1">{tag}</p>
                      ))}
                    <p>{singleArt.pub_date}</p>
                    <p className="card-text"> {singleArt.description}</p>
                    <p>
                      <a href={singleArt.link} target="_blank">
                        Continue reading
                      </a>
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

export default Hubble;
