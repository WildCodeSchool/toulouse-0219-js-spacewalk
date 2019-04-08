import React, { Component } from "react";
// import Nasa from "./Nasa";
import MarsRover from "./MarsRover";
import Hubble from "./Hubble";
import JamesWebb from "./JamesWebb";
import Glossary from "./Glossery";
import LastNews from "./LastNews";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Nasa /> */}
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
