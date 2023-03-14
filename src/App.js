import './App.css';
import SearchForm from './SearchForm';
import CurrentWeather from './CurrentWeather';
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main-body">
          <SearchForm />
          <CurrentWeather />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
