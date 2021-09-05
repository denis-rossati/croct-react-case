import React, { useState } from 'react';
import MealGrid from '../components/MealGrid';
import SearchBar from '../components/SearchBar';

export default function MainPage() {
  const [meals, setMeals] = useState([]);
  return (
    <div>
      <SearchBar />
      <MealGrid mealResult={meals} />
    </div>
  );
}
