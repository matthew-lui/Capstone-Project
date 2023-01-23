import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps'



const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMaps() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC1n7QOVdMyB7uVt9v4ybHbF2Lm56Zfa7w"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)
