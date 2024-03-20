import React, { useState, useRef } from 'react'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import Map from './Map';
import Weather from './Weather';
export const SearchValue = React.createContext();
const Form = () => {
  const [popup, setPopup] = useState('האדמו"ר מסדיגורא, רמת שלמה, ירושלים, נפת ירושלים, מחוז ירושלים, 9752059, ישראל')
  const [city, setCity] = useState('Jerusalem branch')
  const [position, setPosition] = useState([31.811612, 35.2160112]);
  const [area, setArea] = useState("Jerusalem");
  const x = useRef();
  const mapProvider = new OpenStreetMapProvider();

  const locetionSearch = async () => {
    const inputValue = x.current.value;
    const cities = await mapProvider.search({ query: inputValue });
    console.log(cities);
    if (cities.length > 0) {
      setPosition([cities[0].y, cities[0].x]);
      setPopup(cities[0].label);
      (inputValue == 'חתם סופר בני ברק'?setCity('Bnei Brak branch'):inputValue == 'מבוא חורון' ?setCity('Mevo Horon storage'):setCity('Jerusalem branch'));
      (inputValue == 'חתם סופר בני ברק'?setArea('Bnei Brak'):inputValue == 'מבוא חורון' ?setArea('Mevo Horon'):setArea('Jerusalem'));
    }
  }
  const toSend = { city: city, position: position, popup: popup, area: area}
  return (
    <>
      <SearchValue.Provider value={toSend}>
        <div className="row">
          <div className="col-md-6"><Map /></div>
          <div className="col-md-6 text-center">
          <select ref={x} onChange={locetionSearch} className=" mx-2 rounded-3 justify-content-center">
            <option value="האדמו''ר מסדיגורא ירושלים">Jerusalem branch</option>
            <option value="חתם סופר בני ברק">Bnei Brak branch</option>
            <option value="מבוא חורון">Mevo Horon storage</option>
          </select>
            <Weather/>
          </div>
        </div>
      </SearchValue.Provider>
    </>
  )
}

export default Form