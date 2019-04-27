import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import './components/navMenu.css';
import NavMenu from './components/NavMenu';
import Asset from './components/asset/Page';
import Search from './components/search/Page';
import Home from './components/Home';
import TrackerSat from './components/tracking/TrackerSat';
import HubblePage from './components/asset/HubblePage';
import Error from './components/Error404';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* header */}
        <Header />
        {/* Barre de navigation */}
        <NavMenu />
        {/* Routes */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/asset/:id" component={Asset} />
          <Route path="/tracker" component={TrackerSat} />
          <Route path="/hubble/:id" component={HubblePage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
