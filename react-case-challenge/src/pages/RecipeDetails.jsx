import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetails() {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [mealContent, setMealContent] = useState([]);

  const renderContent = () => (isLoading
    ? (<p>Loading...</p>) : <p>{mealContent.strMeal}</p>);

  useEffect(() => {
    const fetchingMeal = () => {
      const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      fetch(url)
        .then((response) => response.json())
        .then(({ meals: [meals] }) => {
          setIsLoading(false);
          setMealContent(meals);
        })
        .catch(() => setIsLoading(true));
    };
    fetchingMeal();
  }, []);

  return (
    <div>
      {
        renderContent()
      }
    </div>
  );
}
