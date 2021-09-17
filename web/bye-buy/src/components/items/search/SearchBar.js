import React from 'react';


const SearchBar = ({ search, setSearch, currentCategory, setCurrentCategory }) => {
  return (
    <div className="center">
      <div className="mt-5 pt-5">
        <h3>🚀 What do you need?<i className="fas fa-bus-alt"></i></h3>
      </div>
      <div className="container mt-2">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">🔎</span>
                <input
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Search by keyword..."
                />
                <div className="input-group mt-3">
                <span className="input-group-text" id="basic-addon1">🔎</span>
            <select value={currentCategory} onChange={event => setCurrentCategory(event.target.value)} 
            className="form-select form-select-lg" id="inputGroupSelect01" placeholder="Categories">
                <option selected>Search by category...</option>
                <option value="audio-visual-equipment">Audiovisual Equipment</option>
                <option value="clothing">Clothing</option>
                <option value="dj-equipment">DJ Equipment</option>
                <option value="drones">Drones</option>
                <option value="electronics">Electronics</option>
                <option value="film-photography">Film and photography</option>
                <option value="holiday-travel">Holyday and Travel</option>
                <option value="home-office-garden">Home and Garden</option>
                <option value="kids-baby">Kids</option>
                <option value="musical-instruments">Musical Instruments</option>
                <option value="projectors-screens">Projectors and Screens</option>
                <option value="party-events">Party and Events</option>
                <option value="sports">Sports</option>
                <option value="storage">Storage</option>
                <option value="transport">Transport</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )}
  
  export default SearchBar;