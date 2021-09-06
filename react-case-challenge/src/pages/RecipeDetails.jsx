import React, { useState } from 'react';

export default function RecipeDetails() {
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
