import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false,
      video: false,
      image: false,
      query: '',

    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.search(this.state);
  }

  render() {
    const { image, audio, video } = this.state;
    return (
      <div className="container">
        <div className="search">
          <form onSubmit={this.handleOnSubmit} role="search">
            <div className="nav-input mr-lg-2">
              <Input
                id="query"
                aria-label="Search for images, videos and audio from NASA"
                name="query"
                onChange={this.handleOnChange}
                placeholder="Moon"
                type="search"
              />
            </div>
            <input className="btn btn-primary" type="submit" value="Search" />
            <div>
              <label className="mr-2" htmlFor="images">
                Images
                <input
                  id="image"
                  checked={image}
                  name="image"
                  onChange={this.handleOnChange}
                  type="checkbox"
                  className="ml-1"
                />
              </label>

              <label className="mr-2" htmlFor="audio">
                Audio
                <input
                  id="audio"
                  checked={audio}
                  name="audio"
                  onChange={this.handleOnChange}
                  type="checkbox"
                  className="ml-1"
                />
              </label>
              <label className="mr-2" htmlFor="video">
                Video
                <input
                  id="video"
                  checked={video}
                  name="video"
                  onChange={this.handleOnChange}
                  type="checkbox"
                  className="ml-1"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

export default Search;
