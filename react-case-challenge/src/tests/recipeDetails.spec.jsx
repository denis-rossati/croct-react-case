/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import renderWithRouter from './helper/renderWithRouter';
import recipesDetails from '../pages/RecipeDetails';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({

  }),
}));

describe('testing recipeDetails page', () => {
  it('Shold have the main components', () => {

  });
});
