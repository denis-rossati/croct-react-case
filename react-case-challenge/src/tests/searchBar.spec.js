/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* the disable above is about eslint not recognizing test patterns */
import React from 'react'
import renderWithRouter from './helper/renderWithRouter'
import { fireEvent } from '@testing-library/dom'
import { toBeDisabled, toBeEnabled } from '@testing-library/jest-dom/extend-expect'
import searchBar from '../components/searchBar';

describe('Check existence of searchBar components', () => {
  it('Should have a text input', () => {
    const { getByRole } = renderWithRouter(<searchBar />)
    const textInput = getByRole('textbox', {
      placeholder: 'Insert your search here...'
    })
    expect(textInput).toBeDefined()
  })
})
