import React, { Component } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class JamesWebb extends Component {
  constructor() {
    super();
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    fetch("https://hubblesite.wild31.com/api/v3/external_feed/jwst_feed", {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          article: data
        });
      });
  }

  render() {
    return (
      <section>
        <div className="container-fluid mx-auto ">
          <div className="row mx-auto">
            {this.state.article.map(singleArt => (
              <div className="card cardStyle">
                <img src={singleArt.thumbnail} className="card-img-top" />
                <div className="card-body">
                  <h4>{singleArt.title}</h4>
                  <p>{singleArt.pub_date}</p>
                  <p className="card-text">{singleArt.description}</p>
                  <a href={singleArt.link} target="_blank">
                    Continue reading
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default JamesWebb;
