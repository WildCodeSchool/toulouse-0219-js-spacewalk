import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

import Audio from './Audio';
import Image from './Image';
import Video from './Video';

import './style-search.css';

const typeToComponent = {
  audio: Audio,
  image: Image,
  video: Video,

};


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.pageSearch(e.target.href);
  }


  render() {
    const items = this.props.results.map(item => {
      const ResultComponent = typeToComponent[item.type];
      return <ResultComponent key={item.id} {...item} />;
    });
    return (
      <div className="container-fluid mx-auto">
        <div> Total items : {this.props.metadata.total_hits}</div>
        <div className="d-flex justify-content-center">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.props.metadata.total_hits}
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
            {this.props.links.map(item => (
              <a href={item.href} onClick={this.handleClick} className="btn btn-success mr-3">
                {item.prompt}
              </a>
            ))}
          </div>
          <div>

            {/* <CommentList data={this.state.data} /> */}
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.props.metadata.total_hits}
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
};

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Results;
