import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';

import Audio from './Audio';
import Image from './Image';
import Video from './Video';

import './style-search.css';

const typeToComponent = {
  audio: Audio,
  image: Image,
  video: Video,

};
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: this.props.results,
      offset: 0,
      pageCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      loading: false
    });
  }

  loadPageCount() {
    this.setState({
      pageCount: Math.ceil(this.props.metadata.total_hits / 100),
    });
  }

  componentDidMount() {
    this.loadPageCount();
  }
  componentDidUpdate(prevProps) {
    if (this.props.metadata.total_hits !== prevProps.metadata.total_hits) {
      this.loadPageCount();
    }
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 100);
    // let url = `http://images-api.nasa.gov/search?page=${this.state.pageCount}&q=${this.props.query}`
    // console.log(url)
    this.setState({ offset: offset }, () => {
      this.loadPageCount();
    });
  };


  handleClick(e) {
    e.preventDefault();
    this.props.pageSearch(e.target.href);
  }


  render() {
    const { metadata, results, links } = this.props;

    const items = results.map(item => {
      const ResultComponent = typeToComponent[item.type];
      return <ResultComponent key={item.id} {...item} />;
    });
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit={"px"}
                size={15}
                color={'#43a2d0'}
                loading={this.state.loading}
              />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid mx-auto">
        <div className="text-white font-weight-bold"> Total items : {metadata.total_hits}</div>
        <div className="d-flex justify-content-center">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
        <div className="row no-gutters">
          {items}
        </div>
        <div className="d-flex justify-content-center">
          <div>
            {links && links.map(item => (
              <a href={item.href} key={item.href} onClick={this.handleClick} className="btn btn-success mr-3">
                {item.prompt}
              </a>
            ))}
          </div>
          <div>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Results;
