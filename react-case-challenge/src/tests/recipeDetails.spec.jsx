/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import renderWithRouter from './helper/renderWithRouter';
import RecipeDetails from '../pages/RecipeDetails';

jest.spyOn(global, 'fetch');
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({

  }),
}));

describe('testing recipeDetails page', () => {
  it('Shold start with loading text', () => {
    const { getByText, history } = renderWithRouter(<RecipeDetails />);
    history.push('/52977');
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeDefined();
  });
});
