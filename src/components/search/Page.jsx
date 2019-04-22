import React, { Component } from 'react';

import APIClient from '../../APIClient';
import Search from './Search';
import Results from './results/Results';
import Title from '../title';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      // error: ''
    };

    this.search = this.search.bind(this);
  }

  search(params) {
    APIClient.search(params).then(results => {
      results.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      this.setState({ results });
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container-fluid mx-auto m-5">
        <div className="row mx-auto text-center p-5">
          <div className="col">
            <Title title="Exploring NASA archives" idStyle="titleSecond" />
            {/* Champ de recherche */}
            <Search search={this.search} />
          </div>
        </div>


        {/* Affichage des résultats */}
        {results.length > 0
          ? (
            <div className="row mx-auto bg-dark p-5">
              <div className="col d-flex align-items-stretch">
                <Results results={results} />
              </div>
            </div>
          )
          : <div className="text-white"> Erreur </div>
        }

      </div>

    );
  }
}

export default Page;
