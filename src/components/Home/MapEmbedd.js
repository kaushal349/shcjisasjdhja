import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { ShipsID } from '../../extras/ShipsId';

const MapEmbedd = (props) => {
  const google = window.google;
  let shipsData = require('../../JsonData/final_AIS_data.json');
  let markerColor = require('../../JsonData/marker_color.json');
  console.log(markerColor);
  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        initialCenter={{
          lat: 1.30415,
          lng: 103.86066,
        }}
        style={{
          height: '100%',
        }}
      >
        {ShipsID.map((shipid, index) => {
          return (
            <Marker
              key={index}
              icon={{
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                fillColor: markerColor[shipsData['Vessel Filter'][shipid]],
                fillOpacity: 0.5,
                strokeColor: markerColor[shipsData['Vessel Filter'][shipid]],
                strokeWeight: 1,
                scale: 5,
                rotation: Number(
                  shipsData['Course'][shipid].slice(
                    0,
                    shipsData['Course'][shipid].length - 1
                  )
                ),
              }}
              position={{
                lat: shipsData['Latitude'][shipid],
                lng: shipsData['Longitude'][shipid],
              }}
            />
          );
        })}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCvPv1nI4ihrAv3a7pAXjGZUCs_YRiIuOc',
})(MapEmbedd);
