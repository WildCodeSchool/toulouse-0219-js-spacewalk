import React, { Component } from 'react';
import Title from '../title';

class HubblePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title title="article title" idStyle="title" />
      </div>
    );
  }
}

export default HubblePage;
