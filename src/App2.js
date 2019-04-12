import React, { Component } from "react";
import MarsRover from "./MarsRover";
import Hubble from "./Hubble";
import JamesWebb from "./JamesWebb";
import Glossary from "./Glossery";
import LastNews from "./LastNews";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Asset from "./components/asset/Page";
import Search from "./components/search/Page";

const Home = () => <h1>Home</h1>;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/" className="btn btn-primary">Home</Link>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/asset/:id" component={Asset} />
          </div>
        </Router>
        <h3 className="text-center">
          European Space Agency (ESA) Hubble News feed
        </h3>
        <Hubble />
        <h1 className="text-center">James Webb Space Telescope feed (NASA)</h1>
        <JamesWebb />
        <h1 className="text-center">Glossary</h1>
        <Glossary />
        <h1 className="text-center">Last News</h1>
        <LastNews />
        <MarsRover />
      </div>
    );
  }
}

export default App;
