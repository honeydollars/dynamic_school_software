import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker';

const Map = ({location, zoomLevel}) => {

    const currentLocation = {
        address:'Lanet,Nakuru',
        latitude:'37.42216',
        longitude:'-122.08427',
    }

    const LocationPin = ({ text }) => (
        <div className="pin">
          <Icon icon={locationIcon} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div>
      )

  return (
    <div className="google-map">
    <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={location} defaultZoom={zoomLevel}>
      <LocationPin lat={currentLocation.lat} lng={currentLocation.lng} text={currentLocation.address} />
    </GoogleMapReact>
  </div>
  )
}

export default Map