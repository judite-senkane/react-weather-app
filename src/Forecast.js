import React from 'react';
import WeatherIcon from './images/weather-icon.png';
import './Forecast.css';

export default function Forecast() {
  const forecast = [
    {
      day: 'Saturday',
      highTemp: 4,
      lowTemp: -2,
      icon: WeatherIcon,
    },
    {
      day: 'Sunday',
      highTemp: 2,
      lowTemp: -3,
      icon: WeatherIcon,
    },
    {
      day: 'Monday',
      highTemp: 1,
      lowTemp: -5,
      icon: WeatherIcon,
    },
    {
      day: 'Tuesday',
      highTemp: 2,
      lowTemp: -2,
      icon: WeatherIcon,
    },
    {
      day: 'Wednesday',
      highTemp: 4,
      lowTemp: -1,
      icon: WeatherIcon,
    },
    {
      day: 'Thursday',
      highTemp: 3,
      lowTemp: -2,
      icon: WeatherIcon,
    },
  ];

  return (
    <div className="row Forecast">
      {forecast.map((day, index) => (
        <div className="col weather-forecast" key={index}>
          <div className="weather-forecast-date">{day.day}</div>
          <img
            src={day.icon}
            alt="Weather icon"
            className="forecast-icon"
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <strong className="forecast-temperature-max">
              {day.highTemp}ºC
            </strong>
            <span className="forecast-temperature-min">{day.lowTemp}ºC</span>
          </div>
        </div>
      ))}
    </div>
  );
}
