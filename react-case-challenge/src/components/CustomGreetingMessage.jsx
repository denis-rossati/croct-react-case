import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCroct } from '@croct/plug-react';

export default function CustomGreetingMessage({ country, changeMealGrid }) {
  const croct = useCroct();
  const [haveFindRecipe, setHaveFindedRecipe] = useState(true);

  const customCallbackMessage = (callback, message) => callback(message);

  const emergencyRecipes = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => changeMealGrid(data))
      .catch((err) => customCallbackMessage(console.error, err));
  };

  const renderInitialRecipes = async () => {
    const isReturning = await croct.evaluate('user is returning');
    if (isReturning) {
      const interests = await croct.evaluate('user\'s interests');
      const randomIndex = Math.round(Math.random() * (interests.length - 1));
      const url = `www.themealdb.com/api/json/v1/1/filter.php?a=${interests[randomIndex]}`;
      const response = await fetch(url);
      const data = response.json;
      changeMealGrid(data);
    }
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
