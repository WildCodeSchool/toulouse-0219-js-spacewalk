import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import './components/navMenu.css';
import NavMenu from './components/NavMenu';
import Asset from './components/asset/Page';
import Search from './components/search/Page';
import Home from './components/Home';
import TrackerSat from './components/TrackerSat';
import Error from './components/Error404';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* header */}
          <Header />
          {/* Barre de navigation */}
          <NavMenu />
          {/* Routes */}
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/asset/:id" component={Asset} />
          <Route path="/tracker" component={TrackerSat} />
          <Route component={Error} />
          {/* footer */}
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
