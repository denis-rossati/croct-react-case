import React from 'react';
import PropTypes from 'prop-types';

export default function MealGrid({ mealResult: { meals } }) 
  
  const renderMeals = () => {
    if (Array.isArray(meals)) {
      return mealsMap(meals);
    }
  };
  console.log(meals);
  return (
    <div>
      { renderMeals() }
    </div>
  );
}

MealGrid.propTypes = {
  mealResult: PropTypes.arrayOf(PropTypes.object).isRequired,
};
