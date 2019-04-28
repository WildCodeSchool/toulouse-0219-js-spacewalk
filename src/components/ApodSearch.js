import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import DateInput from './DateInput';
import Title from './title';
import moment from 'react-moment';

class ApodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      // date : moment(),
      image: {}
    };
  }

  componentDidMount() {
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data
        });
      });
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ`)
      .then(response => response.json())
      .then(data => this.setState({ image: data }));
  };


  // formatDate = moment => {
  //   let year = moment.year();
  //   let month = moment.month() + 1;
  //   let day = moment.date();
  //   return `${year}-${month}-${day}`;
  // };


  // changeDate = dateFromInput => {
  //   this.setState({ date: dateFromInput });
  //   this.getPhoto(this.formatDate(dateFromInput));
  // };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };


  render() {
    const { image } = this.state;
    return (
      <div className="container-fluid bg-gradient">
        <div className="container-apod mx-auto">
          <div className="p-4 mx-auto">
            <Title title="Astronomy Picture of the Day" idStyle="titleSecondWhite" className="text-center" />

            <DateInput changeDate={this.changeDate} date={this.state.date} />
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