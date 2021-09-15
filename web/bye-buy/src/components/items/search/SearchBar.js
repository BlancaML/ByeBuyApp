import React, { Component } from 'react';
import { queryString } from 'query-string';

const SearchBar = ({ search, setSearch }) => (
    <div className="center">
      <div className="mt-5 pt-5">
        <h3>What do you need?</h3>
      </div>
      <div className="container mt-2">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">🔎</span>
                <input
                value={search}
                onChange={event => setSearch(event.target.value)}
                class="form-control form-control-lg"
                type="text"
                placeholder="Search items..."
                />
        </div>
      </div>
    </div>
  )
  
  export default SearchBar;