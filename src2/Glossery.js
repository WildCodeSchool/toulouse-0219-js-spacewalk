import React, { Component } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class Glossary extends Component {
  constructor() {
    super();
    this.state = {
      word: []
    };
  }

  componentDidMount() {
    fetch("https://hubblesite.wild31.com/api/v3/glossary?page=all", {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          word: data
        });
      });
  }

  render() {
    return (
      <section>
        <div className="container mx-auto w-50">
          <div className="row mx-auto">
            {this.state.word.map(term => (
              <div>
                <h4>{term.name}</h4>
                <p>{term.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Glossary;
