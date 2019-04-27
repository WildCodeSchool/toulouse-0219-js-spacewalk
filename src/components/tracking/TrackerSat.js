import React, { Component } from 'react';
import axios from 'axios';
import L from 'leaflet';
import Noty from 'noty';
import '../../../node_modules/noty/lib/noty.css';
import '../../../node_modules/noty/lib/themes/sunset.css';
import config from '../../config';
import keys from '../../keys';
import MapComp from './MapComp';
import SatDataComp from './SatDataComp';
import SatDescripComp from './SatDescripComp';
import sat from '../../satellites';
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
      satNameVal: sat[0].name,
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
    this.setState({ satNameVal: event.target.value });
  }

  // Submitting the form input change
  handleSubmit(event) {
    const { satNameVal, jsonSatList } = this.state;
    event.preventDefault();
    // text: `You choose to track : ${value}`,
    new Noty({
      theme: 'sunset',
      type: 'info',
      text: `You're tracking ${satNameVal}`,
      timeout: 2000
    }).show();
    // Extracting the satellite id from the name value store in the state
    const idMatched = jsonSatList
      .filter(item => (item.name === satNameVal))
      .map(singleItem => (singleItem.id));
    // Extracting the satellite description from the name value store in the state
    const descriptionMatched = jsonSatList
      .filter(item => (item.name === satNameVal))
      .map(singleItem => (singleItem.description));
    // Extracting the satellite launch date from the name value store in the state
    const dateMatched = jsonSatList
      .filter(item => (item.name === satNameVal))
      .map(singleItem => (singleItem.launch));
    // Updating State with satellite id, description and launch date
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
      satNameVal,
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
    const issMarker = L.icon({
      // eslint-disable-next-line global-require
      iconUrl: require('../images/iss.png'),
      iconSize: [50, 50],
    });
    const satMarker = L.icon({
      // eslint-disable-next-line global-require
      iconUrl: require('../images/satellite.png'),
      iconSize: [40, 40],
    });
    const marker = (satId !== 25544) ? satMarker : issMarker;

    // Displaying error message if any
    if (error) {
      return <p>{error.message}</p>;
    }
    // Displaying loading
    if (isLoading) {
      return <p>Loading...</p>;
    }

    // Making the option tag list for form select input
    const satList = jsonSatList
      .map(item => <option key={item.id} value={item.name}>{item.name}</option>);

    return (
      <div className="container-fluid text-center tracker-page">
        <h2>Space &amp; Earth science satellites tracking</h2>
        <div className="containerStyle">
          <div className="mapLoc">
            <MapComp position={position} zoom={zoom} satMarker={marker} satName={satNameVal} />
            <SatDataComp
              launchDate={satLaunchDate}
              lat={position[0]}
              lng={position[1]}
              hits={hits}
              alti={hits ? hits.positions[0].sataltitude : 0}
              time={hits ? hits.positions[0].timestamp : 0}
            />
          </div>
          <SatDescripComp
            submitSatSelect={this.handleSubmit}
            satName={satNameVal}
            onChange={this.handleChange}
            hits={hits}
            satList={satList}
            satDescrip={satDescrip}
          />
        </div>
      </div>
    );
  }
}

export default TrackSat;
