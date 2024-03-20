import {React, useContext, useEffect, useState } from 'react'
import {SearchValue} from './Form'
const Weather = () => {
    const opj = useContext(SearchValue);
    const [description, setDescription] = useState("");
    const [temp, setTemp] = useState(0.0);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${opj.area}&appid=${import.meta.env.VITE_WEADHER_PRIVATE_KEY}&units=metric`;
    const fetchingData = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle and display weather data
                console.log(data);
                setDescription(data.weather[0].description);
                setTemp(data.main.temp)
            })
            .catch(error => {
                // Handle API request errors
                console.error('Error fetching weather data:', error);
            });
    }
    useEffect (() => fetchingData(),[opj.area]);
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className='text-center my-4'>
                    <h2 className='text-black'>Area: <span className='text-danger'> {opj.city}</span></h2>
                    <h2 className='text-black'>Temp: <span className='text-danger'> {temp} °C</span></h2>
                    <h2 className='text-black'>Description: <span className='text-danger'>{description}</span></h2>
                    <h2 className='text-black'>We are always open.<br/> Kindness does not stop</h2>
                </div>
            </div>
        </>
    )
}

export default Weather