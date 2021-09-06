import React, { useState } from 'react';
import magnifier from '../icons/magnifying-glass.png';

export default function searchBar({ searchFunction }) {
  const [inputValue, setInputValue] = useState('');

  const changeInputState = (value) => setInputValue(value);

  return (
    <div>
      <form>
        <input
          id="search-box"
          name="search-box"
          type="text"
          placeholder="Insert your search here..."
          onChange={({ target: { value } }) => changeInputState(value)}
        />
        <button
          id="search-button"
          name="search-button"
          type="button"
          onClick={() => searchFunction(inputValue)}
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
