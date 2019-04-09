import React, { Component } from 'react';
import './imageComponent.css';

class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <figure className="snip1369 green">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample15.jpg" alt="pr-sample15" />
        <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample15.jpg" alt="pr-sample15" /></div>
        <figcaption>
          <h3>Jason Response</h3>
          <p>I suppose if we couldn't laugh at things that don't make sense, we couldn't react to a lot of life.</p>
        </figcaption>
        <span className="read-more">
          Read More </span>
        <a href="#"></a>
      </figure>
    );
  }
}

export default ImageComponent;