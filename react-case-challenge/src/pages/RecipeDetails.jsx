import React, { useState } from 'react';

export default function RecipeDetails() {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);

  const renderLoading = () => (isLoading
    ? (<p>Loading...</p>) : <></>);

  return (
    <div>
      {
        renderLoading()
      }
    </div>
  );
}
