import './App.css';
import SearchForm from './SearchForm';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main-body">
          <SearchForm />
          <CurrentWeather defaultCity="Paris" />
          <Forecast />
          <div class="footer">
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
