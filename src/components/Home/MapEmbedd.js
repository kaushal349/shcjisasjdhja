import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapEmbedd = (props) => {
  const style = {
    // width: '100%',
    height: '90vh',
  };
  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        initialCenter={{
          lat: 35.5496939,
          lng: -120.7060049,
        }}
        style={style}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCDEIkb3liTJxSdPi0wQ76Xq1YJ0jx8D6I',
})(MapEmbedd);
