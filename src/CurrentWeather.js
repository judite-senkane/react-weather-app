import React from 'react';
import './CurrentWeather.css';
import WeatherIcon from './images/weather-icon.png';

export default function CurrentWeather() {
  let weatherData = {
    city: 'Paris',
    dateAndTime: 'JAN 28, 20:30',
    description: 'overcast clouds',
    wind: 4,
    humidity: 75,
    temperature: 2,
    image: WeatherIcon
  };
  return (
    <div className="CurrentWeather">
      <h1>
        <span>{weatherData.city}, </span>
        <span className="date-and-time">{weatherData.dateAndTime}</span>
      </h1>
      <section>
        <div className="row">
          <div className="col-6 info">
            <div className="weather">{weatherData.description}</div>
            <div className="wind">Wind: {weatherData.wind} m/s</div>
            <div className="humidity">Humidity: {weatherData.humidity}%</div>
          </div>
          <div className="col-6 degrees">
            <span>{weatherData.temperature}</span>
            <span className="type-degrees">ºC</span>
            <img
              src={weatherData.image}
              alt="Weather icon"
              className="weather-icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
