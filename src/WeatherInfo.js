import React from 'react';
import FormattedDate from './FormattedDate';
import './WeatherInfo.css';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <span>{props.data.city}, </span>
        <span className="date-and-time">
          <FormattedDate date={props.data.dateAndTime} />
        </span>
      </h1>
      <section>
        <div className="row">
          <div className="col-6 info">
            <div className="weather text-capitalize">
              {props.data.description}
            </div>
            <div className="wind">Wind: {Math.round(props.data.wind)} m/s</div>
            <div className="humidity">Humidity: {props.data.humidity}%</div>
          </div>
          <div className="col-6 degrees">
            <WeatherTemperature celsius={props.data.temperature} />
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="weather-icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
