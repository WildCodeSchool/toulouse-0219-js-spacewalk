import React, { Component } from 'react';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';

import APIClient from '../../APIClient';
import Search from './Search';
import Results from './results/Results';
import Title from '../title';


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
      error: '',
      loading: true

    };

    this.search = this.search.bind(this);
  }


  componentWillMount() {
    this.setState({
      loading: false
    });
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
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit={"px"}
                size={15}
                color={'#293347'}
                loading={this.state.loading}
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
        {this.state.results.length > 0
          ? (
            <div className="row mx-auto bg-dark p-5">
              <div className="col d-flex align-items-stretch">
                <Results results={this.state.results} />
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
