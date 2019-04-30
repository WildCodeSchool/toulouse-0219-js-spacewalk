import React, { Component } from "react";
import { Badge, Button } from 'reactstrap';
import excerpt from '../functions/excerpt';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';
import './articleHome.css';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Hubble extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      tagName: "",
      loading: true
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
          article: data,
          loading: false
        });
      });
    this.handleTag = this.handleTag.bind(this);
  }
  handleTag = tag => this.setState({ tagName: tag });

  // const stylesButton = [ "btn btn-primary","btn btn-secondary","btn btn-success"];
  // let rand = stylesButton[Math.floor(Math.random() * stylesButton.length)];

  render() {

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit={"px"}
                size={25}
                color={'#43a2d0'}
                loading={this.loading}
              />
            </div>
          </div>
        </div>
      );
    }


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

                <div className="articleHome">
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
