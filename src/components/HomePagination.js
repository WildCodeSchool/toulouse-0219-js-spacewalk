import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {}
    };
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
  pageSize: PropTypes.number
};
