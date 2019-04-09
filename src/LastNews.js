import React, { Component } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class LastNews extends Component {
  constructor() {
    super();
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    fetch("https://hubblesite.wild31.com/api/v3/news_release/last", {
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
        <div className="container mx-auto w-50">
          <div className="row mx-auto w-50">
            <div class="card">
              <div class="card-header">
                <img
                  src={this.state.article.thumbnail_2x}
                  className="card-img-top"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{this.state.article.name}</h5>
                <p>{this.state.article.publication}</p>
                <p class="card-text">{this.state.article.abstract}</p>

                <a
                  href={this.state.article.url}
                  class="btn btn-primary"
                  target="_blank"
                >
                  Continue reading
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LastNews;
