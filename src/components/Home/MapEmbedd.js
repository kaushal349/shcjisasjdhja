import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapEmbedd = (props) => {
  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        initialCenter={{
          lat: 35.5496939,
          lng: -120.7060049,
        }}
        style={{
          height: `800px`,
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCvPv1nI4ihrAv3a7pAXjGZUCs_YRiIuOc',
})(MapEmbedd);
