import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {}
    };
  }

  setPage(page) {
    // Destructuring
    const { articles, pageSize, onChangePage } = this.props;
    const { pager } = this.state;

    // Getting new pager object
    const newPager = this.getPager(articles.length, page, pageSize);

    // Getting new page of articles from articles array
    const newPageOfArticles = articles.slice(pager.startIndex, pager.endIndex + 1);

    // Updating state
    this.setState({ pager: newPager });

    // Calling onChangePage method in parent component
    onChangePage(newPageOfArticles);
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}

export default HomePagination;

const defaultProps = {
  initialPage: 1,
  pageSize: 10
};

const propTypes = {
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
  onChangePage: PropTypes.func.isRequired
};
