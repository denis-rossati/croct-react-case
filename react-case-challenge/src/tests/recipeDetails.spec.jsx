/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import renderWithRouter from './helper/renderWithRouter';
import RecipesDetails from '../pages/RecipeDetails';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({

  }),
}));

describe('testing recipeDetails page', () => {
  it('Shold start with loading text', () => {
    const { getByText } = renderWithRouter(<RecipesDetails />);
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeDefined();
  });
});
