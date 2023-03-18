import './App.css';
import WeatherMain from './WeatherMain';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main-body">
          <WeatherMain defaultCity="Rome" />
          <div className="footer">
            <a
              href="https://github.com/judite-senkane/react-weather-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            &nbsp; by Judite Senkane
          </div>
        </div>
      </div>
    </div>
  );
}
