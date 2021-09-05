import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function CustomGreetingMessage({ country, changeMealGrid }) {
  const [haveFindRecipe, setHaveFindedRecipe] = useState(true);

  const emergencyRecipes = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => changeMealGrid(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
      .then((response) => response.json())
      .then((data) => {
        if ((!!data.meals) !== true) {
          setHaveFindedRecipe(false);
          emergencyRecipes();
        } else {
          changeMealGrid(data.meals);
        }
      })
      .catch(() => emergencyRecipes());
  }, []);

  return (
    <div>
      { haveFindRecipe
        ? `Since you're from ${country}, let's show you some local recipes`
        : `Sorry, we could'nt find any recipe from ${country} :( \n let's show these recipes:`}
    </div>
  );
}

CustomGreetingMessage.propTypes = {
  country: PropTypes.string.isRequired,
  changeMealGrid: PropTypes.func.isRequired,
};