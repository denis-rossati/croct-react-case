import React, { useState, Suspense } from 'react';
import { Personalization } from '@croct/plug-react';
import MealGrid from '../components/MealGrid';
import SearchBar from '../components/SearchBar';
import CustomGreetingMessage from '../components/CustomGreetingMessage';

import findCountry from '../helper/findCountryName';

export default function MainPage() {
  const [meals, setMeals] = useState({});
  const [showCustomGreeting, setShowCustomGreeting] = useState(true);

  const setMealByResult = async (value) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    const request = await fetch(url, { headers: { Accept: 'application/json' } });
    const response = await request.json();
    setMeals(response);
    setShowCustomGreeting(false);
  };

  return (
    <div>
      <SearchBar searchFunction={setMealByResult} />
      <Suspense fallback="loading..">
        <Personalization expression="location's country">
          {(location) => (location && showCustomGreeting
            ? <CustomGreetingMessage changeMealGrid={setMeals} country={findCountry(location)} />
            : '')}
        </Personalization>
      </Suspense>
      <MealGrid mealResult={meals} />
    </div>
  );
}
