import React, { Fragment } from 'react';
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
  satMarker,
  satName
}) => {
  return (
    <Fragment>
      <Map
        className="lfContStyle"
        center={position}
        zoom={zoom}
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker
          position={position}
          icon={satMarker}
        >
          <Popup>
            {satName}
          </Popup>
        </Marker>
      </Map>
    </Fragment>
  );
};

export default MapComp;
