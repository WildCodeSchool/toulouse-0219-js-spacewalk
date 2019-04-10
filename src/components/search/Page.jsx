import React, { Component } from 'react';

import APIClient from '../../APIClient';
import Search from './Search';
import Results from './results/Results';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      error: ''
    };

    this.search = this.search.bind(this);
  }

  search(params) {
    APIClient.search(params).then(results => {
      this.setState({ results })

    });
  }

  render() {
    return (
      <div className="container-fluid mx-auto m-5">
        <h1>Search</h1>
        {/* Champ de recherche */}
        <Search search={this.search} />
        {/* Affichage des résultats */}
        <div className="row mx-auto bg-dark p-5">
          {this.state.results.length > 0
            ? <Results results={this.state.results} />
            : <div> Erreur </div>
          }

        </div>
      </div>
    );
  }
}

export default Page;
