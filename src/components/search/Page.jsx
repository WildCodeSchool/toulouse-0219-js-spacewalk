import React, { Component } from 'react';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';

import APIClient from '../../APIClient';
import Search from './Search';
import Results from './results/Results';
import Title from '../title';
import './results/style-search.css';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      // error: '',
      loading: true,
      links: []

    };

    this.search = this.search.bind(this);
    this.pageSearch = this.pageSearch.bind(this);
  }


  componentWillMount() {
    this.setState({
      loading: false
    });
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
      this.setState({ results: results.items, links: results.links });
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
      this.setState({ results: results.items, links: results.links });
    });
  }

  render() {
    const { results, loading, links } = this.state;
    if (loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit={"px"}
                size={15}
                color={'#293347'}
                loading={loading}
              />
            </div>
          </div>
        </div>
      );
    }
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
                <Results results={results} links={links} pageSearch={this.pageSearch} />
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
