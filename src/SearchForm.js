import React from 'react';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <div className="row">
        <div className="col">
          <form className="search-form">
            <input
              type="search"
              placeholder="Enter a city name"
              className="form-control shadow-sm"
              autoFocus="on"
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
    </div>
  );
}
