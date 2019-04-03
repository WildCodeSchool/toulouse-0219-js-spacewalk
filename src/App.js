import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
