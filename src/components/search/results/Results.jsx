import PropTypes from 'prop-types';
import React from 'react';

import Audio from './Audio';
import Image from './Image';
import Video from './Video';

const typeToComponent = {
  audio: Audio,
  image: Image,
  video: Video,

};

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
    this.handleClick = this.handleClick.bind(this);
  }

  items = this.props.results.map(item => {
    const ResultComponent = typeToComponent[item.type];
    return <ResultComponent key={item.id} {...item} />;
  });

  handleClick(e) {
    e.preventDefault();
    this.props.pageSearch(e.target.href);
  }

  render() {
    return (
      <div className="container-fluid mx-auto">
        <div className="row no-gutters">
          {this.items}
        </div>
        {this.props.links.map(item =>
          <a href={item.href} onClick={this.handleClick}>
            {item.prompt}
          </a>)}

        <div>
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
