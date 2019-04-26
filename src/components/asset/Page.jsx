import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';
import APIClient from '../../APIClient';
import Image from './Image';
import Video from './Video';
import Audio from './Audio';

const typeToComponent = {
  image: Image,
  video: Video,
  audio: Audio
};
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;


    APIClient.getAssetById(id).then(item => {
      this.setState({
        item,
        loading: false,
        modal: false

      });
    });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { loading, item, modal } = this.state;
    const { history } = this.props;

    if (loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit={"px"}
                size={25}
                color={'#43a2d0'}
                loading={loading}
              />
            </div>
          </div>
        </div>
      );
    }

    const Asset = typeToComponent[item.type];

    return (
      <div>
        <button onClick={history.goBack} type="button">&larr; Back to results </button>

        <Asset {...item} modal={modal} toggle={this.toggle} />
      </div>
    );
  }
}

Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Page;
