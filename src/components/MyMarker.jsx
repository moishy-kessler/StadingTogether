import React, { useContext } from 'react'
import{Marker,Popup,useMap} from 'react-leaflet'
import {SearchValue} from './Form'
import {Icon} from 'leaflet'
const MyMarker = () => {
  const opjIcon = {iconUrl: "./iconMarker.png",iconSize: [50,50]}
  const myIcon = new Icon(opjIcon);
const opj =  useContext(SearchValue)
    const map = useMap();
    map.flyTo(opj.position);
  return (
    <Marker position={opj.position} icon={myIcon}>
      <Popup>
        <h5 className='fw-bold m-0'>{opj.popup}</h5>
      </Popup>
    </Marker>
  )
}

export default MyMarker