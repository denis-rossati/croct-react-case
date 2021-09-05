import React, { useState, useEffect } from 'react';
import MealGrid from '../components/MealGrid';
import SearchBar from '../components/SearchBar';

export default function MainPage() {
  const [meals, setMeals] = useState([]);

  const setMealByResult = async (value) => {
    const query = `www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    const request = await fetch(query);
    const response = await request.json();
    setMeals(response);
  };

  useEffect(async () => {
    const query = 'www.themealdb.com/api/json/v1/1/randomselection.php';
    const request = await fetch(query);
    const response = await request.json();
    setMeals(response);
  }, []);

  return (
    <div>
      <SearchBar searchFunction={setMealByResult} />
      <MealGrid mealResult={meals} />
    </div>
  );
}
