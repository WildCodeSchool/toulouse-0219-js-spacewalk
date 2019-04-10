import React, { Component } from 'react';
import './collections.css';


class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="collections">

        <div className="collection1 collectionsText allCollections">
          Mars
        </div>
        <div className="collection2 collectionsText allCollections">
          The moon
        </div>
        <div className="collection3 collectionsText allCollections">
          Exoplanets
        </div>
        <div className="collection4 collectionsText allCollections">
          The sun
        </div>
      </div>
    );
  }
}

export default Collections;
