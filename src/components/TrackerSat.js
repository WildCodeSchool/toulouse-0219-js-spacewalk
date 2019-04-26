import React, { Component } from 'react';
import axios from 'axios';
import {
  Map,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import L from 'leaflet';
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
    }, 200000);
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
    alert(`You choose to track : ${value}`);
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
      iconUrl: require('./images/iss.png'),
      iconSize: [50, 50],
    });

    // Displaying error message if any
    if (error) {
      return <p>{error.message}</p>;
    }
    // Displaying loading
    if (isLoading) {
      return <p>Loading...</p>;
    }

    // Making the option tag list for select component
    const satList = jsonSatList.map((item, key) => <option key={item.id} value={item.name}>{item.name}</option>);

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
                icon={issMarker}
              >
                <Popup>
                  {value}
                </Popup>
              </Marker>
            </Map>
            <div className="data-display">
              <p>
                Launch date :
                {satLaunchDate}
              </p>
              <p>
                Latitude :
                {position[0]}
                deg
              </p>
              <p>
                Longitude :
                {position[1]}
                deg
              </p>
              {
                hits && (
                  <div>
                    <p>
                      Altitude:
                      {hits.positions[0].sataltitude}
                      km
                    </p>
                    <p>Time (UTC) :</p>
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
                    <input type="submit" value="Submit" />
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
