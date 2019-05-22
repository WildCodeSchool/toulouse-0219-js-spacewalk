import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  LayersControl
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './trackerSat.css';

// Function use to style th trajectory
const getStyle = (feature, layer) => ({ color: '#43a2d0', weight: 2 });

// Map Component
const MapComp = ({
  position,
  zoom,
  marker,
  satName,
  mapCenter,
  geoJsonData,
  keyGeoJson
}) => {
  return (
    <Fragment>
      <Map
        className="lfContStyle"
        center={mapCenter}
        zoom={zoom}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Map">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite" checked="true">
            <TileLayer
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <GeoJSON data={geoJsonData} style={getStyle} key={keyGeoJson} />
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
  position: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  marker: PropTypes.object.isRequired,
  satName: PropTypes.string.isRequired
};

export default MapComp;
