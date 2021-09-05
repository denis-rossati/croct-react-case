import React from 'react';
import magnifier from '../icons/magnifying-glass.png';

export default function searchBar() {
  return (
    <div>
      <form>
        <input
          id="search-box"
          name="search-box"
          type="text"
          placeholder="Insert your search here..."
        />
        <button
          id="search-button"
          name="search-button"
          type="button"
        >
          <img
            src={magnifier}
            alt="Magnifier frame"
          />
        </button>
      </form>
    </div>
  );
}
