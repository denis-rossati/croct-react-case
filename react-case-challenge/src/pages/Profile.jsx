/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useCroct } from '@croct/plug-react';
import RecipeSnippet from '../components/RecipeSnippet';
import formatRecipes from '../helper/formatRecipes';

export default function Profile() {
  const croct = useCroct();
  // if I get employed, my first question is to know why does react and croct together could'nt
  // accept components mounted inside a function :(
  const [email, setEmail] = useState('Loading...');
  const [areaInterests, setAreaInterests] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const loadEmail = async () => {
      await croct.evaluate('user\'s email')
        .then((loadedEmail) => setEmail(loadedEmail));
    };

    const foodInterests = async () => {
      await croct.evaluate('user\'s interests')
        .then((loadedInterests) => setAreaInterests(loadedInterests));
    };

    const loadRecipes = async () => {
      await croct.evaluate('user\' recipes')
        .then((loadedRecipes) => formatRecipes(loadedRecipes))
        .then((newRecipes) => setRecipes(newRecipes));
    };

    await loadEmail();
    await foodInterests();
    await loadRecipes();
  }, []);

  const renderInterests = () => areaInterests
    .reduce((acc, area) => {
      if (acc.indexOf(area) === -1) {
        acc.push(area);
      }
      return acc;
    }, [])
    .map((foodArea) => <li key={foodArea}>{foodArea}</li>);

  const renderRecipes = () => recipes.map((meal, index) => (
    <RecipeSnippet
      key={index}
      recipe={meal}
    />
  ));

  return (
    <div>
      {email}
      <p>
        De acordo com as comidas que você deu like, você gosta de:
      </p>
      <ul>
        { renderInterests() }
      </ul>

      <p>As comidas em que você deu like foram:</p>
      <div>
        { renderRecipes() }
      </div>
    </div>
  );
}
