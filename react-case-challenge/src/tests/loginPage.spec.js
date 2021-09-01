import React from 'react'
import renderWithRouter from './renderWithRouter'
import LoginPage from '../pages/LoginPage'

describe('Login page tests', () => {
  it('Should have the right path', () => {
    const { history } = renderWithRouter(<LoginPage />)
    const pathname = history.location.pathname
    expect(pathname).toBe('/')
  })

  it('Should have two text inputs', () => {
    const { getByPlaceholderText } = renderWithRouter(<LoginPage />)
    const emailInput = getByPlaceholderText('e-mail')
    const passwordInput = getByPlaceholderText('password')
    expect(emailInput).toBeDefined()
    expect(passwordInput).toBeDefined()
  })

  it('Should have a submit button', () => {
    const { getByRole } = renderWithRouter(<LoginPage />)
    const submitButton = getByRole('button', {
      type: 'submit'
    })
    expect(submitButton).toBeDefined()
  })
})
