import React from 'react';

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}ºC`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}ºC`;
  }

  function day() {
    const date = new Date(props.data.time * 1000);
    const day = date.getDay();
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="weather-forecast-date">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        width="42"
      />
      <div className="weather-forecast-temperatures">
        {' '}
        <strong className="forecast-temperature-max">{maxTemperature()}</strong>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
