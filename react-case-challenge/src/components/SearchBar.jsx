import React from 'react'

export default function searchBar () {
  return (
    <div>
      <label htmlFor="search-box">
        <input
          name="search-box"
          type="text"
          placeholder="Insert your search here..."
        />
      </label>
    </div>
  )
}
