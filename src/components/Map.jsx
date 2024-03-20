import React, { useContext } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import MyMarker from './MyMarker'
import { SearchValue } from './Form'
const Map = () => {
const opj = useContext(SearchValue);
  return (
    <>
    <div className="d-flex justify-content-center">
      <MapContainer center={opj.position} zoom={14} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy;<a href="https://openstreetmap.org/copyright">OpenSteertMap</a>contributors' />
        <MyMarker>
        </MyMarker>
      </MapContainer>
      </div>
    </>
  )
}

export default Map