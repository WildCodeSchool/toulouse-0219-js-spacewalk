import React, { Component } from 'react';
//import Footer from './footer';
//import './logoAgences.css';

class logoAgences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          src={this.props.logo}
          alt={this.props.alt}
        />
      </div>

    );
  }
};

export default logoAgences;
