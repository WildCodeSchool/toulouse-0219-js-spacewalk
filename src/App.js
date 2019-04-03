import React, { Component } from 'react';

import './App.css';
import NavMenu from './components/NavMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavMenu />
      </div>
    );
  }
}

export default App;
