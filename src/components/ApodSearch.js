import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import DateInput from './DateInput';
import Title from './title';
import moment from "moment";
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class ApodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      date: new Date(),
      image: ""
    };

  }

  componentDidMount() {
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ'
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          image: json,
          loading: false
        });
      });
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ`)
      .then(response => response.json())
      .then(data => this.setState({ image: data, loading: false }));
  };


  formatDate = moment => {
    return moment.toDate()
  };


  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    this.getPhoto(moment(dateFromInput).format('YYYY-MM-DD'));
    this.setState({ loading: true });
  };

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }


  handleClick = () => {
    let random = this.randomDate(new Date("06-16-1995"), new Date());
    this.setState({ date: random });
    this.getPhoto(moment(random).format('YYYY-MM-DD'))
  };


  render() {
    const { image, loading } = this.state;
    if (loading) {
      return (
        <div className="container minPageSizeBlue">
          <div className="row">
            <div className="text-center mx-auto m-5">
              <PropagateLoader
                css={override}
                sizeUnit="px"
                size={25}
                color="#43a2d0"
                loading={this.loading}
              />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid bg-gradient">
        <div className="container-apod mx-auto">
          <div className="p-4 mx-auto">
            <Title title="Astronomy Picture of the Day" idStyle="titleSecondWhite" className="text-center" />
            <DateInput changeDate={this.changeDate} date={this.state.date} handleClick={this.handleClick} />
          </div>
          <div className="row pb-5">
            <div className="col-md-7 pb-3">

              {/* // Si type vidéo, afficher le player sinon afficher l'image */}
              {image.media_type === 'video' ? <ReactPlayer url={image.url} /> : <img src={image.url} alt={image.title} className="img-apod" />}
            </div>
            <div className="col-md-5 text-white">
              <h3>{image.title}</h3>
              <p>{image.date}</p>
              <p>{image.explanation}</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ApodSearch;