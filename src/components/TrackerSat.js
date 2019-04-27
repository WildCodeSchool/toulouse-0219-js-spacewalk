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
import config from '../config';
import keys from '../keys';
import sat from '../satellites';
import 'leaflet/dist/leaflet.css';
import './trackerSat.css';

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
      isLoading: false,
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
    this.setState({ isLoading: true });
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 10000);
  }

  // Stopping the time interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Getting data from the API with axios
  getData() {
    const { satId } = this.state;
    const url = `${config.N2YO_POS_URL}${satId}/43.604/1.444/0/1/&apiKey=${keys.N2YO_API_KEY}`;

    axios.get(url)
      .then(resp => this.setState({
        hits: resp.data,
        isLoading: false,
        lat: resp.data.positions[0].satlatitude,
        lng: resp.data.positions[0].satlongitude
      }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  // Handling change of select input form
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // Submitting the form input change
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
    // Updating State with satellite id, description and launch date
    this.setState({ satId: idMatched, satDescrip: descriptionMatched, satLaunchDate: dateMatched })
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
      satId,
      satDescrip,
      satLaunchDate,
    } = this.state;
    const position = [(lat).toFixed(2), (lng).toFixed(2)];

    // Console logging of the number of transcations with the API
    if (hits) {
      console.log(`Count of transactions performed in last 60 min : ${hits.info.transactionscount}`);
    }

    // Setting up marker
    let satMarker;
    if (satId !== 25544) {
      satMarker = L.icon({
        iconUrl: require('./images/satellite.png'),
        iconSize: [40, 40],
      });
    } else {
      satMarker = L.icon({
        iconUrl: require('./images/iss.png'),
        iconSize: [50, 50],
      });
    }

    // Displaying error message if any
    if (error) {
      return <p>{error.message}</p>;
    }
    // Displaying loading
    if (isLoading) {
      return <p>Loading...</p>;
    }

    // Making the option tag list for select component
    const satList = jsonSatList
      .map(item => <option key={item.id} value={item.name}>{item.name}</option>);

    return (
      <div className="container-fluid text-center tracker-page">
        <h2>Space &amp; Earth science satellites tracking</h2>
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
                icon={satMarker}
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
                      {new Date(hits.positions[0].timestamp * 1000).toUTCString()}
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
                    <label htmlFor="satChoose">
                      <p>Choose the satellite you want to track :</p>
                      <select
                        name="satChoose"
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
