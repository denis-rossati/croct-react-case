import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MealGrid({ mealResult }) {
  const mealsMap = (arrMeals) => arrMeals.map(({
    idMeal, strMealThumb, strMeal, strArea,
  }) => (
    <div key={idMeal}>
      <Link to={`/${idMeal}`}>
        <img src={strMealThumb} alt="Recipe after been cooked" />
        <p>{strMeal}</p>
        <p>{ strArea }</p>
      </Link>
    </div>
  ));

  const renderMeals = () => {
    const { meals } = mealResult;
    if (Array.isArray(meals)) {
      return mealsMap(meals);
    }
    return 'Loading recipes...';
  };

  return (
    <section>
      { renderMeals() }
    </section>
  );
}

MealGrid.propTypes = {
  mealResult: PropTypes.objectOf(PropTypes.array).isRequired,
};
