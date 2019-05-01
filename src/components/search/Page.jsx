import React, { Component } from 'react';

import APIClient from '../../APIClient';
import Search from './Search';
import Results from './results/Results';
import Title from '../title';
import './results/style-search.css';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      links: [],
      metadata: {}

    };

    this.search = this.search.bind(this);
    this.pageSearch = this.pageSearch.bind(this);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }


  search(params) {
    APIClient.search(params).then(results => {
      results.items.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      this.setState({ results: results.items, links: results.links, metadata: results.metadata });
    });
  }

  pageSearch(url) {
    APIClient.pageSearch(url).then(results => {
      results.items.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      this.setState({ results: results.items, links: results.links, metadata: results.metadata });
    });
  }

  render() {
    const {
      results, loading, links, metadata
    } = this.state;

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
            <div className="row mx-auto bg-search p-5">
              <div className="col d-flex align-items-stretch">
                <Results results={results} links={links} pageSearch={this.pageSearch} metadata={metadata} />
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
