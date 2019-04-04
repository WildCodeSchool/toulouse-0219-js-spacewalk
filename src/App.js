import React, { Component } from 'react';
import Collection from './components/collections'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Collection />
      </div>
    );
  }
}

export default App;
