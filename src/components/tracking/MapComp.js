import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './trackerSat.css';

const MapComp = ({
  position,
  zoom,
  marker,
  satName,
  mapCenter
}) => {
  return (
    <Fragment>
      <Map
        className="lfContStyle"
        center={mapCenter}
        zoom={zoom}
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker
          position={position}
          icon={marker}
        >
          <Popup>
            {satName}
          </Popup>
        </Marker>
      </Map>
    </Fragment>
  );
};

MapComp.propTypes = {
  position: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  marker: PropTypes.object.isRequired,
  satName: PropTypes.string.isRequired
};

export default MapComp;