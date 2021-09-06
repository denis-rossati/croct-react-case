import React from 'react';
import PropTypes from 'prop-types';

export default function Recipe({ mealDetails }) {
  const showIngredients = () => {
    const listIngredients = [];
    const ingredientKeys = Object.keys(mealDetails).filter((el) => el.includes('strIngredient'));
    ingredientKeys.forEach((_el, index) => {
      const measurement = `strMeasure${index}`;
      const ingredient = `strIngredient${index}`;
      listIngredients.push(
        <li>
          {mealDetails[ingredient]}
          {' '}
          -
          {' '}
          {mealDetails[measurement]}
        </li>,
      );
    });
    listIngredients.splice(0, 1);
    return listIngredients;
  };
  return (
    <main>
      <h1>{mealDetails.strMeal}</h1>
      <section>
        <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      </section>
      <h2>
        Category:
        {' '}
        {mealDetails.strTags}
      </h2>
      <ul>
        { showIngredients() }
      </ul>
      <p>{mealDetails.strInstructions}</p>
    </main>
  );
}

Recipe.propTypes = {
  mealDetails: PropTypes.objectOf(
    [PropTypes.string, PropTypes.number],
  ).isRequired,
};
