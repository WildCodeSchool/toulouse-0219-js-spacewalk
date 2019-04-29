import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import {
  Map,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import L from 'leaflet';
import Noty from 'noty';
import '../../node_modules/noty/lib/noty.css';
import '../../node_modules/noty/lib/themes/sunset.css';
import { css } from '@emotion/core';
import { PropagateLoader } from 'react-spinners';
import config from '../config';
import keys from '../keys';
import sat from '../satellites';
import 'leaflet/dist/leaflet.css';
import './trackerSat.css';
import Title from './title';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
// Component
class TrackSat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: null,
      jsonSatList: sat,
      lat: 43.604,
      lng: 1.444,
      zoom: 3,
      isLoading: true,
      error: null,
      value: sat[0].name,
      satId: 25544,
      satDescrip: sat[0].description,
      satLaunchDate: sat[0].launch
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 2000);
  }

  // Stopping the time interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Getting data from the API with axios
  getData() {
    const id = this.state.satId;
    const url = `${config.N2YO_POS_URL}${id}/43.604/1.444/0/1/&apiKey=${keys.N2YO_API_KEY}`;

    axios.get(url)
      .then(resp => this.setState({
        hits: resp.data,
        isLoading: false,
        lat: resp.data.positions[0].satlatitude,
        lng: resp.data.positions[0].satlongitude
      }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  // Handling change of select input
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // Submitting
  handleSubmit(event) {
    const { value, jsonSatList } = this.state;
    event.preventDefault();
    // text: `You choose to track : ${value}`,
    new Noty({
      theme: 'sunset',
      type: 'info',
      text: `You're tracking ${value}`,
      timeout: 2000
    }).show();
    // Extracting the satellite id from the name value store in the state
    const idMatched = jsonSatList
      .filter(item => (item.name === value))
      .map(singleItem => (singleItem.id));
    // Extracting the satellite description from the name value store in the state
    const descriptionMatched = jsonSatList
      .filter(item => (item.name === value))
      .map(singleItem => (singleItem.description));
    // Extracting the satellite launch date from the name value store in the state
    const dateMatched = jsonSatList
      .filter(item => (item.name === value))
      .map(singleItem => (singleItem.launch));
    // Updating the satellite id, description and launch date
    this.setState({ satId: idMatched, satDescrip: descriptionMatched, satLaunchDate: dateMatched });
  }

  render() {
    // Destructuring & variable assignation
    const {
      hits,
      jsonSatList,
      isLoading,
      error,
      lat,
      lng,
      zoom,
      value,
      satDescrip,
      satLaunchDate,
    } = this.state;
    const position = [(lat).toFixed(2), (lng).toFixed(2)];

    // Console logging of the number of transcations with the API
    if (hits) {
      console.log(`Count of transactions performed in last 60 min : ${hits.info.transactionscount}`);
    }

    // Setting up marker
    const issMarker = L.icon({
      // eslint-disable-next-line global-require
      iconUrl: require('./images/iss.png'),
      iconSize: [50, 50],
    });

    // Displaying error message if any
    if (error) {
      return <p>{error.message}</p>;
    }
    // Displaying loading
    if (isLoading) {
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

    // Making the option tag list for select component
    const satList = jsonSatList.map((item, key) => <option key={item.id} value={item.name}>{item.name}</option>);

    return (
      <div className="container-fluid text-center tracker-page">
        <Title title="Space &amp; Earth science satellites tracking" idStyle="titlelight" />
        <div className="containerStyle">
          <div className="mapLoc">
            <Map
              className="lfContStyle"
              center={position}
              zoom={zoom}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={position}
                icon={issMarker}
              >
                <Popup>
                  {value}
                </Popup>
              </Marker>
            </Map>
            <div className="data-display">
              <div>
                Launch date :
                <p>
                  {satLaunchDate}
                </p>
              </div>
              <div>
                Latitude :
                <p>
                  {position[0]}
                  deg
                </p>
              </div>
              <div>
                Longitude :
                <p>
                  {position[1]}
                  deg
                </p>
              </div>
              {
                hits && (
                  <div>
                    Altitude:
                    <p>
                      {hits.positions[0].sataltitude}
                      km
                    </p>
                  </div>
                )}
              {
                hits && (
                  <div>
                    Time (UTC) :
                    <p>
                      {/* valeur test pour la mise en page */}
                      {hits.positions[0].sataltitude}
                    </p>
                  </div>
                )}
            </div>
          </div>
          <div className="describeStyle">
            {
              hits && (
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <p>Choose the satellite you want to track :</p>
                      <select
                        value={value}
                        onChange={this.handleChange}
                      >
                        {satList}
                      </select>
                    </label>
                    <Button
                      type="submit"
                      value="Submit"
                      color="light"
                    // size="lg"
                    >
                      Submit
                    </Button>
                  </form>


                  <div>
                    <h4 className="text-center mt-2">Satellite infos</h4>
                    {satDescrip}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TrackSat;
