import React, { Component } from "react";
import { Badge, Button } from 'reactstrap';
import excerpt from '../functions/excerpt';
import './articleHome.css';

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

                <div id="articleHome">
                  <img
                    src={singleArt.image}
                    alt={singleArt.title}
                  />
                  <div>
                    <Badge color="success">Tags</Badge>
                    <p className="date">
                      {singleArt.pub_date}
                    </p>
                    <h2>{singleArt.title}</h2>
                    {/* <p>
                      {excerpt(singleArt.description, 10)}
                    </p> */}
                    <a href={singleArt.link}>
                      <Button color="dark" outline>
                        Read more ⇢
                      </Button>
                    </a>
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
