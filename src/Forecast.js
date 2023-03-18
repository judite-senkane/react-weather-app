import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forecast.css';
import ForecastDay from './ForecastDay';

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    console.log(forecast);
    console.log(props.city);
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map((day, index) => {
            if (index < 6) {
              return (
                <div className="col weather-forecast" key={index}>
                  <ForecastDay data={day} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = 'f9feaa2306a84023f1oae3tfc99d5be3';
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
