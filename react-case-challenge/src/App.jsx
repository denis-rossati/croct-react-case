import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/:id">
        <RecipeDetails />
      </Route>
      <Route exact path="/main-page">
        <MainPage />
      </Route>
      <Route exact path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
