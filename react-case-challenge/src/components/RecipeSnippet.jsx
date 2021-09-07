import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeSnippet({ recipe }) {
  const {
    idMeal, strMealThumb, strMeal, strArea,
  } = recipe;
  return (
    <div key={idMeal}>
      <Link to={`/${idMeal}`}>
        <img src={strMealThumb} alt="Recipe after being prepared" />
        <p>{strMeal}</p>
        <p>{ strArea }</p>
      </Link>
    </div>
  );
}

RecipeSnippet.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};
