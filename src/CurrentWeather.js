import React, { useState } from 'react';
import './CurrentWeather.css';
import axios from 'axios';

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      //time: response.data.time * 1000,
      //date:
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <h1>
          <span>{weatherData.city}, </span>
          <span className="date-and-time">
            {weatherData.date}, {weatherData.time}
          </span>
        </h1>
        <section>
          <div className="row">
            <div className="col-6 info">
              <div className="weather">{weatherData.description}</div>
              <div className="wind">
                Wind: {Math.round(weatherData.wind)} m/s
              </div>
              <div className="humidity">Humidity: {weatherData.humidity}%</div>
            </div>
            <div className="col-6 degrees">
              <span>{Math.round(weatherData.temperature)}</span>
              <span className="type-degrees">ºC</span>
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="weather-icon"
              />
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = 'f9feaa2306a84023f1oae3tfc99d5be3';
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return 'Loading...';
  }
}
