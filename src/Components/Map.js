import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '70%',
  margin: '25% 0',
};


class MapContainer extends React.Component {
render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRuLKxLzytY3ump07j_SKhxZ3Htpx5Rt4'
})(MapContainer);