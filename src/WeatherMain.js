import React, { useState } from 'react';
import './WeatherMain.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import { MagnifyingGlass } from 'react-loader-spinner';

export default function CurrentMain(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      dateAndTime: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
    });
  }
  function search() {
    const apiKey = 'f9feaa2306a84023f1oae3tfc99d5be3';
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherMain">
        <div className="row">
          <div className="col">
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city name"
                className="form-control shadow-sm"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="search-button shadow"
              />
            </form>
            <span>
              <button className="search-button shadow">
                <i className="fa-solid fa-location-pin"></i>
              </button>
            </span>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#66bfbf"
      />
    );
  }
}
