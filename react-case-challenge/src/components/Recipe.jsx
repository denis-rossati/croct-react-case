import React, { useState } from 'react';
import { useCroct } from '@croct/plug-react';
import PropTypes from 'prop-types';
import blackHeart from '../icons/black-heart.png';
import whiteHeart from '../icons/heart.png';

export default function Recipe({ mealDetails }) {
  const croct = useCroct();
  const [like, setLike] = useState(false);

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

  const removeInterest = async () => {
    const interests = await croct.evaluate('user\'s interests');
    const filteredInterests = interests.filter((interest) => interest !== mealDetails.strArea);
    await croct
      .user
      .edit()
      .clear('interests')
      .add('interests', filteredInterests)
      .save();
  };

  const addInterest = async () => {
    await croct
      .user
      .edit()
      .add('interests', mealDetails.strArea)
      .save();
  };

  const saveRecipe = async () => {
    await croct
      .user
      .edit()
      .add('custom.recipes', {
        title: mealDetails.strMeal,
        thumb: mealDetails.strMealThumb,
        id: mealDetails.idMeal,
      })
      .save();
  };

  const manageCroctUser = async () => {
    if (like) {
      await addInterest();
      await saveRecipe();
    } else {
      await removeInterest();
    }
  };

  const userLiked = async () => {
    setLike(!like);
    await manageCroctUser();
  };

  const displayHeart = () => (like ? blackHeart : whiteHeart);

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
      <button type="button" onClick={() => userLiked()}>
        <img src={displayHeart()} alt="like button" />
      </button>
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
