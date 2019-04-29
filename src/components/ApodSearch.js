import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import DateInput from './DateInput';
import Title from './title';
import momentRandom from "moment-random";
import moment from "moment";

class ApodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          image: json
        });
      });
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=638oh8hjQBkop6DfIzCRlVqF4q0vyFJ2yvGX6KqZ`)
      .then(response => response.json())
      .then(data => this.setState({ image: data }));
  };


  formatDate = moment => {
    console.log(moment)
    return moment.toDate()
  };


  changeDate = dateFromInput => {
    console.log(dateFromInput)
    this.setState({ date: dateFromInput });
    this.getPhoto(moment(dateFromInput).format('YYYY-MM-DD'));
  };

  // handleClick = () => {
  //   let randomDate = momentRandom(moment(), moment("1995-06-16", "YYYY-MM-DD"));
  //   this.setState({ date: randomDate });
  //   this.getPhoto(randomDate);
  // };

  render() {
    const { image } = this.state;
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