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
import sat from '../satellites';


// Style to display the map
const lfContStyle = {
  height: '600px',
  width: '900px',
  margin: 'auto'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: 'auto',
};

const describeStyle = {
  width: '500px',
  margin: 'auto',
};

// Component
class TrackSat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: null,
      jsonSatList: sat,
      lat: 43.604,
      lng: 1.444,
      zoom: 4,
      isLoading: false,
      error: null,
      value: sat[0].name,
      satId: 25544,
      satDescrip: null,
      satLaunchDate: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 30000);
  }

  // Stopping the time interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Getting data from the API with axios
  getData() {
    const id = this.state.satId;
    const url = `${config.N2YO_POS_URL}${id}/43.604/1.444/0/1/&apiKey=${config.N2YO_API_KEY}`;

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
      iconUrl: require('.images/iss.png'),
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
      <div>
        <h1>Space &amp; Earth science satellites tracking</h1>
        <div style={containerStyle}>
          <div>
            <Map
              style={lfContStyle}
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
                  Hello world
                </Popup>
              </Marker>
            </Map>

            <form onSubmit={this.handleSubmit}>
              <label>
                What do you want to track :
                <select
                  value={value}
                  onChange={this.handleChange}
                >
                  {satList}
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>

          <div>
            {
              hits && (
                <div>
                  <h3>Satellite infos :</h3>
                  <div>
                    <p>Latitude : {position[0]} °</p>
                    <p>Longitude : {position[1]} °</p>
                    {
                      satDescrip && satLaunchDate && (
                        <div>
                          <p>Altitude: {hits.positions[0].sataltitude} km</p>
                          <p>Launch date : {satLaunchDate}</p>
                        </div>
                      )}
                  </div>
                  <div style={describeStyle}>
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
